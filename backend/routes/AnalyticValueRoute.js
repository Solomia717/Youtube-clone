const express = require('express');
const router = express.Router();
const AnalyticValue = require('../models/AnalyticValue');

// GET /analyticvalue
router.get('/', async (req, res) => {
    try {
        const values = await AnalyticValue.find();
        res.json(values);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /analyticvalue
router.put('/', async (req, res) => {
    try {
        const { _id, ...update } = req.body;

        const updatedValue = await AnalyticValue.findByIdAndUpdate(
            _id,
            { $set: update },
            { new: true } // return the updated document
        );

        if (!updatedValue) {
            return res.status(404).json({ error: 'Document not found' });
        }

        res.json(updatedValue);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
