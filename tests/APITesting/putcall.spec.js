
import { test,request,expect } from "@playwright/test";

test("API Testing - Put Call 1", async ({ request }) => {
    const resp1 = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
            "Content-Type": "application/json"
        },
        data: {
            firstname: "Vish",
            lastname: "Infinite",
            totalprice: 999,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Pan-Cakes"
        }
    });

     console.log(await resp1.text()); 
    const resp = await resp1.json();
    console.log(resp);
    expect(resp1.status()).toBe(200)
    expect(resp1.statusText()).toBe("OK")
    expect(resp1.ok()).toBeTruthy()
    expect(resp).toMatchObject({
            firstname: "Vish",
            lastname: "Infinite",
            totalprice: 999,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Pan-Cakes"
        
  })
  expect(resp.firstname).toEqual('Vish')

// Get call to just check the updated details.
const respGet = await request.get("https://restful-booker.herokuapp.com/booking/1");
console.log(await respGet.json());

expect(await respGet.json()).toMatchObject({
    firstname: "Vish",
    lastname: "Infinite",
    totalprice: 999,
    depositpaid: true,
    bookingdates: { checkin: "2018-01-01", checkout: "2019-01-01" },
    additionalneeds: "Pan-Cakes"
});

});