const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;


// MiddleWare 
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('hero rider is runnig');
})

app.listen(port, () => {
    console.log('listening the port', port);
})
