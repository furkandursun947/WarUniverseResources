const { mongoose } = require('../db/mongoose');

const { Npc, ScorePVE, User } = require("../db/models/index");



exports.get_all_users = (req, res) => {
     User.find({}).then((users) => {
        res.send(users);
     });
}


exports.get_one_user = (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => {
        if(err) return res.status(500).json({
            title: "Internal server error",
            error: err 
        });
        else if(!user) return res.status(404).json({
            title: "Not Found",
            error: err
        })
        else{
            res.send(user);
        }

    })
}


exports.update_user = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, {$set: req.body}).then(() =>{
        res.send("updated successfully.");
    }).catch((err) => {
        res.status(204).json({
            title:"No user",
            error: err
        });
    })
}


exports.delete_user = (req, res) => {
    User.findOneAndDelete({_id: req.params.id}, (err, user) => {
        if(err) return res.status(500).json({
            title: "Internal server error",
            error: err 
        });
        else if(!user) return res.status(404).json({
            title: "Not Found",
            error: err
        })
        else{
            res.send(user);
        }
    })
}
