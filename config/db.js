const mongoose = require('mongoose');

const connectDb = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.LOCALDB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected to ${conn.connection.host} successfully`);

    } catch (error) {
        console.log(`Oops.. Something went wrong: ${error}`);
        process.exit(1);
    }
}

module.exports = connectDb;