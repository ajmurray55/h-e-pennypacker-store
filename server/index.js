const express = require("express")

const app = express();
const inventory = require('../data.json') 

app.use(express.json());


// console.log(inventory)

const port = 4000;

app.get('/api/getInventory', (req, res, next) => {
    res.status(200).send(inventory)
})


app.listen(port, () => console.log(`Server Running on Port ${port}`))