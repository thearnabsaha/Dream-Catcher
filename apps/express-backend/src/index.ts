import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3001;
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { SignInSchema, SignUpSchema } from '@workspace/common/types';
import { JWT_SECRET } from '@workspace/backend-common/config'
import { prisma } from '@workspace/db/client';
const morganFormat = ':method :url :status :response-time ms';
import userRoutes from './routes/user.route'
app.use(morgan(morganFormat));
app.use(helmet());

app.use(cors());
// app.use(cors({
//   origin: process.env.CORS_ORIGIN,
//   credentials: true,
// }));

// app.options('*', cors({
//   origin: process.env.CORS_ORIGIN,
//   credentials: true,
// }));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('hello from simple server :)');
});
app.get('/health', async (req, res) => {
  const start = Date.now();
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date(),
    responseTime: `${Date.now() - start}ms`,
  };
  res.status(200).json(healthcheck);
});

app.use('/',userRoutes);
app.listen(port, () => console.log('> Server is up and running on port: ' + port));