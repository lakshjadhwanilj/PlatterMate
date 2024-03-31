const supertest = require('supertest');
const app = require('../app');

describe("Testing the API", () => {
  it("Tests our testing framework if it works", () => {
    expect(2).toBe(2);
  });

  it("GET / - success", async () => {
    const response = await supertest(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
