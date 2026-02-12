import { test, request } from "@playwright/test";

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
      Accept: "application/json"
    }
  });
});



test("API Testing Get Practice 1 using header", async () => {
   // Make GET request with headers
  const resp1 = await apiContext.get("/booking", {
    headers: { Accept: "application/json" }
  });
  console.log(await resp1.json());
});

//for this test pass base url &headers in config file
// test("API Testing Get Practice 2 using header", async ({request}) => {
//   const resp1 = await request.get("/booking");
//   console.log(await resp1.json());
// });

test("API Testing Get Practice 3 using header", async ({ request }) => {
  const resp1 = await request.get("https://restful-booker.herokuapp.com/booking", {
    headers: { Accept: "application/json" } // Correct placement of headers
  });
console.log(await resp1.json());
});

test("API Testing Get Practice 4 using header", async () => {
  const reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
      Accept: "application/json"
    }
  })

  const resp1 = await reqContext.get("/booking");
  console.log(await resp1.json());
})




