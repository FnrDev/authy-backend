import express from 'express';
import 'dotenv/config';
import { LoginRouter } from './routers/login';
import cors from 'cors';

const app = express();

// required middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("hello"))

app.use("/login", LoginRouter);

app.listen(process.env.PORT, () => console.log(`Backend is ready at port ${process.env.PORT}`));