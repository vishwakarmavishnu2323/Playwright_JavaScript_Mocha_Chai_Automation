// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config();
const tag = process.env.TAG;

// Load environment file
const env = process.env.TEST_ENV || 'dev';


// Load correct .env file dynamically
dotenv.config({
  path: path.resolve(`env-files/.env.${env}`)
});

/*  or
dotenv.config({
  path: `env-files/.env.${process.env.TEST_ENV || 'dev'}`
});
*/



/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

   // Global test timeout
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },
//Skip regression tests
   grepInvert: /@reg/,

 // Run only sanity tests
 // grep: /@sanity/,

 // run tests dynamic using tag
 grep: tag ? new RegExp(tag) : undefined,

 //method1
//run auth json globally//You can run login automatically before tests.
 //globalSetup: require.resolve('./global-setup'),

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  //retries:2,  //Rerun failed test cases
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  //workers: 4 ,  // Execute 4 test cases in parallel

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  /*reporter: 'html', */

reporter: [['list'],
              ['html',{open:'always'}],
              ['junit',{outputFile:'results.xml'}],
              ['json',{outputFile:'report.json'}],
              ['allure-playwright',{outputFolder:'allure-results'}],

],
//reporter:[['allure-playwright',{outputFolder:'allure-results'}]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
    // screenshot: "only-on-failure",  //Screenshot for failed tests
      //video: "retain-on-failure"//video for failed tests
      trace: 'on',
     screenshot: "on", //Screenshot for failed & passed tests
     video: "on",  //video for failed & passed tests
     //viewport: null  //maximize browser window
     viewport:{width:1920,height:1080},
     headless: true,
     baseURL: process.env.BASE_URL,
     //storageState: '.auth/user.json', // applied to all tests//method1
     
  },

 


//method 2
/*  //run auth json globally//You can run login automatically before tests.
  projects: [
    // 1. Setup project (runs login and saves storage state)
    {
      name: 'setup',
      testMatch: /auth\.setup\.js/,
    },

    // 2. Chromium //// Project with auth login
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
      dependencies: ['setup'],
    },

     // Project without auth login
    {
      name: 'chromium-noauth',
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },

    // 3. Firefox
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: '.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // 4. WebKit (Safari engine)
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: '.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
*/

/*  method 3 for disable auth
export default defineConfig({
  use: {
    storageState: '.auth/user.json',
  },

  projects: [
    {
      name: 'auth-tests',
    },
    {
      name: 'no-auth-tests',
      grep: /@noauth/,
      use: {
        storageState: undefined,
      },
    },
  ],
});
*/


 
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      //viewport:{width:1920,height:1080},
      // headless: true,
       },  
    },
     

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

