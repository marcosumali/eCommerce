let ModelUser = require('../models/m_users');
const ObjectId = require('mongodb').ObjectID;

class ControllerUser {

    static get (req,res) {
        ModelUser.find()
            // .populate('itemId')
            // .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Get all user successfull',
                    user: result
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request get users'
                })
            })
    }

    static save (req,res) {
        let { fullname, email, password, phone, itemId } = req.body;

        let newObj = { fullname, email,password, phone, itemId };

        let newUser = new ModelUser(newObj);
        newUser.save()
            .then(result => {
                res.status(201).json({
                    message: 'Add new user successfull',
                    user: result
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request new user'
                })
            })
    }

    static update (req,res) {
        let { id, fullname, email, password, phone } = req.body;

        let newObj = { fullname, email,password, phone };

        ModelUser.findOneAndUpdate({_id: ObjectId(id)}, newObj)
            .then(result => {
                res.status(200).json({
                    message: 'Update new user successfull',
                    user_previous: result
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request update related user'
                })
            })
    }

    static delete (req,res) {
        let { id } = req.body;

        ModelUser.deleteOne({_id: ObjectId(id)})
            .then(result => {
                res.status(200).json({
                    message: 'Delete user successfull',
                    user: result
                })  
            })
            .catch(err => {
                res.status(400).json({
                    message: 'Error: bad request delete related user'
                })
            })
    }


}

module.exports = ControllerUser;