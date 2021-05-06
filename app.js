const express = require('express')
const app = express();
const dotenv = require('dotenv').config();




app.listen(process.env.PORT, () => {
  console.log(`Server live on port: ${process.env.PORT}`)
})


