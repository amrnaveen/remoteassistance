//Load HTTP module
const http = require("http");
const fs = require("fs");
const hostname = '0.0.0.0';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  if (req.method == 'POST') {
    console.log("POST");
    var body = '';
    req.on('data', function (data) {
      body += data;
      console.log("Partial body: " + body);
    });
    req.on('end', function () {
      console.log("Body: " + body);
      fs.writeFile("data.txt", body, function (err) {
        if (err) {
          return console.log(err);
        }

        console.log("The file has been updated!");
      });
    });

    var html = fs.readFileSync('Success.html');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(html);

  } else {
    console.log("GET");
    //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
    var html = fs.readFileSync('Error.html');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(html);
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});