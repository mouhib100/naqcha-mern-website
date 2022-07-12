//we can create new posts, delete them, update them

//we will be able to delete update our users
const User = require("../models/User")
const Post = require("../models/Post")


//CREATE NEW POST

exports.addpost = async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        return res.status(200).json(savedPost)

    } catch (error) {
        return res.status(500).json(error)
    }

}


//UPDATE POSTE

exports.updatepost = async (req, res) => {
    console.log(req.params)
    const { id } = req.params
    try {
        await Post.findByIdAndUpdate(id, { $set: { ...req.body } });
        const updatedPost = await Post.findById(id)
        console.log({ msg: 'post updated successfully', updatedPost })
        return res.status(200).json({ msg: 'post updated successfully', updatedPost })

    } catch (error) {
        return res.status(500).send({ error: error })
    }
}


//DELETE POST
exports.deletepost = async (req, res) => {

    const { id } = req.params
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        return res.status(200).send({ msg: 'post deleted successfully', deletedPost })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}


//GET POST
exports.getpost = async (req, res) => {

    const { id } = req.params
    try {
        const getPost = await Post.findById(id);
        return res.status(200).send({ msg: 'post fetched successfully', getPost })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}



//GET allPOSTs
exports.getAllPosts = async (req, res) => {

    try {
        const posts = await Post.find()
        return res.status(200).send({ msg: 'get all posts successfully',posts})

    } catch (error) {
        return res.status(500).send({ error: error })
    }
}