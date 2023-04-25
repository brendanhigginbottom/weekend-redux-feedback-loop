const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
//Route
const surveyRouter = require('./routes/survey.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use('/survey', surveyRouter);

app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});