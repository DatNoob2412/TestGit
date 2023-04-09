const login = require('./login');

describe("login function", () => {
  test("should return 'success' for correct username and password", () => {
    const result = login("admin", "password");
    expect(result).toBe("success");
  });

  test("should return 'failure' for incorrect username and password", () => {
    const result = login("user", "pass");
    expect(result).toBe("failure");
  });
});
