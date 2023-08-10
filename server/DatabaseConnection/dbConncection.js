
const mongoose = require("mongoose")

const dbConncection = () => {

    const DB_URL = process.env.DB_URL;
    mongoose.connect(DB_URL);

    mongoose.connection.on("connected", () => {

        console.log("Database connected successfully")
    })

    mongoose.connection.on("disconnected", () => {
        
        console.log("Database disconnected")
    })

    mongoose.connection.on("error", () => {
        
        console.log("Error while connecting to database")
    })

}

module.exports = dbConncection