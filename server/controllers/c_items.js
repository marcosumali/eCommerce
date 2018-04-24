let ModelItem = require('../models/m_items');
const ObjectId = require('mongodb').ObjectID;

class ControllerItem {

    static get (req,res) {
        ModelItem.find()
            .then(result => {
                res.status(200).json({
                    message: 'Get all item successfull',
                    item: result
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request get items'
                })
            })
    }

    static save (req,res) {
        let { name, price, location, qty_stock } = req.body;
        // console.log(req.file);
        let image = req.file.cloudStoragePublicUrl;

        let newObj = { name, price, location, qty_stock, image };

        let newItem = new ModelItem(newObj);
        newItem.save()
            .then(result => {
                res.status(201).json({
                    message: 'Add new item successfull',
                    item: result
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request new item'
                })
            })
    }

    static update (req,res) {
        let { id, name, price, location, qty_stock } = req.body;

        let newObj = { name, price, location, qty_stock };

        ModelItem.findOneAndUpdate({_id: ObjectId(id)}, newObj)
            .then(result => {
                res.status(200).json({
                    message: 'Update new item successfull',
                    item_previous: result
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request update related item'
                })
            })
    }

    static delete (req,res) {
        let { id } = req.body;

        ModelItem.deleteOne({_id: ObjectId(id)})
            .then(result => {
                res.status(200).json({
                    message: 'Delete item successfull',
                    item: result
                })  
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request delete related item'
                })
            })
    }


}

module.exports = ControllerItem;