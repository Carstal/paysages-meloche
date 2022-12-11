// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("roomQuality");
//   console.log("Connected Succ");
  

//   client.close();
// });


const { MongoClient } = require('mongodb');


async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";


  const client = new MongoClient(uri);


  try {
      // Connect to the MongoDB cluster
      await client.connect();

      //try to create new listing
      await createOne(client, { 
        collection_id: "00000000000",
        temp: 15.22,
        humi: 18.45,
      })

      await deleteByHumi(client, 18.45);

      // Make the appropriate DB calls
      await  findall(client, "00000000000");

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

//Post
//to modify when actual mongo is created
async function createOne(client, newListing){
  const result = await client.db("ECPTEST").collection("test").insertOne(newListing)

  console.log(`New listing created with the following id: ${result.insertedId}`);
 };

 //Delete
 //change function name and params + create new depending on type of delete
 async function deleteByHumi(client, name){
  const result = await client.db("ECPTEST").collection("test").deleteOne({humi: name});

  console.log(`${result.deletedCount} document(s) were deleted.`)
 }

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findOne(client, listone){
 const result = await client.db("ECPTEST").collection("test").findOne({ collection_id: listone });

 if(result) {
  console.log(`Found a listing in connection with the name '${listone}'`);
  console.log(result);
 } else {
  console.log("none");
 }
 };
  
 async function findall(client, listall){
  const cursor = await client.db("ECPTEST").collection("test").find({ collection_id: listall });
  const results = await cursor.toArray();
  if(results) {
   console.log(`Found a listing in connection with the name '${listall}'`);
   console.log(results);
  } else {
   console.log("none");
  }
  };