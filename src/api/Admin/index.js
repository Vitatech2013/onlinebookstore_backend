import { Router } from 'express'

import {
  login,
  forgotPassword,
  updatePassword,
  viewShopKeepers,
  viewUsers,
  viewBooks,
  viewQueries,
  downloadFiles,
  deleteShop
} from './controller'

const router = new Router()

router.get('/login', login)

router.get('/forgotpassword', forgotPassword)

router.put('/updatepassword/:id',updatePassword)

router.get('/viewShopKeepers', viewShopKeepers)

router.get('/viewUsers', viewUsers)

router.get('/viewBooks', viewBooks)

router.get('/download/:id', downloadFiles)

router.get('/viewQueries', viewQueries)

router.delete('/deleteshop/:id', deleteShop)


export default router
