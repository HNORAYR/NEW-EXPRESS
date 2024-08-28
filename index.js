const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
client.connect();
let db = client.db("user");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.json())
app.get('/', async(req, res) => {
  const collection = db.collection("products");
  const results = await collection.find({}).toArray();
  res.json({products: results})
});
app.post('/submit', async(req, res) => {
    const {name, price} = req.body;
    const collection = db.collection("products");
    await collection.insertOne({name: name, price: price});
    res.send(`Received data - Name: ${name}, Price ${price}`);
  })
app.listen(3000,() => console.log("Server http://localhost:3000 is ready"));


