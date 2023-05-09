let mysql = require("mysql"); //import lib mysql

//variabel koneksi config database mysql
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_express_api",
});

//condition koneksi
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connection Succuessfully!");
  }
});

//export modul agar bisa digunakan di file lain
module.exports = connection;
