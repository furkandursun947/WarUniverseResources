const { mongoose } = require('../db/mongoose');

const { Npc, ScorePVE } = require("../db/models/index");




exports.npcs_get_all = (req, res) => {
    Npc.find({}).then((npcs) => {
        res.send(npcs);
    })
}

exports.npcs_get_one = (req, res) => {
    Npc.findOne({_id: req.params.id}, (err, npc) => {
        if(err) return res.status(500).json({
            title: 'Internal server error',
            error: err
        });
        else if(!npc) return res.status(404).json({
            title: 'Not Found',
            error: err
        })
        else{
            res.send(npc);
        }
    })
}



exports.npcs_add_one = (req, res) => {
    let name = req.body.name;
    let btc = req.body.btc;
    let plt = req.body.plt;
    let exp = req.body.exp;
    let hnr = req.body.hnr;
    let hp = req.body.hp;
    let shd = req.body.shd;
    let speed = req.body.speed;
    let white = req.body.white;


    let newNpc = new Npc({
        name,
        btc,
        plt,
        exp,
        hnr,
        hp,
        shd,
        speed,
        white
    });

    newNpc.save().then((listNpc) => {
        res.send(listNpc);
    })
}

exports.npcs_update_one = (req, res) => {
    Npc.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(() => {
        res.send("Updated successfully");
    })
}


exports.npcs_delete_one = (req, res) => {
    Npc.findOneAndDelete({_id: req.params.id}, {
    }).then((removedNpc) => {
        res.send(removedNpc);
    });
    //* To do
    // hyper ve ultrasınıda silmen gerek.
    // scorepve den silmen gerek
}