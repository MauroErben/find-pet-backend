const models = require('../models')
const { Post } = models

class PostController {

    static async updatePost(req, res) {
        const { id } = req.params
        try {
            const post = await Post.findOne({ where: { id } })
            if (!post) return res.status(404).json({ message: 'No post found' })
            post.update(req.body)
            res.status(200).json({
                message: 'Post updated successfully',
                post
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    static async deletePost(req, res) {
        const { id } = req.params
        try {
            const post = await Post.findOne({ where: { id } })
            if (!post) return res.status(404).json({ message: 'No post found' })
            post.destroy()
            res.status(200).json({
                message: 'Post deleted successfully',
                post
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    static async createPost(req, res) {
        const file = req.file
        console.log(file)
        if(!file){
            return res.status(400).json({ message: `No image selected` })
        }
        try {
            const imgSrc = 'http://localhost:3001/images/' + req.file.filename
            req.body.image = imgSrc
            const newPost = await Post.create(req.body)
            res.status(201).json({
                message: 'Post created successfully',
                newPost
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    static async getAllPosts(req, res) {
        try {
            const post = await Post.findAll() // En caso de que no existan post, nos devolvera un array vacio
            res.status(200).json(post)
        } catch (error) {
            console.log(error)
        }
    }

    static async getPostById(req, res) {
        const { id } = req.params
        try {
            const post = await Post.findOne({ where: { id } })
            if (!post) return res.status(404).json({ message: "No post found" })
            res.status(200).json(post)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
}

module.exports = PostController