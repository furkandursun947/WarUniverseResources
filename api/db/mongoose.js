const mongoose = require('mongoose');

mongoose.Promise = global.Promise;



const dburl = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@waruniverseresources.hljo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


mongoose.connect(dburl).then(()=>{
    console.log("connected to db..");
}).catch((err)=>{
    console.log("err =>", err);
})


module.exports = {
    mongoose
};