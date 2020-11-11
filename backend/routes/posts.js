import express from 'express'

import { createPost, getPost } from '../controllers/posts.js'

const router = express.Router()

router.get('/',getPost)
router.post('/',createPost)

export default router