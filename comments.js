// Create Web Server
// Create Express Application
// Create Router
// Create Route
// Add Route to Router
// Add Router to Application
// Listen for Request
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

// Add Route to Router
router.get('/', (req, res) => {
    res.send('Comments Index Page');
});

// Add Router to Application
app.use('/comments', router);

// Listen for Request
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});