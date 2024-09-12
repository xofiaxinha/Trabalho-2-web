require('dotenv').config();

module.exports = {
    development: {
      name: 'development',
      postgres: {
          options: {
              host: process.env.DB_HOST,
              port: process.env.DB_PORT,
              database: process.env.DB_NAME,
              dialect: "postgres",
              username: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              client: null
          }
      }
  }
  };