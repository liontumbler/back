const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test').catch(function (error) {
    console.log('error', error);
});