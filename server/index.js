require('dotenv').config();
const express = require("express")
const massive = require("massive")
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env
const {getInventory} = require('./Controller/InventoryCtrl')

app.use(express.json());

app.get('/api/getInventory', getInventory)

app.listen(SERVER_PORT, () => console.log(`Server Running On Server Port ${SERVER_PORT}`));