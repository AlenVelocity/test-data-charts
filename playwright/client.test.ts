import { test } from '@playwright/test'

test.setTimeout(120000)

test('go to /', async ({ page }) => {
    await page.goto('/')

    await page.waitForSelector(`text=Chart`)
})

test('change graph type', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector(`text=Type`)
    await page.click(`text=Type`)
    await page.waitForSelector(`text=Bar`)
    await page.click(`text=Bar`)
})
