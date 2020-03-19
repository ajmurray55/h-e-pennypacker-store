module.exports = {
    getInventory: async (req, res, next) => {
        const db = req.app.get('db');
        const {inventory_id} = req.params
        getInventory = await db.get_inventory(inventory_id)
        res.status(200).send(getInventory)
    }
}