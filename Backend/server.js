import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './DBConfig/dbConnection.js';
import router from './routes/BookRoute.js';

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 7000;

// connect to mongodb
dbConnection();

// server connection
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
})

// routes
app.use('/api/books', router)