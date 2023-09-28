const mongoose = require('mongoose')
const Person = require('../models/person')


// Create Person Resource
const createOfCRUD = async (req, res) => {
    const person = new Person(req.body)
    try {
        await person.save();
        res.status(200).json({
            "success":true,
            "message": "Person Resource created",
            "data": person
        })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Person Resource not created",
            "data": error
            })
    }

}

// Update Person Resource
const updateOfCRUD = async (req, res) => {
    const id = req.params.id
    try {
        const person = await Person.updateOne(id, req.body)
        res.status(200).json({
            "success":true,
            "message": "Person Resource updated",
            "data": person
        })
    }catch (error) {
        res.status(500).json({
            "success":true,
            "message": "Person Resource not updated",
            "data": person
        })
    }
    
}

// Get All Persons Resource
const retrieveOfCRUD = async (req, res) => {
    try {
        const person = await Person.find({})
        res.status(200).json({
            "success":true,
            "message": "Person resource retrieved",
            "data": person
        })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Person resource can not be retrieved",
            "data": error
            })
    }
}

// Delete Person Resource with ID parameter
const deleteOfCRUD = async (req, res) => {
    const id = req.params.id
    try {
        await Person.deleteOne({_id:id})
        res.status(200).json({
            "success":true,
            "message": "Person resource deleted",
            "data": {}
        })
    } catch(error){
        console.log(error)
        res.status(400).json({
            "success":false,
            "message": "Person Resource not deleted",
            "data": error
        })

    }
}

// Export controllers (function) to allow imports in other files
module.exports = {createOfCRUD, retrieveOfCRUD, updateOfCRUD, deleteOfCRUD}