require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

require('mongoose');
require('./db');

app.use(cors());

const router = new express.Router();

require('./routes/leaderboard')(router);
app.use('/v1', router);

app.listen(port);
console.log(`Started server on port ${port}!`);
