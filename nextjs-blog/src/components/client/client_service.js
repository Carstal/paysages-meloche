//Client Service
//Implements all CRUD Operations relating to clients to mongoDB

export async function getClient(email) {
    const result = await client
      .db("FinalProject")
      .collection("Client")
      .findOne({ email: email });
  
    if (result) {
      console.log(`Found a listing in connection with client email: '${email}'`);
      console.log(result);
  
      return result;
    } else {
      console.log("none");
  
      return null;
    }
  }