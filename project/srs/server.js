// server.js
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json()); // Use built-in body-parser
app.use(express.static('public')); // Serve static files from 'public'

let loginAttempts = [];

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Serve the login page
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Hardcoded credentials for demonstration
    if (username === 'admin' && password === 'password') {
        res.json({ success: true });
    } else {
        loginAttempts.push({ username, password }); // Store invalid login attempt
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

app.get('/admin-data', (req, res) => {
    res.json(loginAttempts); // Send invalid attempts to the admin panel
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
