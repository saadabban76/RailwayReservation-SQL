const express = require("express");
const cors = require("cors");
const db = require("./db.js");

const app = express();
app.use(cors);

app.get("/", (req, res) => {
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
});

app.post("/signup", (req, res) => {
  console.log("req body : ", req.body);
  return req.body;
  const query = `INSERT INTO users (f_name, l_name, email, password, gender, marital, dob, mobile) VALUES
    ('mohammed', 'saad', 'saad@gmail.com', '123456789', 'male', 'unmarried', '2003-04-02', 9453890182);`;
});

app.listen(3000, (err) => {
  if (!err) {
    console.log(`Server is running on port 3000`);
    db.connect((err) => {
      if (err) {
        console.log("error while connecting database!");
        throw err;
      } else {
        console.log("Database connected successfully");
      }
    });
  } else {
      console.log('error occured in server : ', err);
  }
});
