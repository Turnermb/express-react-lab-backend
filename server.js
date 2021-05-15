// Import Dependencies
const express = require('express')
const cors = require('cors')

// Import JSON Files
const projects = require('./projects.json')
const about = require('./about.json')

// Create App Object
const app = express() 

// Set Up Middleware
app.use(cors())

// Home Route
app.get('/', (req, res) => {
    res.send("Hello, is it me you're looking for?")
})

// Route For Retrieving Projects
app.get('/projects', (req, res) => {
res.json(projects)
})

// Route For Retrieving About
app.get('/about', (req, res) => {
    res.json(about)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Port ${PORT} has been engaged. Welcome aboard.`))