const express = require("express");
const postgresqlDb = require("./db/postgresql");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/login", async function (req, res) {
  //ambil data di body
  const data = req.body;
  //ambil data user di database
  const userData = await postgresqlDb.query(
    "SELECT * FROM user WHERE username = $1",
    [data.username]
  );
  //bandingkan username dan password
  if (userData === null) {
    res.json({ data: "Email/Password Salah!" });
  } else {
    if (data.password === userData.password) {
      res.json({ data: "Sukses" });
    } else {
      res.json({ data: "Email/Password Salah!" });
    }
  }
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server berjalan di port ${port}!`);
});
