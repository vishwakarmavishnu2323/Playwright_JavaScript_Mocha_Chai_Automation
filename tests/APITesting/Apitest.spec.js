import { test, request,expect } from "@playwright/test";

test("Get users", async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

let userId;
test("Create user", async ({ request }) => {

    await request.post('https://reqres.in/api/users',
        {
            data: {"name": "kumar", "job": "trainer" },
            headers: {"Accept": "application/json" }
        });
console.log(await response.json());
    expect(response.status()).toBe(201);


    let res=await response.json()
    userId=res.id


});

test("update user", async ({ request }) => {

    await request.put('https://reqres.in/api/users/'+userId,
        {
            data: {"name": "kumar", "job": "engineer" },
            headers: {"Accept": "application/json" }
        });
   console.log(await response.json());
    expect(response.status()).toBe(200);


});

test("delete user", async ({ request }) => {

   const response= await request.delete('https://reqres.in/api/users/'+userId)
    
    expect(response.status()).toBe(204);

})
