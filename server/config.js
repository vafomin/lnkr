require("dotenv").config();

module.exports = {
  app: {
    name: "Shorty",
    version: "0.1.0",
  },
  server: {
    port: process.env.PORT,
  },
  database: {
    url: process.env.DATABASE,
  },
};
