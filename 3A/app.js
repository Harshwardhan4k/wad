const fs = require("fs"); // file system module to read files from the file system (synchronous)
const http = require("http"); // http module to create a server and handle requests (asynchronous)
const url = require("url"); // url module to parse the url (synchronous) and get the pathname from it (asynchronous) to handle different routes

const template = fs.readFileSync(`${__dirname}/index.html`, "utf-8"); // read the template file synchronously and store it in a variable

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url); // parse the url and get the pathname from it to handle different routes (synchronous) and store it in a variable
  if (pathname === "/") {
    res.end("Hello from the server!");
  } else if (pathname === "/start") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(template);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  // create a server and listen to requests on port 8000 and localhost
  console.log("Listening to requests on port 8000"); // log a message to the console when the server starts listening to requests
});
