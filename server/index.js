const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

// making connection to MySQL server

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'prisoner',
  database : 'super_school'
});

db.connect((err) => {
    if (err) {
        console.error('Errors are connecting to MySQL:', err);
        throw err;
    }
    else {
        console.log('Connected to MySQL database'); 
    }
});
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

