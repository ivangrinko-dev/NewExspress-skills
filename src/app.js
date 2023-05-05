const express = require(`express`);
const bodyParser = require(`body-parser`);
const skills = require(`./controller/skills.controller`);
const app = express();
app.use(bodyParser.json());

app.use(`/skill`, skills);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
