const Intern = require('../lib/Intern');

//Test creating an intern object
test('creates an intern object', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('bob@bob.com');
    expect(intern.school).toBe('bobschool');
});

//Test the intern name getter function
test('get intern name from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getName()).toBe('Bob');
});

//Test the employee intern getter function
test('get intern id from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getId()).toEqual(expect.any(Number));;
});

//Test the intern email getter function
test('get intern email from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getEmail()).toBe('bob@bob.com');
});

//Test the intern school getter function
test('get school from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getSchool()).toBe('bobschool');
});

//Test the intern role getter function
test('get intern role from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getRole()).toBe('Intern');
});