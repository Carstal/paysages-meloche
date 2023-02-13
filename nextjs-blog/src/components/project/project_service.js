//Project Service
//Implements all CRUD Operations relating to projects to mongoDB
import clientPromise from "../../../lib/mongodb";

export async function createProject (data) {
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");

    const create = await db.collection("Project").insertOne(data)

  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
  return null
}