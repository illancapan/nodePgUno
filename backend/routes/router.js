import express from "express";
import { addProduct } from "../models/queries.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hola mundo desde el server principal 😊");
});

router.get("/test", (req, res) => {
    res.send("Hola mundo desde el test");
});

router.get("/usuario", (req, res) => {
    res.send("Hola mundo desde el usuario");
});
// router.get("/product", (req, res) => {
//     res.send("Hola mundo desde el productos");
// });

router.post("/product", async(req, res) => {
    const { name, description, price, stock } = req.body;

    await addProduct(name, description, price, stock);
    res.send("Producto agregado correctamente");
});

export default router;
