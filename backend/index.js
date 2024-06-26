import express from "express";
import router from "./routes/router.js";

const app = express();

const PORT = process.env.PORT || 3000;

//middlewress
app.use(express.json());

//routes
app.use("/" , router);



app.listen(PORT, () => {
    console.log(
        `🔥🔥🔥 Servidor escuchando en el puerto ${PORT} http://localhost:${PORT} 🔥🔥🔥`
    );
});
