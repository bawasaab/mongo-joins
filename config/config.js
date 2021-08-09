require('dotenv').config();
const path = require('path');
// const appRoot = require('app-root-path');

// const dbUsername = `your-mongoDB-user-name`;
// const dbPassword = `your-mongoDB-password`;
// const dbName = `your-mongoDB-database-name`;
// const cluster = `cluster0.mvpaj.mongodb.net`;

const dbUsername = `deepak`;
const dbPassword = `P@$$w0rd7254`;
const dbName = `blog`;
const cluster = `cluster0.mvpaj.mongodb.net`;

// mongodb+srv://deepak:<password>@cluster0.mvpaj.mongodb.net/test
const mongodbUrl = `mongodb+srv://${dbUsername}:${dbPassword}@${cluster}/${dbName}`;

const basePath = process.env.BASE_URL;

module.exports = {
    mongodbUrl: mongodbUrl,

    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,

    BASE_URL: process.env.BASE_URL,
    
    JWT_SECRET: process.env.JWT_SECRET_KEY,
    
    VIEW_PATH: path.join(__dirname, '../views'),

    USER_IMAGE_UPLOAD_PATH: ''
};