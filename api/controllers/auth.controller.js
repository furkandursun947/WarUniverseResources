const mongoose = require('../db/mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { Npc, ScorePVE, User } = require("../db/models/index");



const verifyToken = (req, res, next) => {
    const token = req.body.token || req.headers["x-access-token"];
    if(!token) {
        return res.status(403).send("No token");
    }
    try{
        const decode = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}



exports.login = async (req, res) => {
    try{
        const {nickname, password} = req.body;
        if(!(nickname && password)){
            res.status(400).send("All Input is required");
        }

        const user = await User.findOne({nickname});

        if(user && (await bcrypt.compare(password, user.password))){

            //create the token
            const token = jwt.sign({
                id: user._id, nickname 
            }, process.env.TOKEN_KEY, {
                expiresIn: "2h",
            })

            user.token = token;
            res.status(200).json(user);
        }
        else{
            res.status(400).send("Invalid Credentials"); 
        }
    } catch (err) {
        console.log("error while login:",  err);
    }
}



exports.register = async (req, res) => {
    const {nickname, password, email} = req.body;

    if(!(email && password && nickname)){
        res.status(400).send("All input is required");
    }

    const findUser = await User.findOne({nickname});
    const checkEmail = await User.findOne({email});
    if(findUser || checkEmail){
        return res.status(409).send("User with that nickname already exist.");
    }
    else{
        encryptPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            nickname,
            email,
            password: encryptPassword
        })

        const token = await jwt.sign({
            _id: user._id, nickname
        }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
        })

        user.token = token;

        res.status(201).json(user);
    }
}