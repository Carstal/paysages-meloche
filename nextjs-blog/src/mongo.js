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

      // Make the appropriate DB calls
      await  findall(client, "00000000000");

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findOne(client, listone){
 const result = await client.db("test").collection("roomQuality").findOne({ collection_id: listone });

 if(result) {
  console.log(`Found a listing in connection with the name '${listone}'`);
  console.log(result);
 }else{
  console.log("none");
 }
 };
  
 async function findall(client, listall){
  const cursor = await client.db("test").collection("roomQuality").find({ collection_id: listall });
  const results = await cursor.toArray();
  if(results) {
   console.log(`Found a listing in connection with the name '${listall}'`);
   console.log(results);
  }else{
   console.log("none");
  }
   
   
  };
   
 
