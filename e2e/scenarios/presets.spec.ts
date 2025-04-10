import { test, expect } from '@playwright/test';


test.setTimeout(60000);

test.describe('Sidepanels', () => {
  test('Test1', async () => {
    expect(true).toBe(true);
  });
});

test('Test1', async () => {
  expect(true).toBe(true);
});
test('Test2', async () => {
  expect(true).toBe(true);
});
test('Test3', async () => {
  expect(true).toBe(true);
});

test.describe('Apply', () => {
  test('Test1', async () => {
    expect(true).toBe(true);
  });
  test('Test2', async () => {
    expect(true).toBe(true);
  });
  test('Test3', async () => {
    expect(true).toBe(true);
  });
});
