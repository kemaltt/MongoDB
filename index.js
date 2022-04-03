const mongoose = require('mongoose')


// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/moviesApp')

// }
// main()
//     .then(() => console.log('connection successful'))
//     .catch(err => console.log('connection err', err))

mongoose.connect('mongodb://localhost:27017/moviesApp')
const db = mongoose.connection
db.on('error', () => console.log('connection err'))
db.once('open', () => console.log('connection successful'))