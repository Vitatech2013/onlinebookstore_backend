import mongoose from 'mongoose'

const booksSchema = new mongoose.Schema({    
    username: {
        type: String
    },
    category: {
        type: String
    },
    subcategory: {
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
    type: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
    file: {
        type: String
    }
},
    {
        timestamps: true
    });

const booksModel = mongoose.model('books', booksSchema)

export default booksModel