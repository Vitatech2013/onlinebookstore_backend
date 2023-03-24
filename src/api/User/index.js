import { Router } from 'express'

import {
  login,
  forgotPassword,
  updatePassword,
  registration,
  viewProfile,
  updateProfile,
  viewShops,
  searchBooks,
  viewBooks,
  getBook,
  order,
  viewOrders,
  getMyBook,
  addFavourite,
  viewFavourites,
  addQueries,
  viewQueries
} from './controller'

const router = new Router()

router.get('/login', login)

router.get('/forgotpassword', forgotPassword)

router.put('/updatepassword/:id',updatePassword)

router.post('/registration', registration)

router.get('/viewProfile', viewProfile)

router.put('/updateProfile/:id', updateProfile)

router.get('/viewShops', viewShops)

router.get('/viewBooks', viewBooks)

router.get('/getBook/:id', getBook)

router.get('/searchBooks', searchBooks)

router.post('/order', order)

router.get('/viewOrders', viewOrders)

router.get('/getMyBook/:id', getMyBook)

router.post('/addFavourite', addFavourite)

router.get('/viewFavourites', viewFavourites)

router.post('/addQueries', addQueries)

router.get('/viewQueries', viewQueries)

export default router
