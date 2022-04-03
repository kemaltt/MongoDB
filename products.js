const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/products')
const db = mongoose.connection
db.on('error', () => console.log('connection err'))
db.once('open', () => console.log('connection successful'))