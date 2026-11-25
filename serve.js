// Oddiy mahalliy server: node serve.js  ->  http://localhost:8137/inputlab3.html
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8137;
const ROOT = __dirname;

http.createServer((req, res) => {
  const file = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "inputlab3.html";
  const full = path.join(ROOT, file);
  if (!full.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": file.endsWith(".html") ? "text/html; charset=utf-8" : "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => console.log("Server: http://localhost:" + PORT + "/inputlab3.html"));
