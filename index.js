const mongoose = require('mongoose')


async function main() {
    await mongoose.connect('mongodb://localhost:27017/moviesApp')

}
main()
    .then(() => console.log('connection successful'))
    .catch(err => console.log('connection err', err))

// mongoose.connect('mongodb://localhost:27017/moviesApp')
// const db = mongoose.connection
// db.on('error', () => console.log('connection err'))
// db.once('open', () => console.log('connection successful'))

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    popularity: Number
})

const Movie = mongoose.model('Movie', movieSchema)

// const gotFather = new Movie({
//     name: 'The Godfather',
//     year: 1973,
//     rating: 9.2,
//     popularity: 38
// })

// gotFather.save()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// CRUD ===========================
// Create--------- insert---------------

// Movie.insertMany([{
//             name: 'The Avengers',
//             rating: 8.1,
//             popularity: 368
//         },
//         {
//             name: 'Iron man',
//             rating: 8,
//             popularity: 345
//         },
//         {
//             name: 'Cast Away',
//             rating: 7.8,
//             popularity: 500
//         }
//     ])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Read------Find--------------------------------

// Tümünü getirmek için
// Movie.find()============================================
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
// Tek getirmekiçin =======================================
// Movie.find({
//         name: 'The Godfather'
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// belirli bir değer arasında çağırmak için ======================================

// Movie.find({
//         rating: {
//             $gte: 9
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Movie.find({
//         rating: {
//             $lte: 8
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Movie.findOne({
//         name: {
//             $in: ['Iron man', 'Cast Away']
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Movie.findById('6249c53c5d93e34bdfb99d20')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Update------------------------------

// Movie.updateOne({
//         name: 'Iron man'
//     }, {
//         name: 'Iron Man'
//     }).then(data => console.log(data))
//     .catch(err => console.log(err))

// Movie.updateMany({
//         name: {
//             $in: ['The Avengers', 'Iron Man']
//         }
//     }, {
//         rating: 10
//     }).then(data => console.log(data))
//     .catch(err => console.log(err))

// Movie.findOneAndUpdate({ name: 'The Avengers' }, { popularity: 500 }, { new: true })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Movie.findByIdAndUpdate('6249bfd2b9ebb19e5943f31e', { rating: 8 }, { new: true })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Delete----------------------------------------------------
// Movie.deleteMany({ rating: { $gte: 8 } })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Movie.findOneAndDelete({
//         name: 'Cast Away'
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))