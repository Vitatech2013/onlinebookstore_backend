import { Router } from 'express'

import {
  login,
  forgotPassword,
  updatePassword,
  registration,
  viewProfile,
  updateProfile,
  viewUsers,
  addBooks,
  viewBooks,
  getBook,
  updateBook,
  deleteBook,
  viewQueries,
  viewOrders,
  downloadFiles
} from './controller'

const router = new Router()

router.get('/login', login)

router.get('/forgotpassword', forgotPassword)

router.put('/updatepassword/:id',updatePassword)

router.post('/registration', registration)

router.get('/viewProfile', viewProfile)

router.put('/updateProfile/:id', updateProfile)

router.get('/viewUsers', viewUsers)

router.post('/addBooks', addBooks)

router.get('/viewBooks', viewBooks)

router.get('/getBook/:id', getBook)

router.get('/download/:id',downloadFiles)

router.put('/updateBook/:id', updateBook)

router.delete('/deleteBook/:id', deleteBook)

router.get('/viewOrders', viewOrders)

router.get('/viewQueries', viewQueries)

export default router
