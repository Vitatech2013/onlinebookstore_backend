
import shopKeeperModel from '../Common/shopKeeperModel';
import usersModel from '../Common/usersModel';
import booksModel from '../Common/booksModel';
import queriesModel from '../Common/queriesModel';
import orderModel from '../Common/orderModel';
import {sendEmail} from '../Common/email';

export const login = (req, res) =>{
    shopKeeperModel.findOne( {"username":req.query.username, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const registration = (req, res) => {
  shopKeeperModel.create(req.body, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const viewProfile = (req, res) => {
  shopKeeperModel.find({"id":req.query._id}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const updateProfile = (req, res) => {
    shopKeeperModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
        res.send(result);
    }
  })
}

export const viewUsers = (req, res) => {
  usersModel.find((err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const addBooks = (req, res) => {
  booksModel.create(req.body, (err, result) => {
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

export const downloadFiles = (req, res) => {
booksModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateBook = (req, res) => {
    booksModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
        res.send(result);
    }
  })
}

export const deleteBook = (req, res) => {
    booksModel.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  });
}

export const viewOrders = (req, res) => {
  orderModel.find({"skusername":req.query.skusername}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const viewQueries = (req, res) => {
  queriesModel.find({"shopname":req.query.shopname}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}


export const updatePassword = (req, res) =>{
  shopKeeperModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  shopKeeperModel.find({"emailid":req.query.emailid}, (err, result) => {
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