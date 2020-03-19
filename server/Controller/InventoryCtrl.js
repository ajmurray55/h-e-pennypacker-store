
const inventory = require('../../data.json')

module.exports = {

getInventory:(req, res) => {
     res.status(200).send(inventory)
}

}