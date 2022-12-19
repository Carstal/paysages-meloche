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

import Visit from "visit.js";

const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
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
    await createOne(client);

    //     collection_id: "00000000000",
    //     temp: 15.22,
    //     humi: 18.45,
    // });
    // await  findall(client, "00000000000");
    // await updateOne(client, {
    //     collection_id: "00000000000",
    //     temp: 19.75,
    //     humi: 20.45,
    // });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

//Post
//to modify when actual mongo is created
async function createOne(client) {
  // async function createOne(client, data){
  const newVisit = Visit(
    "639fa87e22fbb9582bbb4155",
    [12, 21, 32, 43],
    new Date("2015-03-25"),
    new Date("2015-03-25")
  );
  const data = {
    project_id: newVisit.project_id,
    employee_ids: newVisit.employee_ids,
    start_date: newVisit.start_date,
    end_date: newVisit.end_date,
  };

  const result = await client
    .db("ECP-CalendarDummy ")
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
//     .db("ECP-CalendarDummy ")
//     .collection("dummy-calendar")
//     .deleteOne({ "_id" : id });

//   console.log(`${result.deletedCount} document(s) were deleted.`);
// }

// async function updateOne(client, listingUpdate) {
//   //find existing record
//   const result = await client
//     .db("ECP-CalendarDummy ")
//     .collection("dummy-calendar")
//     .findOne({ collection_id: listingUpdate.collection_id });

//   if (result) {
//     console.log(
//       `Found a listing in connection with the name '${listingUpdate}'`
//     );
//     console.log(result);
//     //update record
//     client
//       .db("ECP-CalendarDummy ")
//       .collection("dummy-calendar")
//       .updateOne(
//         { collection_id: listingUpdate.collection_id },
//         { $set: listingUpdate }
//       );
//     console.log(`Listing updated`);
//     //get record with new values
//     const newResult = await client
//       .db("ECP-CalendarDummy ")
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

// async function findOne(client, listone) {
//   const result = await client
//     .db("ECP-CalendarDummy ")
//     .collection("dummy-calendar")
//     .findOne({ collection_id: listone });

//   if (result) {
//     console.log(`Found a listing in connection with the name '${listone}'`);
//     console.log(result);
//   } else {
//     console.log("none");
//   }
// }

// async function findall(client, listall) {
//   const cursor = await client
//     .db("ECP-CalendarDummy ")
//     .collection("dummy-calendar")
//     .find({ collection_id: listall });
//   const results = await cursor.toArray();
//   if (results) {
//     console.log(`Found a listing in connection with the name '${listall}'`);
//     console.log(results);
//   } else {
//     console.log("none");
//   }
// }
