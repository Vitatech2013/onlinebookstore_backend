import mongoose from 'mongoose'

const queriesSchema = new mongoose.Schema({
    username: {
        type: String
    },
    shopname: {
        type: String
    },
    bookname: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    }
},
    {
        timestamps: true
    });

const queriesModel = mongoose.model('queries', queriesSchema)

export default queriesModel