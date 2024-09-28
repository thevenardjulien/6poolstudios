import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' })

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
    console.log('Connexion réussie à la base de données')
    await connection.end()
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error)
  }
}

// Exécuter le test de connexion
testConnection()
