import {getConnection} from '../database/connection.js'
import sql from 'mssql'

export const getProducts =  async (req,res)=>{
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM products')

    res.json(result.recordset)
}


export const createProduct = async (req,res)=>{

    console.log(req.body)

    const pool = await getConnection()
    const result = await pool
    .request()
    .input('name', sql.VarChar, req.body.name)
    .input('description', sql.Text, req.body.description)
    .input('price', sql.Decimal, req.body.price)
    .input('quantity', sql.Int, req.body.quantity)
    .query('INSERT INTO products (name, description, quantity, price) VALUES(@name, @description,  @price, @quantity); SELECT SCOPE_IDENTITY() AS id;')

    res.json({
        id: result.recordset[0].id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
    })
}

export const updateProduct = async (req,res)=>{
    res.send('editando producto')
}

export const getProduct = async (req, res)=>{
    console.log(req.params.id);
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("SELECT * FROM products WHERE id = @id");

    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "producto no encontrado"})
    }

    return res.json(result.recordset)
}

export const deleteProduct = async (req,res)=>{
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("DELETE FROM products WHERE id = @id")

    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "producto no encontrado"})
    }

    res.send('Eliminando un producto');
    return res.json(result.recordset)
}

