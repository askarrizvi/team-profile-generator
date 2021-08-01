const Engineer = require('../lib/Engineer');

//Test creating a new engineer function
test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('bob@bob.com');
    expect(engineer.github).toBe('bobgh');
});

//Test the engineer name getter function
test('get engineer name from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getName()).toBe('Bob');
});

//Test the engineer id getter function
test('get engineer id from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getId()).toEqual(expect.any(Number));;
});

//Test the engineer email getter function
test('get engineer email from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getEmail()).toBe('bob@bob.com');
});

//Test the engineer github username getter function
test('get Github username from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getGithub()).toBe('bobgh');
});

//Test the engineer role getter function
test('get engineer role from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getRole()).toBe('Engineer');
});