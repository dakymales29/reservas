import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config();//hacemor que Node.js lea el .env y usar process.env

const {Pool} = pg// pool nos ayuda a conectar a postgre usando los datos de env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})
export default pool