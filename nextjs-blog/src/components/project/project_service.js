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

export async function getNewProjectId(){
  var newId = 0;
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");

    const greatestId = await db.collection("Project").max(project_id)

    newId = greatestId + 1;
    
    return newId;
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
    return e;
  }
}