import dotenv from 'dotenv';
import { App } from './app/app';

dotenv.config();

const app = new App();
app.start();
