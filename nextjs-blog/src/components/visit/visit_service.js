//Visit Service
//Implements all CRUD Operations relating to visits to mongoDB

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("dummy-calendar").collection("roomQuality");
//   console.log("Connected Success");
//   client.close();
// });

const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */

  const Visit = require("./Visit");

  const uri =
    "mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";
  const mongouri =
    "mongodb+srv://carstaltari:Pablo__545@iot2-carlo.ijsiznf.mongodb.net/?retryWrites=true&w=majority";

  //   const client = new MongoClient(uri);
  const client = new MongoClient(mongouri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    //try to create new visit
    const visitOne = new Visit(
      0,
      3,
      [99, 87, 31],
      new Date("2023-03-12"),
      new Date("2023-03-20")
    );

    // console.log(getNewVisitID(client));
    // await addVisit(client, visitOne);
    // await getAllVisits(client);
    // await getVisitByVisitId(client, visitOne.visit_id);
    // await getVisitsByProjectId(client, visitOne.project_id);
    // await updateVisit(client, visitOne);
    // await deleteVisitById(client, visitOne.visit_id);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

//Add Visit
async function addVisit(client, vis) {
  //const newVisit = new Visit(4,4,[12, 21, 32, 43],new Date("2015-03-25"),new Date("2015-03-25"));
  // console.log(vis.visit_id);
  const data = {
    // visit_id: getNewVisitID(client),
    visit_id: vis.visit_id,
    project_id: vis.project_id,
    employee_ids: vis.employee_ids,
    start_date: vis.start_date,
    end_date: vis.end_date
  };

  const result = await client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .insertOne(data);

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

//Delete Visit by ID
async function deleteVisitById(client, id) {
  const result = await client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .deleteOne({ visit_id: id });

  console.log(`${result.deletedCount} document(s) has been deleted.`);
}

//Update Visit
async function updateVisit(client, vis) {
  //find existing record
  const result = await client
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
    const newResult = await client
      .db("ECP-CalendarDummy")
      .collection("dummy-calendar")
      .findOne({ visit_id: vis.visit_id });
    console.log(newResult);
  } else {
    console.log("No listing with matching id");
  }
}

//Get Visit by visit_Id
async function getVisitByVisitId(client, id) {
  const result = await client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .findOne({ visit_id: id });

  if (result) {
    console.log(`Found a listing in connection with visit id: '${id}'`);
    console.log(result);
  } else {
    console.log("none");
  }
}

//Get Visits by project_id
async function getVisitsByProjectId(client, id) {
  const cursor = await client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .find({ project_id: id });

  const results = await cursor.toArray();

  if (results) {
    console.log(`Found listing(s) in connection with project id: '${id}'`);
    console.log(results);
  } else {
    console.log("none");
  }
}

//Get all Visits
async function getAllVisits(client) {
  const cursor = await client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .find();
  const results = await cursor.toArray();
  if (results) {
    console.log("Returning all listings in db");
    console.log(results);
  } else {
    console.log("No listings received");
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
