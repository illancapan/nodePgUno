import express from "express";

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

export default router;
