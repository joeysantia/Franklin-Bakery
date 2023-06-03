import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
      const index = fs.readFileSync("./html/index.html");
      res.end(index);
    } else if (url === "/about") {
      const about = fs.readFileSync("./html/about.html");
      res.end(about);
    } else if (url === "/contact") {
      const contact = fs.readFileSync("./html/contact-me.html");
      res.end(contact);
    } else {
      const html404 = fs.readFileSync("./html/404.html");
      res.end(html404);
    }
  })
  .listen(8080);
