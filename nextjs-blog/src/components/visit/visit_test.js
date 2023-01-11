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

console.log("GET VISIT 12")
const visit = getVisitByVisitId(12);
console.log(visit);

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

//Get Visit by visit_Id
async function getVisitByVisitId(id) {
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .findOne({ visit_id: id });

  if (result) {
    console.log(`Found a listing in connection with visit id: '${id}'`);
    console.log(result);

    return result;
  } else {
    console.log("none");

    return null;
  }
}