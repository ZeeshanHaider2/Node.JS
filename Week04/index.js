const express = require('express')
const {json} = require('body-parser')
//when someone send data, body parser will convert  string to JSON
const app = express()
const port = 8888

const cars_route = require('./cars_route');


// parse application/json 
//In order to get access to the post data we have to use body-parser. Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
app.use(json())

app.use('/cars', cars_route) 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))