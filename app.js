var express = require('express');
var app = express();
var bodyParser = require('body-parser')
//var models  = require('./models').book;
var sequelize = require('./models/book').sequelize
var Book = require('./models/book').Book

var port = process.env.PORT || 3000;

//Using the body parser to parse json body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var bookrouter = express.Router();
var authorrouter = express.Router();

app.use('/books',bookrouter)
app.use('/author',authorrouter)

sequelize.sync() // This will create the table if it doesn't exist in the database


///////////Book API implementation///////////
bookrouter
    .get('/:id',function(request,response){
        response.status(200);
        response.send("Got request")
        console.log('Book ID requested = '+request.params.id)
    })
    .put('/',function(request,response){
        console.log("Received book data for addition"+ JSON.stringify(request.body))
        console.log("Name is "+request.body.name)
        Book.create(
            {
                //id: request.params.id, This is auto generated
                name: request.body.name,
                author: request.body.author,
                series_t: request.body.series_t,
                sequence_i: request.body.sequence_i,
                genre_s: request.body.genre_s,
                inStock: request.body.inStock,
                price: request.body.price,
                pages_i: request.body.pages_i,
            }
        ).then(function(b){
            console.log('Successfully saved the Book '+JSON.stringify(request.body)+'. Book ID ='+b.id)
            response.status(201)
            response.json({status: "Created", book: b})
            //response.send();
        })
    })
    .post('/:id',function(request,response){
        console.log("Received book data for updation"+ JSON.stringify(request.body))
        response.send("Received books data. Thanks")
    })
    .delete('/:id',function(request,response){
        console.log("Received book data for deletion"+ JSON.stringify(request.body))
        response.send("Will delete book ID :" + request.params.id)
    })
/////////////////////////////////////////




    //App server start and listen
app.listen(port, function () {
         console.log('API listening on port 3000!')
       })