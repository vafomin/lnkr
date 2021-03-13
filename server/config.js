require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT,
  },
  database: {
    url: process.env.DATABASE,
  },
};
