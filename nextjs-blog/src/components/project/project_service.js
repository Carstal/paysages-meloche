//Project Service
//Implements all CRUD Operations relating to projects to mongoDB
import clientPromise from "../../../lib/mongodb";
import { getVisitsByProjectId } from "../visit/visit_service";
// import Project from "./project";

const Project = require("./project");

export async function createProject(project_data) {
  try {
    const project_id = await getNewProjectId();
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
      visits: [],
      start_date: new Date(),
      end_date: new Date(),
      invoice_id: 0,
    };

    const client = await clientPromise;
    const db = client.db("FinalProject");

    const create = await db.collection("Project").insertOne(newProject);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
  return null;
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

export async function updateProjectInvoiceByProjectId(visit_update) {
  const client = await clientPromise;

  const intId = parseInt(visit_update.project_id);
  const result = await client
    .db("FinalProject")
    .collection("Project")
    .findOne({ project_id: intId });

  if (result) {
    const update = await client
      .db("FinalProject")
      .collection("Project")
      .updateOne({ project_id: intId },
        { $set:{invoice_id: visit_update.invoice_id}});

    const newResult = await client
      .db("FinalProject")
      .collection("Project")
      .findOne({ project_id: intId });

    return newResult;
  } else {
    return null;
  }
}

export async function updateProjectQuoteByProjectId(visit_update) {
  const client = await clientPromise;

  const intId = parseInt(visit_update.project_id);
  const result = await client
    .db("FinalProject")
    .collection("Project")
    .findOne({ project_id: intId });

  if (result) {
    const update = await client
      .db("FinalProject")
      .collection("Project")
      .updateOne({ project_id: intId },
        { $set:{quote_id: visit_update.quote_id}});

    const newResult = await client
      .db("FinalProject")
      .collection("Project")
      .findOne({ project_id: intId });

    return newResult;
  } else {
    return null;
  }
}

export async function updateProjectVisitsByProjectId(visit_update) {
  const client = await clientPromise;
  // console.log(visit_update)
  const project_id = visit_update.project_id
  const start_date = visit_update.start_date
  const end_date = visit_update.end_date
  const intId = parseInt(project_id);
  const result = await client
    .db("FinalProject")
    .collection("Project")
    .findOne({ project_id: intId });

  if (result) {
    const visits = await getVisitsByProjectId(intId);
    var earliestDate = visits[0].start_date
    var latestDate = visits[0].end_date
    var visitIds = []
    visits.forEach((visit) =>{
      if(visit.start_date < earliestDate){
        earliestDate = visit.start_date
      }
      if(visit.end_date > latestDate){
        latestDate = visit.end_date
      }
      visitIds.push(visit.visit_id)
    })

    console.log(visitIds)

    const update = await client
      .db("FinalProject")
      .collection("Project")
      .updateOne({ project_id: intId },
        { $set:{visits: visitIds, start_date: earliestDate, end_date: latestDate}});

    const newResult = await client
      .db("FinalProject")
      .collection("Project")
      .findOne({ project_id: intId });

    return newResult;
  } else {
    return null;
  }
}

export async function getNewProjectId() {
  var newId = 0;
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");

    const greatestProjects = await db
      .collection("Project")
      .find()
      .sort({ project_id: -1 })
      .toArray();
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
