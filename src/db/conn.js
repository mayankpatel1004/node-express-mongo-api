const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/node-express-mongo-api", {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useIdentifiedTopology: true
    
}).then(() => {
    console.log("Connection Successful....");
}).catch((error) => {
    console.log(`No Connection ${error}`);
});