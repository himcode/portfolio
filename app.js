const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'Home'}
    res.status(200).render('home.pug', params);
    console.log(params.title);
})

app.get('/skills', (req, res)=>{
    const params = {'title': 'Skills'}
    res.status(200).render('skills.pug', params);
    console.log(params.title);
})

app.get('/experience', (req, res)=>{
    const params = {'title': 'Experience'}
    res.status(200).render('experience.pug', params);
    console.log(params.title);
})

app.get('/contact', (req, res)=>{
    const params = {'title': 'Contact'}
    res.status(200).render('contact.pug', params);
    console.log(params.title);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});