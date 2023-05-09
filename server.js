const express = require("express");
const cors = require('cors')
const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const authRoutes = require('./routes/authRoutes')
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node JS app listening on port ${port}!`));