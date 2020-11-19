import express from 'express'

import { createPost, getPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/',getPost)
router.post('/',createPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)

export default router