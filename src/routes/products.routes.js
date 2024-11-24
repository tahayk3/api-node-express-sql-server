import { Router } from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/products.controllers.js";

const router = Router();

router.get('/productos', getProducts);

router.get('/productos/:id', getProduct);

router.post('/productos', createProduct);

router.put('/producto/:id', updateProduct);

router.delete('/producto', deleteProduct);

export default router;