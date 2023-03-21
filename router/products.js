import express from "express";


import { add, get, getAll, remove, update } from "../controler/products";

const router = express.Router()
router.get('/products', getAll)
router.get('/products/:id', get)
router.post('/products', add)
router.patch('/products/:id', update)
router.delete('/products/:id', remove)

export default router