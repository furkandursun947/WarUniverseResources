const express = require('express');
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;

const HOST = process.env.HOST;

const server = app.listen(PORT, HOST, () => {
    console.log(`server is started and listening in ${HOST} ${PORT}..`);
})