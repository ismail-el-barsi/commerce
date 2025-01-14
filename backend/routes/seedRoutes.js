import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  // await User.deleteMany({});
  // const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts });
});
export default seedRouter;
