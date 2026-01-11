//const { test, expect } =require('@playwright/test');
import { test, expect } from '@playwright/test';

test('test1',async({page})=>{
    //page is fixture in that multiple functions
 
       expect(20).toBe(20)
})
test.skip('test2',async({page})=>{
    
         expect(20).toBe(20)
})
/*
test.only('test3',async({page})=>{
 
        expect("vishnu vishwakarma").toContain("vishnu")
        expect(true).toBeTruthy()
        expect("vishnu vishwakrma".includes("vishnu")).toBeTruthy()
})*/

test('test4',async({page})=>{
    
      await page.goto('https://www.google.com/') 

      const url=page.url()
      console.log(url)

      const title=page.title()
      console.log("url is:"+title)

      await expect(page).toHaveURL('https://www.google.com/')
      await expect(page).toHaveTitle("Google")

})