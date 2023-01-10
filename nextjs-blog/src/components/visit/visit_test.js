//Visit Service
//Implements all CRUD Operations relating to visits to mongoDB

const { MongoClient } = require("mongodb");
const Visit = require("./Visit");

const uri =
"mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";
const mongouri =
"mongodb+srv://carstaltari:Pablo__545@iot2-carlo.ijsiznf.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri);
const client = new MongoClient(uri);

const allVisits = getAllVisits();
console.log(allVisits);

//Get all Visits
async function getAllVisits() {
//   const cursor = client
//     .db("ECPVisitDummy")
//     .collection("DummyVisits")
//     .find();
//   const results = cursor.toArray();
    const results = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .find({}).toArray();
  if (results) {
    console.log("Returning all listings in db");
    console.log(results);

    return results;
  } else {
    console.log("No listings received");

    return null;
  }
}