const mongoose = require('mongoose');

const AnalyticValueSchema = new mongoose.Schema({
    views: { type: Number, required: true, default: 0 },
    viewsdiff: { type: Number, required: true, default: 0 },
    watchtime: { type: Number, required: true, default: 0 },
    watchtimediff: { type: Number, required: true, default: 0 },
    subscribers: { type: Number, required: true, default: 0 },
    subscribersdiff: { type: Number, required: true, default: 0 },
    totalsubscribers: { type: Number, required: true, default: 0 },
    last48: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AnalyticValue', AnalyticValueSchema);
