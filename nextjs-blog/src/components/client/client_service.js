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

export async function getAllClients() {
  try {
      const client = await clientPromise;
      const db = client.db("FinalProject");

      const clients = await db
          .collection("Client")
          .find({})
          .toArray();
      return clients

  } catch (e) {
      console.error(e);
      return null
  }
}

export async function getClient(email) {
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");

    const post = await db.collection("Client").findOne({
      email: email,
    });
    return post
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};