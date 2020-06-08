import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const CONNECTION_URL: string = 'mongodb://'
    + process.env.DB_USER + ':'
    + process.env.DB_PASS + '@'
    + process.env.DB_HOST + ':'
    + process.env.DB_PORT + '/'
    + process.env.DB_NAME;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

export default mongoose;
