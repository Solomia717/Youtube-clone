const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const analyticRoutes = require('./routes/AnalyticValueRoute');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string (replace with your URI)
const MONGO_URI = 'mongodb://127.0.0.1:27017/myapp'; // local
// Or for Atlas: 'mongodb+srv://<username>:<password>@cluster.mongodb.net/myapp'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
    });


app.use('/analyticvalue', analyticRoutes);