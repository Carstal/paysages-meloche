//Project Service
//Implements all CRUD Operations relating to projects to mongoDB
import clientPromise from "../../../lib/mongodb";
// import Project from "./project";

const Project = require("./Project");

export async function createProject (project_data) {
  try {
    const project_id  = await getNewProjectId();
    // console.log('-----New Project ID-----');
    // console.log(project_id)

    // console.log('-----New Project Info-----');
    // console.log(project_data)

    //TODO: Project Validation

    // const newProject = new Project(project_id,
    //   project_data.user_id,
    //   project_data.address,
    //   project_data.service,
    //   [project_data.length, project_data.width],
    //   project_data.description);

  const newProject = {
      project_id: project_id,
      user_id: project_data.userId,
      address: project_data.address,
      service: project_data.service,
      dimensions: [project_data.length, project_data.width],
      status: "Awaiting Approval",
      description: project_data.description,
      quote_id: 0,
      visits:[],
      start_date: new Date(),
      end_date: new Date(),
      invoice_id: 0
  };

    const client = await clientPromise;
    const db = client.db("FinalProject");

    const create = await db.collection("Project").insertOne(newProject)

  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
  return null
}

//Get Project by project_Id
export async function getProjectByProjectId(id) {
  const client = await clientPromise;
  // console.log("----SERVICE - ID Provided-----");
  // console.log(id);
  const intId = parseInt(id);
  const result = await client
    .db("FinalProject")
    .collection("Project")
    .findOne({ project_id: intId });

  if (result) {
    return result;
  } else {
    return null;
  }
}

export async function updateProjectQuoteByProjectId(quote_update) {
  const client = await clientPromise;

  const intId = parseInt(quote_update.project_id);
  const result = await client
    .db("FinalProject")
    .collection("Project")
    .findOne({ project_id: intId });

  if (result) {
    const update = await client
      .db("FinalProject")
      .collection("Project")
      .updateOne({ project_id: intId },
        { $set:{quote_id: quote_update.quote_id}});

    const newResult = await client
      .db("FinalProject")
      .collection("Project")
      .findOne({ project_id: intId });

    return newResult;
  } else {
    return null;
  }
  // const client = await clientPromise;

  // const intId = parseInt(id);
  // const result = await client
  //   .db("FinalProject")
  //   .collection("Project")
  //   .findOne({ project_id: intId });

  // if (result) {
  //   return result;
  // } else {
  //   return null;
  // }
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