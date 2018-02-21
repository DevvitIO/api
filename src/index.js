require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

require('mongoose');
require('./db');

const router = new express.Router();

require('./routes/leaderboard')(router);

app.use('/api', router);

app.listen(port);
console.log(`Started server on port ${port}!`);
