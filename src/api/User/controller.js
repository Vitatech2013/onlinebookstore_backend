
import shopKeeperModel from '../Common/shopKeeperModel';
import usersModel from '../Common/usersModel';
import booksModel from '../Common/booksModel';
import queriesModel from '../Common/queriesModel';
import favouriteModel from '../Common/favouriteModel';
import orderModel from '../Common/orderModel';
import {sendEmail} from '../Common/email';

export const login = (req, res) =>{
  usersModel.findOne( {"username":req.query.username, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const registration = (req, res) => {
  usersModel.create(req.body, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const viewProfile = (req, res) => {
  usersModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

export const updateProfile = (req, res) => {
  usersModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
        res.send(result);
    }
  })
}

export const viewShops = (req, res) => {
  shopKeeperModel.find((err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const viewBooks = (req, res) => {
  booksModel.find({"username":req.query.username}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const getBook = (req, res) => {
  booksModel.findById(req.params.id, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const searchBooks = (req, res) => {
  booksModel.find({$or:[{"bookname":req.query.bookname}, {"author":req.query.author}]}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const order = (req, res) => {
  orderModel.create(req.body, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const viewOrders = (req, res) => {
  orderModel.find({"username":req.query.username}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const getMyBook = (req, res) => {
  orderModel.findById(req.params.id, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const addFavourite = (req, res) => {
  favouriteModel.create(req.body, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const viewFavourites = (req, res) => {
  favouriteModel.find({"username":req.query.username}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const addQueries = (req, res) => {
  queriesModel.create(req.body, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const viewQueries = (req, res) => {
  queriesModel.find({"username":req.query.username}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}


export const updatePassword = (req, res) =>{
  usersModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  usersModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
       result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
       })      
      res.send(result);
    }
  })
}