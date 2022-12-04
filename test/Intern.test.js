const Intern = require("../lib/Intern");

test("Create school", () => {
  const testSchool = "School Name";
  const employee = new Intern("David", 2, "David@test.com", testSchool);
  expect(employee.school).toBe(testSchool);
});

test("Gets school", () => {
  const testSchool = "School Name";
  const employee = new Intern("David", 2, "David@test.com", testSchool);
  expect(employee.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employee = new Intern("David", 2, "David@test.com", "School Name");
  expect(employee.getRole()).toBe(returnValue);
});
