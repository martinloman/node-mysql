//Paketet mysql är installerat med "npm install mysql"
var mysql = require("mysql2")

// Här skapas ett databaskopplings-objekt med inställningar för att ansluta till servern och databasen.
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
})

// Här testas kopplingen till databasen.
connection.connect(function (error) {
  // Den här funktionen är den callback som körs då uppkopplingen gjorts.
  if (error) throw error
  console.log("Connection to DB created successfully.")
})

//Här körs en query för att inserta en rad i tabellen "posts".
connection.query(
  "INSERT posts (user_id, heading, body) VALUES (8, 'En genererad heading', 'En genererad body')",
  function (error, results) {
    /*
    Den här funktionen är en callback som körs då queryn har körts mot databasen.
    Funktionen hanterar svaret från databasen.
  */

    // inparametern error innehåller information om ett fel, OM något gått fel, annars är den tom.
    if (error) throw error

    // inparametern results innehåller resultatet av din query. Om det är en INSERT är det ett objekt som ser ut typ så här:
    // {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 5,      <-- Det genererade id på raden som skapats.
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0
    // }
    console.log(results)
  }
)

connection.end()
