const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Bob', 0, 'bob@bob.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('bob@bob.com');
});

test('get employee name from function', () => {
    const employee = new Employee('Bob', 0, 'bob@bob.com');
    expect(employee.getName()).toBe('Bob');
})

test('get employee id from function', () => {
    const employee = new Employee('Bob', 0, 'bob@bob.com');
    expect(employee.getId()).toEqual(expect.any(Number));;
})

test('get employee email from function', () => {
    const employee = new Employee('Bob', 0, 'bob@bob.com');
    expect(employee.getEmail()).toBe('bob@bob.com');
})

test('get employee role from function', () => {
    const employee = new Employee('Bob', 0, 'bob@bob.com');
    expect(employee.getRole()).toBe('Employee');
})