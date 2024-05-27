const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("../Config/database");
//Handeling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to uncaught exception `);
  server.close(() => {
    process.exit(1);
  });
});

//Dotenv config

dotenv.config({ path: "src/Backend/Config/config.env" });
//Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

//Unhandeled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandeled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
