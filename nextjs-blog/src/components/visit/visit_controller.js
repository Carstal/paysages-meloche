//Visit Controller
//Handles all requests and methods for the visit service & class

//Import Visit controller
import{
    getAllVisits,
    getVisitByVisitId,
    getVisitsByProjectId,
    addVisit,
    updateVisit,
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
export const updateVisitInfo = (req,res) => {
    const visitId = req.params.visitId;
    const projectId = req.params.projectId;
    const employeeIds = req.params.employeeIds;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    const newVisit = new Visit(visitId, projectId, employeeIds, startDate, endDate);

    const dbInsert = updateVisit(newVisit);

    return res.json(dbInsert);
};

//Delete Visit By Id
export const deleteVisit = (req,res) => {
    const visitId = req.params.visitId;
    const deletedVisit = deleteVisitById(visitId);

    return res.json(deleteVisit);
};


//Get Visit By Id
export const getVisit = (req,res) => {
    const visitId = req.params.visitId;
    const visit = getVisitByVisitId(visitId);

    return res.json(visit);
};

//Get All Visits
export const getProjectVisits = (req,res) => {
    const projectId = req.params.projectId;
    const projectVisits = getVisitsByProjectId(projectId);

    return res.json(projectVisits);
};

//Get All Visits
export const getVisits = (req,res) => {
    const allVisits = getAllVisits();

    return res.json(allVisits);
};