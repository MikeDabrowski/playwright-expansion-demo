import { test, expect } from '@playwright/test';


test.setTimeout(60000);
test('Minimal flow', async ({ page }): Promise<any> => {

  expect(true).toBe(true);
});
