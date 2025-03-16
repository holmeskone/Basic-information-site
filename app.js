import express from "express";
const app = express();

app.get("/", (req, res) => res.sendFile('/Users/nileholmes/repos/nodeJS/basic-informational-site/index.html'));
app.get("/about", (req, res) => res.sendFile('/Users/nileholmes/repos/nodeJS/basic-informational-site/about.html'));
app.get("/contact-me", (req, res) => res.sendFile('/Users/nileholmes/repos/nodeJS/basic-informational-site/contact-me.html'));
app.get('*', function(req, res){
  res.sendFile('/Users/nileholmes/repos/nodeJS/basic-informational-site/404.html', 404);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});