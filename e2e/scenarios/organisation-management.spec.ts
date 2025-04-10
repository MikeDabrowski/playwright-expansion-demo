import { test, expect } from '@playwright/test';


test.setTimeout(60000);

test(
  'Organisation management 1',
  async () => {
    expect(true).toBe(true);
  },
);

test('Organisation management 2', async () => {
  expect(true).toBe(true);
});

test('Organisation management 3', async () => {
  expect(true).toBe(true);
});
