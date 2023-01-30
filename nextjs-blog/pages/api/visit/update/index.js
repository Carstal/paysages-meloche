// import { updateVisit } from "../../../../src/components/visit/visit_controller";
import { updateVisitInfo } from "../../../../src/components/visit/visit_service";
const Visit = require("../../../../src/components/visit/Visit");

export default async function handler(req, res) {

    // const { id } = req.query
    // console.log("-------CONTROLLER UpdateVisit STARTED-------");
    let data = req.body;
    // console.log(data);
    // console.log("----CONTROLLER - Values Provided-----");
    const visitId = parseInt(data.visitId);
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

    // const idk = "id="+visit_id;

    // console.log("Request - UPDATE value");
    // console.log(data.visitId);

    const newVisit = new Visit(visitId, userId, projectId, employeeIds, startDate, endDate);

    // const visitInfo = fetch('http://localhost:3000/api/visit/update', {
    //     method: 'PATCH',
    //     headers: {
    //     'Content-Type': 'application/json',
    //     },
    //     body: data,
    // })

    const visit = await updateVisitInfo(newVisit);

    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })

    // res.status(200).json({visit});
    res.redirect('../../../visit');
}