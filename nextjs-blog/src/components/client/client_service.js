//Client Service
//Implements all CRUD Operations relating to clients to mongoDB

import clientPromise from "../../../lib/mongodb";

export async function updateClient(data) {
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");
    const updated = await db.collection("Client").updateOne({ email: data.email }, { $set: data })
    
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
  return null
}