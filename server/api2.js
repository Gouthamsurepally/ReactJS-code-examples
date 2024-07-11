var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");


var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res)=>{
   res.send("<h1>To DO - API</h1>");  
});

app.get("/Employee", (req, res)=> {
    mongoClient.connect(connectionString).then(clientObject=>{
         var database = clientObject.db("todo");
         database.collection("Employee").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
         })
    })
});

app.get("/Employee/:Sno", (req, res)=>{
     var Sno = parseInt(req.params.Sno);
     console.log("Requested Sno:", Sno);
     mongoClient.connect(connectionString).then(clientObject=>{
          var database = clientObject.db("todo");
          database.collection("Employee").find({Sno:Sno}).toArray().then(documents=>{
              res.send(documents);
              res.end();
          })
     })
});

app.post("/addtask",(req, res)=>{
    var task = {
        Sno: parseInt(req.body.Sno),
        EmployeeName: req.body.EmployeeName,
        Age: req.body.Age,
        Gender: req.body.Gender,
        Department:req.body.Department,
        Country:req.body.Country,
        State:req.body.State,
        District:req.body.District,
        Button1:req.body.Button1,
        Button2:req.body.Button2
    };
      mongoClient.connect(connectionString).then(clientObject=>{
          var database = clientObject.db("todo");
          database.collection("Employee").insertOne(task).then(()=>{
             console.log(`Task Added Successfully..`);
             res.end();
          })
      })
});

// app.put("/edittask/:Sno",(req, res)=>{
//    var Sno = parseInt(req.params.Sno);
//    mongoClient.connect(connectionString).then(clientObject=>{
//         var database = clientObject.db("todo");
//         database.collection("Employee").updateOne({Sno:Sno},{$set:{Sno:parseInt(req.body.Id), Title: req.body.Title, Date: new Date(req.body.Date), Description: req.body.Description}}).then(()=>{
//             console.log("Employee Updated Successfully..");
//             res.end();
//         })
//    })
// });


app.put("/edittask/:Sno", (req, res) => {
    var Sno = parseInt(req.params.Sno);
    mongoClient.connect(connectionString).then(clientObject => {
       var database = clientObject.db("todo");
       database.collection("Employee").updateOne({ Sno: Sno }, {
          $set: {
             Sno: parseInt(req.body.Sno),
             EmployeeName: req.body.EmployeeName,
             Age: req.body.Age,
             Gender: req.body.Gender,
             Department: req.body.Department,
             Country: req.body.Country,
             State: req.body.State,
             District: req.body.District,
             Button1: req.body.Button1,
             Button2: req.body.Button2
          }
       }).then(() => {
          console.log("Employee Updated Successfully..");
          res.end();
       })
    })
 });
 
app.delete(`/deletetask/:Sno`, (req, res)=>{
    console.log("delete api")
   
    var Sno = parseInt(req.params.Sno);
     console.log('Sno' + Sno)
    mongoClient.connect(connectionString).then(clientObject=>{
        var database = clientObject.db("todo");
        database.collection("Employee").deleteOne({Sno:Sno}).then((err)=>{
            console.log("Employee Deleted Successfully..");
            res.end();
        })
    })
});



app.listen(8000);
console.log(`Server Started : http://127.0.0.1:8000`);
