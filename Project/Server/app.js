import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import chalk from 'chalk';
import mongoose from 'mongoose';
import productRouter from './routing/productRouter.js';

dotenv.config({ path: './config/.env' });

const app = express();
app.use(morgan('dev'));

const port = process.env.PORT
const host = process.env.HOST_NAME
const db_url = process.env.MONGO_DB_LOCAL_URL;

app.use('/product', productRouter);

app.get("/", (req, res) => {
    res.send("Server - Root Request");
});

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB Connection Successful!");
    app.listen(port, host, () => {
        console.log(chalk.green(`Server is running at http://${host}:${port}/`));
    });
})
.catch((err) => {
    console.error("MongoDB Connection Error: ", err);
    process.exit(1);
});
