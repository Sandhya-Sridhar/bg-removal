import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

// connect database
await connectDB();

// middleware
app.use(cors());

// 🧩 IMPORTANT: raw body for Clerk webhooks
app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }));

// for everything else, use normal JSON parsing
app.use(express.json());

// routes
app.get('/', (req, res) => res.send('API working'));
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
