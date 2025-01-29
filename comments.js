// create web server
const express = require('express');
const app = express();
// middleware
app.use(express.json());
// create comments array
const comments = {};
// create route to get comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(comments[req.params.id] || []);
});
// create route to post comments
app.post('/posts/:id/comments', (req, res) => {
    const id = Math.random().toString(36).slice(2);
    const { content } = req.body;
    const comment = comments[req.params.id] || [];
    comment.push({ id, content });
    comments[req.params.id] = comment;
    res.status(201).send(comment);
});
// listen to port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});
