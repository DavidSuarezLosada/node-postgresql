const { Pool } = require('pg');

const config = {
    user : 'postgres',
    host : 'localhost',
    password : 'root',
    database : 'CentralCervecera'
};


const pool = new Pool(config);

const getUsers = async () => {
    try{
     const res = await pool.query('SELECT * FROM users');
     console.log(res.rows);
    }catch(e){
     console.log(e);
    }
 };
 
 const insertUser = async () => {
     try{
         const insertSql = 'INSERT INTO users() VALUES ($1,$2) ';
         const values = ['','']
         const res = await pool.query(insertSql,values);
         console.log(res);
     } catch(e){
         console.log(e);
     }
 }

module.exports = pool;

//getUsers();