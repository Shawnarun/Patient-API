const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const xssProtection = require('x-xss-protection');
const cors = require('cors')
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const bodyParser = require('body-parser');



const patientRoutes = require('./routes/patientRoutes')

const app = express();
app.use(bodyParser.json());


app.use(helmet());




if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};


app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xssProtection());
app.use(cors());


app.use('/api/v1/patient',patientRoutes);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


module.exports = app;