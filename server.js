const express = require("express");
const app = express();
const PORT = 5500;

app.use(express.static("public"));

app.get("/", (request, response) => {
	response.sendFile(`${__dirname}/index.html`);
});

app.get("/createAccount", (request, response) => {
	response.sendFile(
		`${__dirname}/pages/createAccount.html`
	);
});

app.get("/login", (request, response) => {
	response.sendFile(`${__dirname}/pages/login.html`);
});

app.get("/books", (request, response) => {
	response.sendFile(`${__dirname}/pages/books.html`);
});

app.listen(PORT, () => {
	console.log(`Running in http://localhost:${PORT}`);
});
