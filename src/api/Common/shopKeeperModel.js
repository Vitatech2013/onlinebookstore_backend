import mongoose from 'mongoose'

const shopKeeperSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    emailid: {
        type: String
    },
    address: {
        type: String
    },
    shopname: {
        type: String
    },
    branch: {
        type: String
    },
    shopaddress: {
        type: String
    },
    status: {
        type: String
    }
},
    {
        timestamps: true
    });

const shopkeeperModel = mongoose.model('shopkeepers', shopKeeperSchema)

export default shopkeeperModel