const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./db/connect")


const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products")

app.get("/" , (req,res)=>{
  res.send("Server is running...");
})

//middleware
app.use("/api/products" , products_routes)
 
const start = async() => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, ()=>{
        console.log(`server is running at : http://localhost:${PORT}`)
      })
    } catch (error) {
      console.log(error)
    }
}

start();

// app.listen(PORT, ()=>{
//   console.log(`server is running at : http://localhost:${PORT}`)
// })