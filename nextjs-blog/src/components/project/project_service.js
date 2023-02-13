//Project Service
//Implements all CRUD Operations relating to projects to mongoDB
import clientPromise from "../../../lib/mongodb";
import Project from "./project";

export async function createProject (project_data) {
  try {
    const project_id  = await getNewProjectId();
    console.log('-----New Project ID-----');
    console.log(project_id)

    console.log('-----New Project Info-----');
    console.log(project_data)

    // const newProject = new Project(project_id)

    // const client = await clientPromise;
    // const db = client.db("FinalProject");

    // const create = await db.collection("Project").insertOne(data)

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

    const greatestProjects = await db.collection("Project").find().sort({"project_id":-1}).toArray();
    const greatestId = greatestProjects[0].project_id;

    // console.log('-----GreatestID-----');
    // console.log(greatestId)

    newId = greatestId + 1;

    return newId;
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
    return e;
  }
}