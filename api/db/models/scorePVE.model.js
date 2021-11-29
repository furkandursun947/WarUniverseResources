
const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const ScorePVESchema = new mongoose.Schema({
    npcId:{
        type: String,
        required: true
    },
    permaPoint:{
        type: String,
        required: true,
    },
    oneDayPoint:{
        type: String,
        required: true,
    },
    oneWeekPoint:{
        type: String,
        required: true,
    },
    twoWeekPoint:{
        type: String,
        required: true,
    },
    threeWeekPoint:{
        type: String,
        required: true,
    },
    fourWeekPoint:{
        type: String,
        required: true,
    },
    oneMonthPoint:{
        type: String,
        required: true,
    }
});

autoIncrement.initialize(mongoose.connection);
ScorePVESchema.plugin(autoIncrement.plugin, {
    model: "ScorePVE",
    field: "_id",
    startAt: 1,
    incrementBy: 1
});

const ScorePVE = mongoose.model('ScorePVE', ScorePVESchema);

module.exports = {
    ScorePVE
}