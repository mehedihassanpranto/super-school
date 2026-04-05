const express = require('express')
const app = express()
const mysql = require("mysql");
const port = 3000

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school_management"
});

db.connect((err) => {
  if (err) {
    console.log("Connection failed");
  } else {
    console.log("Connected to MySQL");
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



