const express = require("express");
const cors = require("cors");
const db = require("./db.js");
const bcrypt = require("bcrypt"); // checks whether the password is valid or not

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.post("/signup", async (req, res) => {
  const user = await req.body;
  console.log("fName : ", user.fName);
  const query = `INSERT INTO users (f_name, l_name, email, password, gender, marital, dob, mobile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    query,
    [
      user.fName,
      user.lName,
      user.email,
      user.password,
      user.gender,
      user.marital_status,
      user.dob,
      user.mobile
    ],
    (err) => {
      if (err) throw err;
      console.log("res : ", res);
      console.log(`1 record inserted`);
      res.status(200).send({ message: "User created successfully." });
    }
  );
});

app.post("/login", async (req, res) => {
  const { username, password } = await req.body;
  const query = "SELECT * FROM users WHERE f_name = ?";

  db.query(query, [username], async (err, result) => {
    if (err) throw err;

    if ((await result.length) === 0) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    const user = result[0]; // returns any 1 value that matches the result.
    console.log("result : ", result);

    const isPasswordValid = password === String(user.password);
    // you can also use bcrypt for password comparison.

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    res.status(200).send({ message: "User logged in successfully" });
  });
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
    console.log("error occured in server : ", err);
  }
});
