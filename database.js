require('dotenv').config()

const mongoose = require('mongoose');
const URI = process.env.MONGODB_URL;

mongoose
.connect(URI)
.then(() => console.log('DB subiu'))
.catch((err) => console.log(err));