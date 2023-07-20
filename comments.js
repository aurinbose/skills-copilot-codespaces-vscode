// Create Web Server
// 1. Create a web server object
// 2. Create a web server
// 3. Run the web server

// Import the express module
const express = require('express');

// Create a web server object
const app = express();

// Create a web server
app.listen(3000, () => {
    console.log('Web server running on port 3000');
});

// Import the data module
const data = require('./data');

// Import the body-parser module
const bodyParser = require('body-parser');

// Use the body-parser module
app.use(bodyParser.urlencoded({ extended: false }));

// Use the body-parser module
app.use(bodyParser.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the route for the home page
app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Home Page',
        comments: data.comments
    });
});

// Set the route for the about page
app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Page'
    });
});

// Set the route for the contact page
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact Page'
    });
});

// Set the route for the comment page
app.get('/comment', (req, res) => {
    res.render('pages/comment', {
        title: 'Comment Page'
    });
});

// Set the route for the comment page
app.post('/comment', (req, res) => {
    console.log(req.body);
    //res.send('You have submitted the comment');
    data.comments.push(req.body);
    res.redirect('/');
});

// Set the route for the comment page
app.get('/delete/:id', (req, res) => {
    console.log(req.params.id);
    //res.send('You have submitted the comment');
    data.comments.splice(req.params.id, 1);
    res.redirect('/');
});

// Set the route for the comment page
app.get('/edit/:id', (req, res) => {
    console.log(req.params.id);
    //res.send('You have submitted the comment');
    res.render('pages/comment', {
        title: 'Edit Comment',
        comment: data.comments[req.params.id],
        id: req.params.id
    });
});