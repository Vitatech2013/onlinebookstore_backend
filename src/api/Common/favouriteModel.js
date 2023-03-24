import mongoose from 'mongoose'

const favouriteSchema = new mongoose.Schema({
    username: {
        type: String
    },
    bookname: {
        type: String
    },
    author: {
        type: String
    },
    publisher: {
        type: String
    },
    volume: {
        type: String
    },
    image: {
        type: String
    }
},
    {
        timestamps: true
    });

const favouriteModel = mongoose.model('favourites', favouriteSchema)

export default favouriteModel