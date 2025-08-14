import {test} from '@playwright/test'

test.beforeEach(async({page})=>{
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms', { exact: true }).click()
})

test.describe.only('suite1', ()=> {
  test.beforeEach(async({page})=>{
    await page.getByText('Charts', { exact: true }).click()
  })

  test('the first test', async({page})=> {
    await page.getByText('Forms', { exact: true }).click()
  })
  test('the first test2', async({page})=> {
    await page.getByText('Form Layouts').click()
  })

  test('navigate to datepicker page', async({page})=> {
    await page.getByText('Datepicker').click()
  })
})

test.describe('suite1', ()=> {
  test.beforeEach(async({page})=>{
    await page.getByText('Forms').click()
  })

  test('the first test1', async({page})=> {
    await page.getByText('Form Layouts').click()
  })
})

test('navigate to date picker page1', async({page})=> {
    await page.getByText('Datepicker').click()

})