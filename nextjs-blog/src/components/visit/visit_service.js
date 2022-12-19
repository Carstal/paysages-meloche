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

//import Visit from './visit.js';

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
    const visitOne = new Visit(5,3,[23,43,54], new Date("2023-03-12"), new Date("2023-03-20"));
    //await createOne(client);
    // await createOne(client, visitOne);

    // await  getAllVisits(client);
    await getVisitById(client, visitOne.visit_id);
    // await updateOne(client, visitOne);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

//Post
//to modify when actual mongo is created
async function createOne(client, vis) {
  // async function createOne(client, data){
  //const newVisit = new Visit(4,4,[12, 21, 32, 43],new Date("2015-03-25"),new Date("2015-03-25"));
  console.log(vis.visit_id);
  const data = {
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

//Delete
//change function name and params + create new depending on type of delete
// async function deleteById(client, id) {
//   const result = await client
//     .db("ECP-CalendarDummy")
//     .collection("dummy-calendar")
//     .deleteOne({ "_id" : id });

//   console.log(`${result.deletedCount} document(s) were deleted.`);
// }

// async function updateOne(client, listingUpdate) {
//   //find existing record
//   const result = await client
//     .db("ECP-CalendarDummy")
//     .collection("dummy-calendar")
//     .findOne({ collection_id: listingUpdate.collection_id });

//   if (result) {
//     console.log(
//       `Found a listing in connection with the name '${listingUpdate}'`
//     );
//     console.log(result);
//     //update record
//     client
//       .db("ECP-CalendarDummy")
//       .collection("dummy-calendar")
//       .updateOne(
//         { collection_id: listingUpdate.collection_id },
//         { $set: listingUpdate }
//       );
//     console.log(`Listing updated`);
//     //get record with new values
//     const newResult = await client
//       .db("ECP-CalendarDummy")
//       .collection("dummy-calendar")
//       .findOne({ collection_id: listingUpdate.collection_id });
//     console.log(newResult);
//   } else {
//     console.log("No listing with matching id");
//   }
// }

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function getVisitById(client, id) {
  const result = await client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .findOne({ visit_id: id });

  if (result) {
    console.log(`Found a listing in connection with the id: '${id}'`);
    console.log(result);
  } else {
    console.log("none");
  }
}

async function getAllVisits(client) {
  const cursor = await client
    .db("ECP-CalendarDummy")
    .collection("dummy-calendar")
    .find();
  const results = await cursor.toArray();
  if (results) {
    console.log('Returning all listings in db');
    console.log(results);
  } else {
    console.log("No listings received");
  }
}
