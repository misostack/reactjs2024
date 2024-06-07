import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Path to your JSON file
const middlewares = jsonServer.defaults();

// Use default middlewares
server.use(middlewares);

// Add custom middleware for CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Use the JSON Server router
server.use(router);

// Set the port (default to 3000)
const PORT = process.env.PORT || 1337;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
