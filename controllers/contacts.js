const mongodb = require('../data/db');
const ObjectId = require('mongodb').ObjectId;

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getAll = async (req, res) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const createContact = async (req, res) => {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    if (!newContact.firstName || !newContact.lastName || !newContact.email || !newContact.favoriteColor || !newContact.birthday) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    const result = await mongodb.getDb().db().collection('contacts').insertOne(newContact);
    if (result.acknowledged) {
        res.status(201).json({ id: result.insertedId });
    } else {
        res.status(500).json({ message: 'Failed to create contact' });
    }
};

const updateContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const updatedContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const result = await mongodb.getDb().db().collection('contacts').updateOne(
        { _id: userId },
        { $set: updatedContact }
    );

    if (result.modifiedCount > 0) {
        res.status(200).json({ message: 'Contact updated successfully' });
    } else {
        res.status(500).json({ message: 'Failed to update contact' });
    }
};

const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const result = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId });

    if (result.deletedCount > 0) {
        res.status(200).json({ message: 'Contact deleted successfully' });
    } else {
        res.status(500).json({ message: 'Failed to delete contact' });
    }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };