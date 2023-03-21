import express from "express";

import mongoose from "mongoose";
import router from "./router/products";

const app = express();
app.use(express.json())
app.use('/api', router)

export const viteNodeApp = app;
mongoose.connect('mongodb://127.0.0.1:27017/thi')