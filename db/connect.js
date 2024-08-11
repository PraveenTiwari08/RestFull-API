const mongoose = require("mongoose")



const connectDB = (MONGO_URI) =>{
  console.log("mongoose connect Successfully")
  return mongoose.connect(MONGO_URI);
}

module.exports = connectDB;

// , {
//   useNewUrlParser : true,
//   useUnifiedTopology : true
// }