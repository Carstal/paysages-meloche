//Visit Service Tests

const Visit = require("./visit");
const visit_test = require("./visit_test.js");
// Can't use import statements outside a module
// const visit_service = require("./visit_service.js");
//
const visitOne = new Visit(
  2240,
  120,
  2240,
  [99, 87, 31],
  new Date("2023-03-12"),
  new Date("2023-03-20")
);
const updateOne = new Visit(
  2240,
  120,
  2240,
  [99],
  new Date("2023-05-12"),
  new Date("2023-05-20")
);

// function sum(x,y){
//     var sum = x+y
//     return sum
// }

// test('Get all visits from the database', () => {
//     expect(visit_service.getAllVisits()).toBe(1);
//   });
// test('Sum test', () => {
//     expect(sum(1,2)).toBe(3);
// });
test("Create visit", async () => {
  const newVis = await visit_test.addVisit(visitOne);
  expect(newVis.acknowledged).toBe(true);
});

test("Get visit by visit ID", async () => {
  const visID = 2240;
  const vis = await visit_test.getVisitByVisitId(visID);
  expect(vis.visit_id).toBe(visID);
});

test("Get visits by user ID", async () => {
  const userID = 120;
  const vis = await visit_test.getVisitsByUserId(userID);
  expect(vis[0].user_id).toBe(userID);
});

test("Get visits by emp ID", async () => {
  const empID = 99;
  const vis = await visit_test.getVisitsByEmpId(empID);
  const doArraysIntersect = (array1, array2) =>
    array1.some((item1) => array2.includes(item1));
  expect(doArraysIntersect(vis[0].employee_ids, [empID])).toBe(true);
});

test("Update visit", async () => {
  // const newVis = await visit_test.updateVisitInfo(updateOne);
  const newVis = await visit_test.updateVisit(updateOne);
  expect(newVis.employee_ids).toEqual([99]);
});

test("Delete visit by ID", async () => {
  const visID = 2240;
  const vis = await visit_test.deleteVisitById(visID);
  expect(vis.deletedCount).toBe(1);
});
