//Visit Service
//Implements all CRUD Operations relating to visits to mongoDB
// import {
//     // getAllVisits,
//     // getVisitsByProjectId,
//     getVisitByVisitId,
//     addVisit,
//     updateVisit,
//     deleteVisitById
// } from "./visit_service";
const { MongoClient } = require("mongodb");
const Visit = require("./Visit");

const visitOne = new Visit(
  2255,
  2255,
  [99, 87, 31],
  new Date("2023-03-12"),
  new Date("2023-03-20")
);
const updateOne = new Visit(
  2255,
  2255,
  [99],
  new Date("2023-05-12"),
  new Date("2023-05-20")
);

const uri =
"mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";
const mongouri =
"mongodb+srv://carstaltari:Pablo__545@iot2-carlo.ijsiznf.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri);
const client = new MongoClient(uri);

// const allVisits = getAllVisits();
// console.log(allVisits);

const voidRun = runAllTests();

async function runAllTests(){
  console.log("CREATE VISIT 2255")
  const createdVis = await addVisit(visitOne);
  console.log(createdVis);

  console.log("GET VISIT 2255")
  const readVis = await getVisitByVisitId(2255);
  console.log(readVis);

  console.log("UPDATE VISIT 2255")
  const updatedVis = await updateVisit(updateOne);
  console.log(updatedVis);

  console.log("DELETE VISIT 2255")
  const deletedVis = await deleteVisitById(2255);
  console.log(deletedVis);

  return null;
}
// console.log("CREATE VISIT 2255")
// const createdVis = addVisit(visitOne);
// console.log(createdVis);

// console.log("GET VISIT 2255")
// const readVis = getVisitByVisitId(2255);
// console.log(readVis);


// console.log("UPDATE VISIT 2255")
// const updatedVis = updateVisit(updateOne);
// console.log(updatedVis);

// console.log("DELETE VISIT 2255")
// const deletedVis = deleteVisitById(2255);
// console.log(deletedVis);


//Get all Visits
async function getAllVisits() {
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

// Delete Visit by ID
async function deleteVisitById(id) {
  console.log("----SERVICE - ID Provided-----");
  console.log(id);
  const intId = parseInt(id);
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .deleteOne({ visit_id: intId });

  console.log(`${result.deletedCount} document(s) has been deleted.`);

  return result;
}

//Update Visit
async function updateVisit(vis) {
  console.log("----SERVICE UpdateVisit STARTED-----");
  const intId = parseInt(vis.visit_id);
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .findOne({ visit_id: intId });

  if (result) {
    console.log(`Found a listing in connection with the id: '${vis.visit_id}'`);
    console.log(result);
    const update = await client
      .db("ECPVisitDummy")
      .collection("DummyVisits")
      .updateOne({ visit_id: intId }, { $set: vis });
    console.log(`Listing updated`);
    const newResult = await client
      .db("ECPVisitDummy")
      .collection("DummyVisits")
      .findOne({ visit_id: intId });
    console.log(newResult);

    return newResult;
  } else {
    console.log("No listing with matching id");

    return null;
  }
}

//Create Visit
async function addVisit(vis) {
  console.log("----SERVICE UpdateVisit STARTED-----");
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .insertOne(vis);

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );

  return result;
}