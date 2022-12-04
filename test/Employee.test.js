const Employee = require("../lib/Employee");

test("create an new employee.", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Testing name.", () => {
  const name = "David";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employee = new Employee("David", id);
  expect(employee.id).toBe(id);
});

test("Testing email.", () => {
  const email = "David@test.com";
  const employee = new Employee("David", 2, email);
  expect(employee.email).toBe(email);
});

test("Gets name", () => {
  const testName = "David";
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
});

test("Gets Id", () => {
  const testID = 2;
  const employee = new Employee("David", testID);
  expect(employee.getId()).toBe(testID);
});

test("Gets email", () => {
  const testEmail = "David@test.com";
  const employee = new Employee("David", 2, testEmail);
  expect(employee.getEmail()).toBe(testEmail);
});

test("Gets employee role.", () => {
  const returnValue = "Employee";
  const employee = new Employee("David", 2, "David@test.com");
  expect(employee.getRole()).toBe(returnValue);
});
