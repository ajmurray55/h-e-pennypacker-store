require('dotenv').config();
const express = require("express")
const massive = require("massive")
// const inventory = require('./data.json')
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env
const {getInventory} = require('./Controller/InventoryCtrl')

app.use(express.json());
massive(CONNECTION_STRING).then(db=> {
    app.set('db', db);
    console.log('Connected to your db')
}).catch(err => console.log(err));

app.get('/api/getInventory', getInventory)

app.listen(SERVER_PORT, () => console.log(`Server Running On Server Port ${SERVER_PORT}`));