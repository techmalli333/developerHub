const mongoose = require('mongoose');

const review = new mongoose.Schema({
    taskProvider : { type : String, require: true },
    taskWorker : { type: String, require: true },
    rating : { type: String, require: true}
})

module.exports = mongoose.model('review',review)