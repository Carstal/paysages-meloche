//Visit Service
//Implements all CRUD Operations relating to visits to mongoDB

const { MongoClient } = require("mongodb");
const Visit = require("./Visit");

const uri =
"mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";
const mongouri =
"mongodb+srv://carstaltari:Pablo__545@iot2-carlo.ijsiznf.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri);
const client = new MongoClient(mongouri);

//Add Visit
export function addVisit(vis) {
  const data = {
    // visit_id: getNewVisitID(client),
    visit_id: vis.visit_id,
    project_id: vis.project_id,
    employee_ids: vis.employee_ids,
    start_date: vis.start_date,
    end_date: vis.end_date
  };

  const result = client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .insertOne(data);

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );

  return result;
}

//Delete Visit by ID
export function deleteVisitById(id) {
  const result = client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .deleteOne({ visit_id: id });

  console.log(`${result.deletedCount} document(s) has been deleted.`);

  return result;
}

//Update Visit
export function updateVisit(vis) {
  //find existing record
  const result = client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .findOne({ visit_id: vis.visit_id });

  if (result) {
    console.log(`Found a listing in connection with the id: '${vis.visit_id}'`);
    console.log(result);
    //update record
    client
      .db("ECP-CalendarDummy")
      .collection("dummy-calendar")
      .updateOne({ visit_id: vis.visit_id }, { $set: vis });
    console.log(`Listing updated`);
    //get record with new values
    const newResult = client
      .db("ECP-CalendarDummy")
      .collection("dummy-calendar")
      .findOne({ visit_id: vis.visit_id });
    console.log(newResult);

    return newResult;
  } else {
    console.log("No listing with matching id");

    return null;
  }
}

//Get Visit by visit_Id
export function getVisitByVisitId(id) {
  const result = client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
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

//Get Visits by project_id
export function getVisitsByProjectId(id) {
  const cursor = client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .find({ project_id: id });

  const results = cursor.toArray();

  if (results) {
    console.log(`Found listing(s) in connection with project id: '${id}'`);
    console.log(results);

    return results;
  } else {
    console.log("none");

    return null;
  }
}

//Get all Visits
export function getAllVisits() {
  const cursor = client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .find();
  const results = cursor.toArray();
  if (results) {
    console.log("Returning all listings in db");
    console.log(results);

    return results;
  } else {
    console.log("No listings received");

    return null;
  }
}

//Get greatest visit id and increment for new inserted visit
// async function getNewVisitID(client){
//   const cursor = await client
//   .db("ECP-CalendarDummy")
//   .collection("dummy-calendar")
//   .aggregate([
//     {
//       '$sort': {
//         'visit_id': -1
//       }
//     }
//   ]);

//   const resultsArr = await cursor.toArray();
//   const result = resultsArr[0];
//   if (result) {
//     console.log(`Found a listing in connection with greatest visit id: '${result}'`);
//     console.log(result);
//   } else {
//     console.log("none");
//     return ("error");
//   }
// }
