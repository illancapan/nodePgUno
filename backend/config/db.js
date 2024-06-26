import pg from "pg";
const { Pool } = pg;

const config = {
    user: "postgres",
    password: "b00tcamp",
    host: "localhost",
    port: 5432,
    database: "ejercicio_db_pg",
    allowExitOnIdle: true,
};

const pool = new Pool(config);

export default pool;

try {
    await pool.query("SELECT NOW()");
    console.log("Conectado a la base de datos🔥🔥🔥");
} catch (error) {
    console.log(error.message);
}