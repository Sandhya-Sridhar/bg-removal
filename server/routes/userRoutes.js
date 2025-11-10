import express from 'express'
import { clerkWebHooks } from '../controllers/UserController'

const userRouter=express.Router()

userRouter.post('/webhooks',clerkWebHooks)

export default userRouter