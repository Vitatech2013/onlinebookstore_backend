import { Router } from 'express'

import Admin from './Admin'
import ShopKeeper from './ShopKeeper'
import User from './User'

const router = new Router()

router.use('/admin', Admin)
router.use('/shopkeeper', ShopKeeper)
router.use('/user', User)

export default router