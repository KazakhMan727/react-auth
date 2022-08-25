const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(formidable());

const obj = {
    message: "bro"
}

app.post('/register', (request, response) => {
    console.log(request.fields);
    response.json(obj);
});

app.listen(8000, () => {
    console.log("Server's running");
});

// const user = {
//     username: 'aazama',
//     password: 'aszamt'
// }

// let db = fs.readFileSync('usersDB.json', 'utf8')
// let database = JSON.parse(db);
// database.users.push(user);

// fs.writeFileSync('usersDB.json', JSON.stringify(database, null, 2))