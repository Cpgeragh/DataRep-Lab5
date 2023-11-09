// Import Express Library
const express = require('express');
// Create Express Application
const app = express();
// Set Port Number
const port = 4000;

// Import Body-Parser Library
const bodyParser = require('body-parser');

// Use Body-Parser Middleware to Handle URL-Encoded and JSON Data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define Route for Root Endpoint
app.get('/', (req, res) => {

    res.send('Welcome to Data Representation and Querying');

});

// Define Route That Takes Parameter in URL
app.get('/hello/:name', (req, res) => {

    // Log Parameter to the Console
    console.log(req.params.name);
    // Send Response With a Greeting Including the Parameter
    res.send('Hello ' + req.params.name);

});

// Define Route for Serving a HTML File
app.get('/test', (req, res) => {

    // Send the index.html File Located in Same Directory
    res.sendFile(__dirname + '/index.html');

});

// Define Route for /Whatever
app.get('/Whatever', (req, res) => {

    res.send('Goodbye!');

});

// Define Route for Handling POST Requests to /name
app.post('/name', (req, res) => {

    // Send Response With a Greeting Using Data From Request Body
    res.send("Hello " + req.body.fname + " " + req.body.lname);

});

// Define Route for Handling GET Requests to /name
app.get('/name', (req, res) => {

    // Send Response With a Greeting Using Data From the Query Parameters
    res.send("Hello " + req.query.fname + " " + req.query.lname);

});


// Define Route for Serving a JSON Response With Book Data
app.get('/api/books', (req, res) => {

    const data = [

        // Book 1
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },

        // Book 2
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },

        // Book 3
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }

    ];

    // Send a JSON Response With Book Data and Message
    res.status(200).json({

        cormac_books: data,
        message: "Hello from the server!"

    });

});

// Start the Server and Listen on Specified Port
app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

});





