import { test, request, expect } from "@playwright/test";

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com"
  });
});

test.afterAll(async () => {
  await apiContext.dispose();
});

test("API Testing Get Practice 1", async () => {
  const resp1 = await apiContext.get("/booking");
  console.log(await resp1.json());
});
//for this test pass base url in config file
// test("API Testing Get Practice 2", async ({request}) => {
//   const resp1 = await request.get("/booking");
//   console.log(await resp1.json());
// });

test("API Testing Get Practice 3", async ({request}) => {
  const resp1 = await request.get("https://restful-booker.herokuapp.com/booking");
  console.log(await resp1.json());
})

test("API Testing Get Practice 4", async () => {
  const reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com"
  })

  const resp1 = await reqContext.get("/booking");
  console.log(await resp1.json());
})


//passing headers


test("API Testing Get Practice 1 using header", async () => {
  const resp1 = await apiContext.get("/booking");
  console.log(await resp1.json());
});
//for this test pass base url in config file
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

//passing path param
test("API Testing Get Practice 1 using path parameter", async ({ request }) => {
  const resp1 = await request.get("https://restful-booker.herokuapp.com/booking/150");

  // Check if the response is OK before parsing JSON
  expect(resp1.status()).toBe(200); // This will fail if booking doesn't exist
  expect(resp1.ok()).toBeTruthy()
  // Parse JSON only if status is 200
  const data = await resp1.json();
  console.log(data);

  // Validate response structure
  expect(data).toMatchObject({
    firstname: 'John',
    lastname: 'Smith',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  });

  expect(data.firstname).toEqual('John')
});


//passing quary parameter
test("API Testing Get Practice 1  using quary parameter ", async ({ request }) => {
  const resp1 = await request.get("https://restful-booker.herokuapp.com/booking?firstname=John&lastname=Smith");
  const data = await resp1.json();
  console.log(data);

});

test("API Testing Get Practice 2 using quary parameter", async ({ request }) => {
  const resp1 = await request.get("https://restful-booker.herokuapp.com/booking", {
    params: {
      firstname: "John",
      lastname: "Smith"
    }
  });
  const data = await resp1.json();
  console.log(data);
});

test("API with UI verification using network tap in UI", async ({ request, page }) => {
    // Fetch API data
    const resp2 = await request.get("https://api.demoblaze.com/entries");
    const jsonresp2 = await resp2.json();
    
    // Log the title of the first item
    console.log(jsonresp2.Items[0].title);

    // Go to the website
    await page.goto("https://www.demoblaze.com/");

    // Verify the link text on the page matches API data
    await expect(
        page.getByRole('link', { name: 'Samsung galaxy s6' })
    ).toHaveText(jsonresp2.Items[0].title);
});

