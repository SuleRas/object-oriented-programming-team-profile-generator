const Manager = require("../lib/Manager");

test("Create office number.", () => {
  const testOfficeNumber = 2;
  const employee = new Manager("David", 2, "David@test.com", testOfficeNumber);
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test("Testing get office number", () => {
  const testOfficeNumber = 2;
  const employee = new Manager("David", 2, "David@test.com", testOfficeNumber);
  expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employee = new Manager("David", 2, "David@test.com", 2);
  expect(employee.getRole()).toBe(returnValue);
});
