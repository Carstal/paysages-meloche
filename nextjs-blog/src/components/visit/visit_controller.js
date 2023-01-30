//Visit Controller
//Handles all requests and methods for the visit service & class
import { useRouter } from "next/router";


//Import Visit controller
import{
    getAllVisits,
    getVisitByVisitId,
    getVisitsByProjectId,
    addVisit,
    updateVisitInfo,
    deleteVisitById
} from "./visit_service";
// import { addVisit } from "./visit_service";
//Import Visit class module
const Visit = require("./Visit");

//Example Visit Object
const visitOne = new Visit(
    0,
    3,
    [99, 87, 31],
    new Date("2023-03-12"),
    new Date("2023-03-20")
);

//TODO: Test Visit controller

//Create Visit
export const createVisit = (req,res) => {
    const visitId = req.params.visitId;
    const projectId = req.params.projectId;
    const employeeIds = req.params.employeeIds;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    const newVisit = new Visit(visitId, projectId, employeeIds, startDate, endDate);

    const dbInsert = addVisit(newVisit);

    return res.json(dbInsert);
};

//Update Visit
export const updateVisit = (req,res) => {
    // console.log("-------CONTROLLER UpdateVisit STARTED-------");
    let data = req.body;
    // console.log(data);
    // console.log("----CONTROLLER - Values Provided-----");
    const visitId = req.body.visitId;
    // console.log(visitId);
    const projectId = req.body.projectId;
    // console.log(projectId);
    const employeeIds = req.body.employeeIds;
    // console.log(employeeIds);
    const startDate = req.body.startDate;
    // console.log(startDate);
    const endDate = req.body.endDate;
    console.log(endDate);

    const newVisit = new Visit(visitId, projectId, employeeIds, startDate, endDate);

    const dbInsert = updateVisitInfo(newVisit);

    return res.json(dbInsert);
    // return res.json(newVisit);
};

//Delete Visit By Id
export const deleteVisit = (req,res) => {
    // console.log("-------CONTROLLER DeleteVisit STARTED-------");
    // console.log(req.params);
    // const data = req.body;
    // console.log(data);
    const visitId = req.params.id;
    // const router = useRouter();
    // const { id } = router.query;
    // const visit_id = { id }.id;


    // console.log(fullUrl);
    // const { id } = req.query;
    // const visit_id = { id }.id;
    // console.log("----CONTROLLER - ID Provided-----");
    // console.log(visitId);
    // console.log(visit_id);

    // const deletedVisit = deleteVisitById(visitId);
    // const deletedVisit = deleteVisitById(visit_id);
    // console.log("----CONTROLLER - Object Returned-----");
    // console.log(deletedVisit);

    return res.json(visitId);
    // return res.json(deletedVisit);
};


//Get Visit By Id
export const getVisit = (req,res) => {
    // console.log("-------CONTROLLER GetVisit STARTED-------");
    const visitId = req.params.id;
    // console.log("----CONTROLLER - ID Provided-----");
    // console.log(visitId);
    const visit = getVisitByVisitId(visitId);

    // console.log("----CONTROLLER - Object Returned-----");
    // console.log(visit);

    return res.json(visit);
};

//Get All Visits
export const getProjectVisits = (req,res) => {
    const projectId = req.params.projectId;
    const projectVisits = getVisitsByProjectId(projectId);

    return projectVisits;
};

//Get All Visits
export const getVisits = () => {
    const allVisits = getAllVisits();
    // console.log("--------Visits From controller--------");
    // console.log(allVisits);

    return allVisits;
};