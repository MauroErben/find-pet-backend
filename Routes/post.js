const express = require('express')
const router = express.Router()
const PostController = require('../controllers/post')
const multer = require('multer')
const upload = multer({ dest: 'public/images' })

router.get('/posts', PostController.getAllPosts)
router.get('/posts/:id', PostController.getPostById)
router.post('/posts', upload.single('image'), PostController.createPost)
router.delete('/posts/:id', PostController.deletePost)
router.put('/posts/:id', PostController.updatePost)

module.exports = router