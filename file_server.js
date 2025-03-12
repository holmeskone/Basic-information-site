import { createServer } from 'http';
import { readFile } from 'fs';

createServer(function (req, res) {
  if (req.url === '/'){
    readFile('index.html', function(err, data) {
      if (err){
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else if (req.url === '/about'){
    readFile(('about.html'), function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else if (req.url === '/contact-me'){
    readFile(('contact-me.html'), function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else {
    readFile('404.html', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }

}).listen(8080);