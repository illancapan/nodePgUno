import pool from "../config/db.js";

export const addProduct = async(name, description, price, stock) => {
    const sql = "INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [name, description, price, stock];
    
    try {
        const results = await pool.query(sql, values);
        return results.rows;
    } catch (error) {
        console.log(error.message)
    }
}