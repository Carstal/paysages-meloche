//Visit Service Tests
import{
    getAllVisits,
    getVisitByVisitId,
    getVisitsByProjectId,
    addVisit,
    updateVisit,
    deleteVisitById
} from "./visit_service";
const { test } = require("body-parser");
// const visit_service = require("./visit_service");
 
const visitOne = new Visit(
    2255,
    2255,
    [99, 87, 31],
    new Date("2023-03-12"),
    new Date("2023-03-20")
);
const updateOne = new Visit(
    2255,
    2255,
    [99],
    new Date("2023-05-12"),
    new Date("2023-05-20")
);

// test('Get all visits from the database', () => {
//     expect(visit_service.getAllVisits()).toBe(1);
//   });

test('Create visit', ()=>{
    const newVis = addVisit(visitOne);
    expect(newVis.visit_id).toBe(visitOne.visit_id);
});

// test('Get visit by ID', ()=>{
//     expect(visit_service.getVisitByVisitId(20)).toBe(20);
// });

//test('Delete visit by ID', ()=>{
//     expect(visit_service.getVisitByVisitId(20)).toBe(20);
// });