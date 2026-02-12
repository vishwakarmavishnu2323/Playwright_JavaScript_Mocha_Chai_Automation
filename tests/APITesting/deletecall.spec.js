import { test,request,expect } from "@playwright/test";


test("Delete Call For API Testing", async ({ request }) => {

  const respDelete = await request.delete("https://restful-booker.herokuapp.com/booking/2", {
    headers: {
      Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    }
  });

  expect(respDelete.status()).toBe(201);

  const respDelText = await respDelete.text();
  console.log(respDelText);
  expect(respDelText).toEqual("Created");

  const respGet = await request.get("https://restful-booker.herokuapp.com/booking/2");
  console.log(respGet.status());
  expect(respGet.status()).toBe(404);
});
