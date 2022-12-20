//Visit Controller
//Handles all requests and methods for the visit service & class

//Import Visit controller
import{
    getAllVisits,
    getVisitByVisitId,
    getVisitsByProjectId,
    updateVisit,
    deleteVisitById
} from "./visit_controller";
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

//TODO: Complete Visit controller

//TODO: Create Visit

//TODO: Update Visit


//TODO: Get Visit By Id
export const getVisit = (req,res) => {
    const visitId = req.params.visitId;
    const visit = getVisitByVisitId(visitId);

    return res.json(visit);
};

//TODO: Get All Visits
export const getProjectVisits = (req,res) => {
    const projectId = req.params.projectId;
    const visits = getVisitsByProjectId(projectId);

    return res.json(visits);
};

//TODO: Get All Visits
export const getVisits = (req,res) => {
    const visits = getAllVisits();

    return res.json(visits);
};