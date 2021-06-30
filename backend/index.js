const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDb = require('../backend/config/database');

dotenv.config();
const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json('hello World!!!');
});

app.listen(PORT, () => {
  console.log(`Listening in on PORT: ${PORT}`);
});
