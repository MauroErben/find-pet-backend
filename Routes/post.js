const express = require('express')
const router = express.Router()
const PostController = require('../controllers/post')

router.get('/posts', PostController.getAllPosts)
router.get('/posts/:id', PostController.getPostById)
router.post('/posts', PostController.createPost)
router.delete('/posts/:id', PostController.deletePost)
router.put('/posts/:id', PostController.updatePost)

module.exports = router