import { test,request,expect } from "@playwright/test";
import apiJson from "../../testdata/testjsondata/apitestdata.json";

test("API Testing - Pass Request Body from JSON File for post call ", async ({ request }) => {
    const resp1 = await request.post("https://restful-booker.herokuapp.com/booking", {
        data: apiJson.postcalldata
    });

    const jsonResp1 = await resp1.json();
    console.log(jsonResp1);

    expect(jsonResp1.booking).toMatchObject(apiJson.postcalldata)
  expect(jsonResp1.booking.additionalneeds).toEqual(apiJson.postcalldata.additionalneeds)
});

test("API Testing - Pass Request Body from JSON File for put call ", async ({ request }) => {
   const resp1 = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
            "Content-Type": "application/json"
        },
        data: apiJson.putcalldata
    });

     console.log(await resp1.text()); 
    const resp = await resp1.json();
    console.log(resp);
    
    expect(resp).toMatchObject( apiJson.putcalldata)
  expect(resp.firstname).toEqual(apiJson.putcalldata.firstname)
});
