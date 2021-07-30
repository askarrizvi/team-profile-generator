const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('bob@bob.com');
    expect(engineer.github).toBe('bobgh');
});

test('get engineer name from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getName()).toBe('Bob');
});

test('get engineer id from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getId()).toEqual(expect.any(Number));;
});

test('get engineer email from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getEmail()).toBe('bob@bob.com');
});

test('get Github username from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getGithub()).toBe('bobgh');
});

test('get engineer role from function', () => {
    const engineer = new Engineer('Bob', 0, 'bob@bob.com', 'bobgh');
    expect(engineer.getRole()).toBe('Engineer');
});