import mongoose from 'mongoose'

const ordersSchema = new mongoose.Schema({    
    skusername: {
        type: String
    },
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

const ordersModel = mongoose.model('orders', ordersSchema)

export default ordersModel