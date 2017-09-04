var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var port = process.env.PORT || 3000;

//Using the body parser to parse json body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var bookrouter = express.Router();
var authorrouter = express.Router();

app.use('/books',bookrouter)
app.use('/author',authorrouter)


///////////Book API implementation///////////
bookrouter
    .get('/:id',function(request,response){
        response.status(200);
        response.send("Got request")
        console.log('Book ID requested = '+request.params.id)
    })
    .put('/',function(request,response){
        console.log("Received book data for addition"+ JSON.stringify(request.body))
        response.json({
            message : "OK",
            status : "Created",
            book : request.body
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