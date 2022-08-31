const { response } = require("express");
const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");
const { request } = require("http");

const app = express();
app.use(express.json());
app.use(formidable());

const obj = {
    message: "bro"
}

app.post('/register', (request, response) => {
    let situations = {
        empty: "There is atleast one empty field",
        differentPass: "Password differ",
        exists: "This user already exist"
    }
    
    if (request.fields.username == '' || request.fields.password == '' || request.fields.repeatedPassword == '') {
        response.json(situations.empty);
    }

    else {
        if (request.fields.password != request.fields.repeatedPassword) {
            response.json(situations.differentPass);
        }

        else {
            let newUser = {
                username: request.fields.username,
                password: request.fields.password
            }

            let db = fs.readFileSync('usersDB.json', 'utf8')
            let database = JSON.parse(db);
            database.users.push(newUser);

            fs.writeFileSync('usersDB.json', JSON.stringify(database, null, 2));
        }
    }

});

app.post('/login', (request, response) => {
    let situations = {
        loggedIn: "Logged in",
        incorrectPass: "Incorrect password",
        doesntExist: "User does not exist"
    }

    let db = fs.readFileSync('usersDB.json', 'utf8')
    let database = JSON.parse(db);

    let usernameIdx = database.users.findIndex(item => item.username == request.fields.username);
    if (usernameIdx != -1) {
        if (database.users[usernameIdx].password == request.fields.password) {
            response.json(situations.loggedIn);
        }

        else {
            response.json(situations.incorrectPass);
        }
    }

    else {
        response.json(situations.doesntExist);
    }


    // let idx = database.users.findIndex(item => item.username == request.fields.username);
    
    // if (idx == -1) {
    //     console.log("This username does not even exist");
    // }

    // else {
    //     if (request.fields.username != database.users[idx].username && request.fields.password != database.users[idx].password) {
    //         console.log("Either username or login are incorrect");
    //     }
    
    //     else {
    //         console.log("Logged in");
    //     }
    // }
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