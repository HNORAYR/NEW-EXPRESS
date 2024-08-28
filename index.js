const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
let db = client.db("Norayr");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.json())
app.get('/products', async(req, res) => {
  const collection = db.collection("products");
  const results = await collection.find({}).toArray();
  res.json({products: results})
});
app.post('/products', async(req, res) => {
    const {name, price, color, wight} = req.body;
    const collection = db.collection("products");
    await collection.insertOne({name: name, price: price, color: color, wight: wight});
    res.send(`Received data - Name: ${name}, Price: ${price}, Color: ${color}, Wight: ${wight}`);
  })
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(products => products.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      res.status(200).json({ message: `Item ${id} deleted.` });
    } else {
      res.status(404).json({ message: 'Item not found.' });
    }
  });
app.listen(3017,() => console.log("Server http://localhost:3017 is ready"));


