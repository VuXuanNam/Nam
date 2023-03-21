import Product from "../model/products";

export const getAll = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
export const add = async (req, res) => {
    const products = await Product.create(req.body)
    res.json(products)
}
export const get = async (req, res) => {
    const products = await Product.findById(req.params.id)
    res.json(products)
}
export const update = async (req, res) => {
    const products = await Product.updateOne({ _id: req.params.id }, req.body)
    res.json(products)
}
export const remove = async (req, res) => {
    const products = await Product.deleteOne({ _id: req.params.id })
    res.json(products)
}