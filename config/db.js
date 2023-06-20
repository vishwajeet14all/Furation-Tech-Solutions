const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/item_api')

const db = mongoose.connection

db.once('open',() => {
    console.log("DB Connected Successfully!")
})

module.exports = db