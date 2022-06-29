/** Neuroexed Application Server Connection
 */


 'use strict';
 const express = require("express");
 const PORT = process.env.PORT || 3001;
 const app = express();
 const fs = require('fs');
 const path = require('path');
 const cors = require('cors');


var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '156.67.72.51',
    user : 'u545986082_admin',
    password : 'kirwef-0rovqo-kanBit',
    database : 'u545986082_NeuroExedData'
});




var blog_data = "";
var affiliation_data = "";
var project_member_data = "";
var project_data = "";
var people_data = "";


connection.connect();

connection.query("SELECT * FROM Blog ORDER BY media_priority", function (error, results, fields) {
    if (error) throw error;
    blog_data = results;
});

connection.query("SELECT * FROM Project_Member_Connection pm INNER JOIN Member m ON pm.member_ID = m.member_ID INNER JOIN Project p on p.project_ID = pm.project_ID ORDER BY p.project_title;", function (error, results, fields) {
    if (error) throw error;
    project_member_data = results;
});

connection.query("SELECT * FROM Affiliation ORDER BY affiliation_priority", function (error, results, fields) {
  if (error) throw error;
  affiliation_data = results;
});
 
connection.query("SELECT * FROM Project ORDER BY project_priority", function (error, results, fields) {
    if (error) throw error;
    project_data = results;
});

connection.query("SELECT * FROM Member WHERE last_name != 'Stellar'", function (error, results, fields) {
    if (error) throw error;
    people_data = results;
});

connection.end();
 
app.use(express.static(path.resolve(__dirname, '../client/start')));

app.use(cors());
 
app.get("/affiliations-data", (req, res) => {
     res.json({ content : JSON.stringify(affiliation_data)});
});

app.get("/project-member-data", (req, res) => {
    res.json({ content : JSON.stringify(project_member_data)});
});
 
app.get("/blog-data", (req, res) => {
    res.json({ content : JSON.stringify(blog_data)});
});

app.get("/project-data", (req, res) => {
    res.json({ content : JSON.stringify(project_data)});
});

app.get("/people-data", (req, res) => {
    res.json({ content : JSON.stringify(people_data)});
});
 
app.listen(PORT, () => {
    console.log('Server now listening on '+PORT);
});
 
 