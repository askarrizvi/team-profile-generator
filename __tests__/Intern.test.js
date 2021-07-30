const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('bob@bob.com');
    expect(intern.school).toBe('bobschool');
});

test('get intern name from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getName()).toBe('Bob');
});

test('get intern id from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getId()).toEqual(expect.any(Number));;
});

test('get intern email from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getEmail()).toBe('bob@bob.com');
});

test('get school from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getSchool()).toBe('bobschool');
});

test('get intern role from function', () => {
    const intern = new Intern('Bob', 0, 'bob@bob.com', 'bobschool');
    expect(intern.getRole()).toBe('Intern');
});