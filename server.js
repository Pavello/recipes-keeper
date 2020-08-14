const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Get body from requests
app.use(bodyParser.json());

//Set config and database connection to Mongo
const db = require('./config/keys').mongoURI;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose
    .connect(db)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

//Set application routes
app.use('/api/recipes', require('./routes/api/recipesResource.js'));

const PORT = 5666 || process.env.PORT;

app.listen(PORT, () => console.log(`App listen on port: ${PORT}`));
