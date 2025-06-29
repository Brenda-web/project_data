const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
//const port = process.env.PORT || 8000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});

//server.listen(port);
