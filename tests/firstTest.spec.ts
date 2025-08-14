

import {test} from '@playwright/test'

test('the first test', async({page})=> {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})

test('the first test', async({page})=> {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('DatePicker').click()

})

/*test.describe ('test suite 1',()=> {

    test ('the first test', ()=> {


   })
    
})*/