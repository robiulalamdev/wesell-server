const path = require("path");
require("dotenv").config({ path: path.join(process.cwd(), ".env") });

const VARIABLES = {
  // Server
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,

  // Client
  CLIENT_URL: process.env.CLIENT_URL,
  LOCAL_URL: process.env.LOCAL_URL,

  // Mail User
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
};

module.exports = VARIABLES;
