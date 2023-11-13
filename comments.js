// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())

// Create a comment
app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body

    const comments = commentsByPostId[req.params.id] || []

    comments.push({ id: commentId, content })

    commentsByPostId[req.params.id] = comments

    res.status(201).send(comments)
})

// Get comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
})

// Listen on port 3001
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})