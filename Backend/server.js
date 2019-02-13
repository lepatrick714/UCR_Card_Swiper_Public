const express = require('express');
const app = express();
const port = 8080;

const RGearApi = require('./API/RGearApi');
const secretConfig = require('./Config.js');

// Connection Details
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: secretConfig.host,
  user: secretConfig.user,
  password: secretConfig.password,
  database: secretConfig.database
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Default endpoint
app.get('/', (req, res) => res.send('RGear Api Endpoint Working!'));

// Records the new student swipes
app.get('/insertStudentId', (req, res) => {
  let studentId = req.query.sid;
  RGearApi.insertStudentId(connection, studentId, (resp) => {
    res.send(resp);
  });
});

// Validates if the student is a current student of UCR
app.get('/validateStudent', (req, res) => {
  let studentId = req.query.sid;
  RGearApi.validateStudent(connection, studentId, (resp) => {
    res.send(resp);
  });
});

// Check if the student in question has already receives a sweater
app.get('/checkDuplicateStudent', (req, res) => {
  let studentId = req.query.sid;
  RGearApi.checkDuplicateStudent(connection, studentId, (resp) => {
    res.send(resp);
  });
});

// Get the running total of the sweaters
app.get('/getNumberOfSweaters', (req, res) => {
  RGearApi.getNumberOfSweaters(connection, (resp) => {
    res.send(resp);
  });
});

// Starting Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
