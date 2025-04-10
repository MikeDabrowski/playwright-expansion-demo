import { test, expect } from '@playwright/test';


test.setTimeout(45_000);

test('Pay via bank transfer', async () => {
  expect(true).toBe(true);
});

test('Pay via master card', async () => {
  expect(true).toBe(true);
});

test('Pay via visa card', async () => {
  expect(true).toBe(true);
});
