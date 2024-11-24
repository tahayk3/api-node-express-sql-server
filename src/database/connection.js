import sql from 'mssql';

const dbSettings = {
    user: "sa",
    password: "gato123",
    server: "PC\\SQLEXPRESS",

    database: "webstore",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

export const getConnection = async () =>{
    try{
        const pool = await sql.connect(dbSettings);

        const result = await pool.request().query("SELECT GETDATE()")
        console.log(result)
        return pool;
    }catch(error){
        console.error(error);
    }
}