import { join } from 'path';
import * as dotenv from 'dotenv';
import * as express from 'express';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const app: express.Application = express();

app.set('views', join(__dirname, '/../resources/views'));
app.set('view engine', 'pug');

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Listening on port', PORT));
