import { test, expect } from "@playwright/test";

test("Fetch and Validate Response Header", async ({ request }) => {
  const getResponse = await request.get("https://restful-booker.herokuapp.com/booking/1");
  
  const headersValue = getResponse.headers();
  console.log(headersValue);

  expect(headersValue.server).toEqual("Heroku");
  expect(headersValue["x-powered-by"]).toEqual("Express");

  console.log("********************************************************");

  const headersArrayValues = getResponse.headersArray();
  console.log(headersArrayValues);

  expect(headersArrayValues.length).toBe(10);

  headersArrayValues.forEach((header) => {
    console.log(header.name+"::"+header.value);
  });
});
