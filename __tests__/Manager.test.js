const Manager = require('../lib/Manager');

//Test creating manager object
test('creates an manager object', () => {
    const manager = new Manager('Bob', 0, 'bob@bob.com', 123);

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('bob@bob.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//Test the manager name getter function
test('get manager name from function', () => {
    const manager = new Manager('Bob', 0, 'bob@bob.com', 123);
    expect(manager.getName()).toBe('Bob');
});
//Test the manager id getter function
test('get manager id from function', () => {
    const manager = new Manager('Bob', 0, 'bob@bob.com', 123);
    expect(manager.getId()).toEqual(expect.any(Number));;
});

//Test the manager email getter function
test('get manager email from function', () => {
    const manager = new Manager('Bob', 0, 'bob@bob.com', 123);
    expect(manager.getEmail()).toBe('bob@bob.com');
});

//Test the manager role getter function
test('get manager role from function', () => {
    const manager = new Manager('Bob', 0, 'bob@bob.com', 123);
    expect(manager.getRole()).toBe('Manager');
});