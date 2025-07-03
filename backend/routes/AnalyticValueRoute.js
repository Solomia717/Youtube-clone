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

        let updatedValue;

        if (_id) {
            updatedValue = await AnalyticValue.findByIdAndUpdate(
                _id,
                { $set: update },
                { new: true, upsert: true, runValidators: true }
            );
        } else {
            // Create new if no _id provided
            const newValue = new AnalyticValue(update);
            updatedValue = await newValue.save();
        }

        res.json(updatedValue);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
