const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const Joi = require("joi"); //used for validation
const app = express();
const port = 3000;
var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
//Configuring express server
app.use(bodyparser.json());
//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "edu1234",
  database: "learner",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

app.get("/", (req, res) =>
  res.send("Welcome to eStore : Aprajita Retails RestFUL Web API")
);
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
  ];

  res.json(products);
});

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/learners' , (req, res) => {
    mysqlConnection.query('SELECT * FROM learnerdetails', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

    //Router to GET specific learner detail from the MySQL database
app.get('/learners/:id' , (req, res) => {
    mysqlConnection.query('SELECT * FROM learnerdetails WHERE learner_id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

    
        
    //Router to INSERT/POST a learner's detail
app.post('/learners', (req, res) => {
    let learner = req.body;
    var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddOrEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
    mysqlConnection.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], (err, rows, fields) => {
    if (!err)
    rows.forEach(element => {
    if(element.constructor == Array)
    res.send('New Learner ID : '+ element[0].learner_id);
    });
    else
    console.log(err);
    })
    });


    //Router to UPDATE a learner's detail
app.put('/learners', (req, res) => {
    let learner = req.body;
    var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddOrEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
    mysqlConnection.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], (err, rows, fields) => {
    if (!err)
    res.send('Learner Details Updated Successfully');
    else
    console.log(err);
    })
    });

//Router to DELETE a learner's detail
app.delete('/learners/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM learnerdetails WHERE learner_id = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
    res.send('Learner Record deleted successfully.');
    else
    console.log(err);
    })
    });


app.listen(port, () =>
  console.log(`eStore Web API  listening on port ${port}!`)
);

// CREATE DEFINER=`root`@`localhost` PROCEDURE `learnerAddOrEdit`(
//     IN _learner_id INT,
//     IN _learner_name VARCHAR(45),
//     IN _learner_email VARCHAR(45),
//     IN _course_Id INT
//     )
//     BEGIN
//     IF _learner_id = 0 THEN
//     INSERT INTO learnerdetails(learner_name,learner_email,course_Id)
//     VALUES (_learner_name,_learner_email,_course_Id);
//     SET _learner_id = last_insert_id();
//     ELSE
//     UPDATE learnerdetails
//     SET
//     learner_name = _learner_name,
//     learner_email = _learner_email,
//     course_Id = _course_Id
//     WHERE learner_id = _learner_id;
//     END IF;
//     SELECT _learner_id AS 'learner_id';
//     END