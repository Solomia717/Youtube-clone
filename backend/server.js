const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const analyticRoutes = require('./routes/AnalyticValueRoute');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
    });


app.use('/analyticvalue', analyticRoutes);