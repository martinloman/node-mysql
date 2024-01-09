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

connection.query("SELECT * from users", function (error, results, fields) {
  /*
    Den här funktionen är en callback som körs då queryn har körts mot databasen.
    Funktionen hanterar svaret från databasen.
  */

  // inparametern error innehåller information om ett fel, OM något gått fel, annars är den tom.
  if (error) throw error

  //inparametern fields innehåller metadata (information) (namn, datatyp m.m) om alla kolumner som lästs upp ur databasen.
  //fields är en array av objekt.
  console.log(fields)

  // Man kan loopa igenom fields och skriva ut namnen på kolumnerna.
  fields.forEach((field) => {
    console.log(field.name)
  })

  // inparametern results innehåller resultatet av din query. Om det är en SELECT är det en array med objekt, ett objekt för varje rad.
  console.log(results)
})

connection.end()
