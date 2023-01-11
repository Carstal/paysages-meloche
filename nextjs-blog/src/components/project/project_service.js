//Project Service
//Implements all CRUD Operations relating to projects to mongoDB

class Project {

  constructor(type,width,length,description) {
    this.type = type;
    this.width = width;
    this.length = length;
    this.description = description;
  }

  getType() {
      return this.type;
  }
  getWidth() {
      return this.width;
  }
  getLength() {
      return this.length;
  }
  getDescription() {
      return this.description;
  }


}

const { MongoClient } = require('mongodb');

var type;
var description;
var width;
var length;


var p = new Project(type,width,length,description);





async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   * 
   *   var type
  var description
  var width
  var length
  
  var p = new Project(type, width, length, description);
   */



  

  const uri = "mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";


  const client = new MongoClient(uri);




  try {
      // Connect to the MongoDB cluster
      await client.connect();

      //try to create new listing
      await createOne(client, { 
        type: "sad",
        description: "This is a description",
        width: 15.22,
        length: 18.45
      });

      await createOne(client, { 
        type: p.type,
        description: p.description,
        width: p.width,
        length: p.length
      });
                           
   

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
  const result = await client.db("FinalProject").collection("Project").insertOne(newListing)

  console.log(`New listing created with the following id: ${result.insertedId}`);
 };