const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
dotenv.config({ path: './config.env' });
require('./models/Connection');

const announcementRouter = require('./router/announcementRouter');
const quizRouter = require('./router/quizRouter');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/announcements', announcementRouter);
app.use('/api/quizzes', quizRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listing For Incomging Requests on Port: ${PORT}`);
});
