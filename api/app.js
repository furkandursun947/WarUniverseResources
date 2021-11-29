const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');




const npcRoutes = require('./routes/npcRoutes');
const scorePVERoutes = require('./routes/scorePVERoutes');

const app = express();


//* ----------------- MIDDLEWARES ---------------------------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });


//* ---------------- ROUTES ---------------------------------

app.use("/npcs", npcRoutes);
app.use("/scorePVE", scorePVERoutes);


module.exports = app;



// ---------------------------------------------------------------------


