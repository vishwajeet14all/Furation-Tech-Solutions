const express = require('express')
const db = require('./config/db')
const errorHandler = require('./middleware/errorhandler');
const app = express();
const PORT = 8000;






//middleware
app.use(express.json())
app.use("/items",require("./routes/itemRoute"))
app.use("/items",require("./routes/itemRoute"))
app.use(errorHandler)








app.listen(PORT,() => {
    console.log(`Express is up and running on ${PORT}`)
})









