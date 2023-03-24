
import adminModel from './adminModel';
import shopKeeperModel from '../Common/shopKeeperModel';
import usersModel from '../Common/usersModel';
import booksModel from '../Common/booksModel';
import queriesModel from '../Common/queriesModel';
import {sendEmail} from '../Common/email';

export const login = (req, res) =>{
  adminModel.findOne( {"username":req.query.username, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const updatePassword = (req, res) =>{
  adminModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  adminModel.find({"emailid":req.query.emailid}, (err, result) => {
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

export const viewShopKeepers = (req, res) => {
  shopKeeperModel.find((err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
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

export const viewBooks = (req, res) => {
  booksModel.find((err, result) => {
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

export const viewQueries = (req, res) => {
  queriesModel.find((err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const deleteShop = (req, res) => {
  shopKeeperModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }