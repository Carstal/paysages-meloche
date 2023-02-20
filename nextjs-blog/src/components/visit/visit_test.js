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
  234333,
  2255,
  [99, 234322, 31],
  new Date("2023-03-12"),
  new Date("2023-03-20")
);
const updateOne = new Visit(
  2255,
  234333,
  2255,
  [99],
  new Date("2023-05-12"),
  new Date("2023-05-20")
);

const uri =
"mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";
// const mongouri =
// "mongodb+srv://carstaltari:Pablo__545@iot2-carlo.ijsiznf.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri);
const client = new MongoClient(uri);

// const allVisits = getAllVisits();
// console.log(allVisits);

// const user_id = getNewUserId();
// console.log(user_id);

// const voidRun = runAllTests();

// async function runAllTests(){
//   console.log("CREATE VISIT 2255")
//   const createdVis = await addVisit(visitOne);
//   console.log(createdVis);

//   console.log("GET VISIT 2255")
//   const readVis = await getVisitByVisitId(2255);
//   console.log(readVis);

//   console.log("GET VISITS FOR USER 234333")
//   const userVis = await getVisitsByUserId(234333);
//   console.log(userVis);

//   console.log("GET VISITS FOR EMPLOYEE 99")
//   const empVis = await getVisitsByEmpId(99);
//   console.log(empVis);

//   console.log("UPDATE VISIT 2255")
//   const updatedVis = await updateVisit(updateOne);
//   console.log(updatedVis);

//   console.log("DELETE VISIT 2255")
//   const deletedVis = await deleteVisitById(2255);
//   console.log(deletedVis);

  // console.log("CREATE ten visits")
  // const bulkCreate = await createTenVisits();

//   return null;
// }


//Get all Visits
// async function getAllVisits() {
//     const results = await client
//     .db("ECPVisitDummy")
//     .collection("DummyVisits")
//     .find({}).toArray();
//   if (results) {
//     console.log("Returning all listings in db");
//     console.log(results);

//     return results;
//   } else {
//     console.log("No listings received");

//     return null;
//   }
// }

//Get Visit by visit_Id
async function getVisitByVisitId(id) {
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .findOne({ visit_id: id });

  if (result) {
    // console.log(`Found a listing in connection with visit id: '${id}'`);
    // console.log(result);

    return result;
  } else {
    // console.log("none");

    return null;
  }
}

//Get visits by user_id
async function getVisitsByUserId(id) {
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .find({ user_id: id }).toArray();

  if (result) {

    return result;
  } else {

    return null;
  }
}

//Get Visits by emp_id
async function getVisitsByEmpId(id) {
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .find({ employee_ids: id }).toArray();

  if (result) {

    return result;
  } else {

    return null;
  }
}

// Delete Visit by ID
async function deleteVisitById(id) {
  // console.log("----SERVICE - ID Provided-----");
  // console.log(id);
  const intId = parseInt(id);
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .deleteOne({ visit_id: intId });

  // console.log(result);
  // console.log(`${result.deletedCount} document(s) has been deleted.`);

  return result;
}

//Update Visit
async function updateVisit(vis) {
  // console.log("----SERVICE UpdateVisit STARTED-----");
  const intId = parseInt(vis.visit_id);
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .findOne({ visit_id: intId });

  if (result) {
    // console.log(`Found a listing in connection with the id: '${vis.visit_id}'`);
    // console.log(result);
    const update = await client
      .db("ECPVisitDummy")
      .collection("DummyVisits")
      .updateOne({ visit_id: intId }, { $set: vis });
    // console.log(`Listing updated`);
    const newResult = await client
      .db("ECPVisitDummy")
      .collection("DummyVisits")
      .findOne({ visit_id: intId });
    // console.log(newResult);

    return newResult;
  } else {
    // console.log("No listing with matching id");

    return null;
  }
}

//Create Visit
async function addVisit(vis) {
  // console.log("----SERVICE AddVisit STARTED-----");
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .insertOne(vis);

  // console.log(
  //   `New listing created with the following id: ${result.insertedId}`
  // );

  return result;
}


// const visitTwo = new Visit(
//   2255,
//   234333,
//   2255,
//   [99, 234322, 31],
//   new Date("2023-03-12"),
//   new Date("2023-03-20")
// );

// async function createTenVisits() {
  // console.log("----SERVICE CreateTenVisits STARTED-----");
  //default parameters
  // let visitId = 1000;
  // let userId = 234333;
  // let projectId = 1000;
  // let emps1 = [99, 234322, 31];
  // let emps2 = [99, 31];
  // let day = 1
  // let month = 3
  // let year = 2023

  // for (let i = 0; i < 10; i++){
  //   let dd = day;
  //   let mm = month;
  //   let yyyy = year;

  //   if (dd < 10) dd = '0' + dd;
  //   if (mm < 10) mm = '0' + mm;
  //   const formattedDate = yyyy + '-' + mm + '-' + dd;
  //   var vis = null
  //   if(i%2 == 0){
  //     vis = new Visit(
  //       visitId,
  //       userId,
  //       projectId,
  //       emps1,
  //       new Date(formattedDate),
  //       new Date(formattedDate)
  //     );
  //   }
  //   else{
  //     vis = new Visit(
  //       visitId,
  //       userId,
  //       projectId,
  //       emps2,
  //       new Date(formattedDate),
  //       new Date(formattedDate)
  //     );
  //   }

  // const result = await client
  // .db("ECPVisitDummy")
  // .collection("DummyVisits")
  // .insertOne(vis);

  // console.log(
  // `New listing created with the following id: ${result.insertedId}`
  // );
  //   day++;
  // }

  // const result = await client
  //   .db("ECPVisitDummy")
  //   .collection("DummyVisits")
  //   .insertOne(vis);

  // console.log(
  //   `New listing created with the following id: ${result.insertedId}`
  // );

//   return "All listings created";
// }


// async function getNewUserId(){
//   var newId = 0;

//     const client = await MongoClient.connect("mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority");
//     const db = client.db("FinalProject");

//     const greatestVisits = await db.collection("Client").find().sort({"user_id":-1}).toArray();
//     const greatestId = greatestVisits[0].user_id;

//     newId = greatestId + 1;
//     console.log(newId)

//     return newId;
// }

module.exports = {
  addVisit,
  deleteVisitById,
  getVisitByVisitId,
  getVisitsByEmpId,
  getVisitsByUserId,
  updateVisit
}