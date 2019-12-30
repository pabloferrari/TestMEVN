const mongoose = require('mongoose');
let connectDB = 'mongodb://localhost/mydb';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = {
    connect: () => mongoose.connect(connectDB, { useNewUrlParser: true }),
    connection: () => {
        if(mongoose.connection)
            return mongoose.connection;
        return this.connect();
    }
}