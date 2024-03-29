// import { updateVisit } from "../../../../src/components/visit/visit_controller";
import {
  addVisit,
  getNewVisitId,
} from "../../../../src/components/visit/visit_service";
const Visit = require("../../../../src/components/visit/visit");

export default async function handler(req, res) {
  // const { id } = req.query
  // console.log("-------CONTROLLER AddVisit STARTED-------");
  let data = req.body;
  // console.log(data);
  // console.log("----CONTROLLER - Values Provided-----");
  // const visitId = parseInt(data.visitId);
  const visitId = await getNewVisitId();
  // console.log(visitId);
  const userId = parseInt(data.userId);
  const projectId = parseInt(data.projectId);
  // console.log(projectId);
  const employees = data.employees.split(",");
  const employeeIds = employees.map(Number);
  // console.log(employeeIds);
  const startDate = new Date(data.startDate);
  // console.log(startDate);
  const endDate = new Date(data.endDate);
  // console.log(endDate);

  // console.log("Request - Create visit");
  // console.log(data.visitId);

  const newVisit = new Visit(
    visitId,
    userId,
    projectId,
    employeeIds,
    startDate,
    endDate
  );

  const visit = await addVisit(newVisit);

  //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })

    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })

    const url = '/project/'+data.projectId
    // res.status(200).json({visit});
    res.redirect(url);
}
