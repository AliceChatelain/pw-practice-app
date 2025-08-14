

import {test} from '@playwright/test'

test('the first test', async({page})=> {
    await page.goto('http://localhost:4200/')

})

/*test.describe ('test suite 1',()=> {

    test ('the first test', ()=> {


   })
    
})*/