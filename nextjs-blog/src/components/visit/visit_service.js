//Visit Service
//Implements all CRUD Operations relating to visits to mongoDB

import clientPromise from "../../../lib/mongodb";
import { updateProjectVisitsByProjectId } from "../project/project_service";

const Visit = require("./visit");

//Add Visit
export async function addVisit(vis) {
//   const data = {
//     // visit_id: getNewVisitID(client),
//     visit_id: vis.visit_id,
//     project_id: vis.project_id,
//     employee_ids: vis.employee_ids,
//     start_date: vis.start_date,
//     end_date: vis.end_date
//   };
  const project_update = vis
  const client = await clientPromise;

  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .insertOne(vis);

  const updateProject = await updateProjectVisitsByProjectId(project_update);
  // console.log(
  //   `New listing created with the following id: ${result.insertedId}`
  // );

  return result;
}

//Delete Visit by ID
export async function deleteVisitById(id) {
  // console.log("----SERVICE - ID Provided-----");
  // console.log(id);
  const client = await clientPromise;
  const intId = parseInt(id);
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .deleteOne({ visit_id: intId });

  // console.log(`${result.deletedCount} document(s) has been deleted.`);

  return result;
}

//Update Visit
export async function updateVisitInfo(vis) {
  const client = await clientPromise;

  const intId = parseInt(vis.visit_id);
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .findOne({ visit_id: intId });

  if (result) {
    const update = await client
      .db("ECPVisitDummy")
      .collection("DummyVisits")
      .updateOne({ visit_id: intId },
        { $set:{employee_ids: vis.employee_ids, start_date: vis.start_date, end_date: vis.end_date}});


    const newResult = await client
      .db("ECPVisitDummy")
      .collection("DummyVisits")
      .findOne({ visit_id: intId });

    return newResult;
  } else {
    return null;
  }
}

//Get Visit by visit_Id
export async function getVisitByVisitId(id) {
  const client = await clientPromise;
  // console.log("----SERVICE - ID Provided-----");
  // console.log(id);
  const intId = parseInt(id);
  const result = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .findOne({ visit_id: intId });

  if (result) {
    // console.log(`Found a listing in connection with visit id: '${id}'`);
    // console.log(result);
    return result;
  } else {
    // console.log("none");
    return null;
  }
}

export async function getVisitsByUserId(id) {
  const client = await clientPromise;

  const intId = parseInt(id);
  const cursor = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .find({ user_id: intId });

  const results = cursor.toArray();

  if (results) {
    return results;
  } else {
    return null;
  }
}

export async function getVisitsByEmpId(id) {
  const client = await clientPromise;

  const intId = parseInt(id);
  const cursor = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .find({ employee_ids: intId });

  const results = cursor.toArray();

  if (results) {
    return results;
  } else {
    return null;
  }
}

// Get Visits by project_id
export async function getVisitsByProjectId(id) {
  const client = await clientPromise;
  const intId = parseInt(id);
  const cursor = client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .find({ project_id: intId });

  const results = cursor.toArray();

  if (results) {
    // console.log(`Found listing(s) in connection with project id: '${id}'`);
    // console.log(results);
    return results;
  } else {
    // console.log("none");
    return null;
  }
}

//Get all Visits
//TODO:TEST FOR GET ALL
export async function getAllVisits() {
  const client = await clientPromise;
  const cursor = await client
    .db("ECPVisitDummy")
    .collection("DummyVisits")
    .find();
  const results = cursor.toArray();
  if (results) {
    // console.log("Returning all listings in db");
    // console.log(results);
    return results;
  } else {
    // console.log("No listings received");
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

export async function getNewVisitId() {
  var newId = 0;
  try {
    const client = await clientPromise;
    const db = client.db("ECPVisitDummy");

    const greatestVisits = await db
      .collection("DummyVisits")
      .find()
      .sort({ visit_id: -1 })
      .toArray();
    const greatestId = greatestVisits[0].visit_id;

    // console.log('-----GreatestID-----');
    // console.log(greatestId)

    newId = greatestId + 1;

    return newId;
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
    return e;
  }
}

module.exports = {
  addVisit,
  getAllVisits,
  getVisitByVisitId,
  getVisitsByEmpId,
  getVisitsByUserId,
  updateVisitInfo,
  deleteVisitById,
  getNewVisitId,
  getVisitsByProjectId
}