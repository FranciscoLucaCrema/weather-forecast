import { test, expect, type Page, chromium, Locator } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:5173/');
  });

  test.describe('Search forecast with enter', () => {
    test('1 day forecast', async ({page}) => {
        //create a new city input locator 
         await page.getByPlaceholder('Name city').click();
         await page.getByPlaceholder('Name city').fill('rosario');

         //start search
         await page.getByPlaceholder('Name city').press('Enter');
        
        //check right location
        await expect(page.getByText('Rosario')).toHaveText('Rosario');
    })
  })

  test.describe('search x days', () => {
    test('x day search', async({page}) => {
      //search x days
      let max = 7;
      for (var i = 1; i <= max; i++){
        //pick x days in the selector
        await page.locator('//*[@id="root"]/div/div[1]/div/select').selectOption(i.toString());
        //create a new city input locator
        await page.getByPlaceholder('Name city').click();
        await page.getByPlaceholder('Name city').fill('rosario');

        //start search
        await page.getByPlaceholder('Name city').press('Enter');  
        //check only one result
        await expect(page.locator(`//*[@id="root"]/div/div[2]/div[2]/div/section[${i.toString()}]`)).toBeVisible();
      }

    })

    test.describe('Theme toggle', () => {
      test('theme toggle working correctly', async({page}) => {
        //click on theme toggle button
        await page.locator('//span[@class="_switch_zehmk_7"]').click();
        //check the 
        await page.getByRole('main').isVisible();
      })
    })

    test.describe('search place title displays correctly', () => {
      test('place title displays correctly', async({page}) => {
        //make a search 
        //create a new city input locator
        await page.getByPlaceholder('Name city').click();
        await page.getByPlaceholder('Name city').fill('rosario');
        //start search
        await page.getByPlaceholder('Name city').press('Enter');
        
        //verify correct title content
        await page.getByTitle('Rosario').isVisible();
        await page.getByTitle('Argentina').isVisible();        
      })
    })

  })


  // test.describe('accesibility', () => {
  //   test('should not havve any automatically detectable accessibility issues', async ({page}) => {
  //     const accessibilityScanResults = await new AxeBuilder({page}).analyze();     

  //     expect(accessibilityScanResults.violations).toEqual([]);
  //   })
  // })


 
})
