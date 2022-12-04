const Engineer = require("../lib/Engineer");

test("Gets Github", () => {
  const testGithub = "David";
  const employee = new Engineer("David", 2, "David@test.com", testGithub);
  expect(employee.github).toBe(testGithub);
});

test("Testing getGithub", () => {
  const testGithub = "David";
  const employee = new Engineer("David", 2, "David@test.com", testGithub);
  expect(employee.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employee = new Engineer("David", 2, "David@test.com", "David");
  expect(employee.getRole()).toBe(returnValue);
});
