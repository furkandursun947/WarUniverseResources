const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const NpcSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    btc:{
        type: String,
        required: true,
    },
    plt:{
        type: String,
        required: true,
    },
    exp:{
        type: String,
        required: true,
    },
    hnr:{
        type: String,
        required: true,
    },
    hp:{
        type: String,
        required: true,
    },
    shd:{ 
        type: String,
        required: true,
    },
    speed:{
        type:String,
        required: true
    },
    white:{
        type: String,
        required: true,
    }
}, {timestamps: true, versionKey: false});

autoIncrement.initialize(mongoose.connection);
NpcSchema.plugin(autoIncrement.plugin, {
    model: "Npc",
    field: "_id",
    startAt: 1,
    incrementBy: 1
});

const Npc = mongoose.model('Npc', NpcSchema);

module.exports = {
    Npc
}