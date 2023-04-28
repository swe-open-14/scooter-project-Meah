const User = require('../src/User')

// User tests here
describe("User"), () => {
    let user0;
    let username;
    let password;
    let age;
}
beforeEach() => {
    username = "Meah";
    password = "Apple2";
    age = 24
    user0 = new User(username, password, age);

};
describe ("User Constructor", () => ) {
    test("set properties", () =>) {
        expect(user0.username).toBe(username);
        expect(user0.password).toBe(password);
        expect(user0.age).toBe(age);
    };
describe("User Methods", () => ) {
    test("Should successfully login in with correct password", () => {
        user0.login("Meah");
        expect(user0.loggedIn).toBe(true);
    })
    test("Should throw error message with wrong password", () => {
        expect() => user0.login("Britney123").toThrow("Incorrect Password");
        expect(user0.loggedIn).toBe(false);

        })

    test("Should log out successfully", () => {
        user0.login(password);
        user0.logout();
        expect(user0.loggedIn).toBe(false);

        })

}

}

// test password

// test age

// test login

// test logout
