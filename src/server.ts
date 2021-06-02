import 'express-async-errors';
import 'reflect-metadata';
import 'es6-shim';
import morgan from 'morgan';
import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import { Routes } from './routes';
import './database';
import AppError from './errors/AppError';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use(Routes);
app.use(morgan('dev'));
app.use('/files', express.static(uploadConfig.uploadsFolder));
mongoose.connect(String(process.env.MONGO_URL), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(
//   (err: Error, _request: Request, response: Response, _next: NextFunction) => {
//     if (err instanceof AppError) {
//       return response.status(err.statusCode).json({
//         status: err.status,
//         message: err.message,
//       });
//     }

//     return response.status(500).json({
//       status: 'error',
//       message: 'Internal Server Error',
//     });
//   },
// );

app.listen(process.env.PORT || 3333, () => {
  console.log(`🪐 - SERVER STARTED AT ${process.env.PORT}`);
});
