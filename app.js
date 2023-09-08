const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const languageRoutes = require('./routes/languageRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://minarsvn:Q8!Py8hsdm!qiJ8@cluster0.pad3few.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Routes for different sections
app.use('/api', require('./routes/languageRoutes'));
app.use('/api', require('./routes/skillRoutes'));
app.use('/api', require('./routes/frameworkRoutes'));
app.use('/api', require('./routes/ctfAchievementRoutes'));
app.use('/api', require('./routes/projectRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
