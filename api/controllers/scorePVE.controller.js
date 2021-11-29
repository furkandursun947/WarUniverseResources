const { mongoose } = require('../db/mongoose');


const { Npc, ScorePVE } = require("../db/models/index");






exports.scorePVE_get_all = (req, res) => {
    ScorePVE.find({}, (err, scorepves) =>{
        if(err) return res.status(500).json({
            title: 'Internal server error',
            error: err
        });
        else if(!scorepves) return res.status(204).json({
            title: 'No score pve npc found',
            error: err
        });
        else{
            res.send(scorepves);
        }
    })
};

// get one scorepve
exports.scorePVE_get_one = (req, res) => {
    ScorePVE.findOne({_id: req.params.id}, (err, scorepve) => {
        if(err) return res.status(500).json({
            title: 'Internal server error',
            error: err
        });
        else if(!scorepve) return res.status(204).json({
            title: 'No score pve npc found',
            error: err
        });
        else{
            res.send(scorepve);
        }
    })
};

// Add a scorePVE
exports.scorePVE_add_one = (req,res) => {
    let npcId = req.body.npcId;
    let permaPoint = req.body.permaPoint;
    let oneDayPoint = req.body.oneDayPoint;
    let oneWeekPoint = req.body.oneWeekPoint;
    let twoWeekPoint = req.body.twoWeekPoint;
    let threeWeekPoint = req.body.threeWeekPoint;
    let fourWeekPoint = req.body.fourWeekPoint;
    let oneMonthPoint = req.body.oneMonthPoint;

    let newScorePVE = new ScorePVE({
        npcId,
        permaPoint,
        oneDayPoint,
        oneWeekPoint,
        twoWeekPoint,
        threeWeekPoint,
        fourWeekPoint,
        oneMonthPoint
    });

    Npc.findOne({_id:npcId}, (err, npc) =>{
        if(err) return res.status(500).json({
            title: 'Internal server error',
            error: err
        });
        else if(!npc) return res.status(204).json({
            title: 'No npc found',
            error: err
        });
        else{
            newScorePVE.save().then((newAdded) => {
                res.send(newAdded);
            })
        }
    })
};

// Update One ScorePVE
exports.scorePVE_update_one = (req, res) => {
    ScorePVE.findOneAndUpdate({_id: req.params.id}, {$set: req.body}).then(()=>{
        res.send("updated successfully.");
    }).catch((err) => {
        return res.status(404).json({
            title: "No scorepve found to update",
            error: err
        })
    })
};

// Delete a ScorePVE
exports.scorePVE_delete_one =  (req, res) => {
    ScorePVE.findOneAndDelete({_id:req.params.id}, (err, scorepve) => {
        if(err) return res.status(500).json({
            title: 'Internal server error',
            error: err
        });
        else if(!scorepve) return res.status(204).json({
            title: 'No score found to delete',
            error: err
        });
        else{
            res.send(scorepve);
        }
    })
    //* hyper ve ultrayıda silmen gerek
};
