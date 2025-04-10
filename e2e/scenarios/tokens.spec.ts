import { test, expect } from '@playwright/test';

test(
  'Test 0',

  async () => {
    expect(true).toBe(true);
  },
);

test.describe('When tokens expire while in the app', () => {

  test('Test1', async () => {
    expect(true).toBe(true);
  });

  test('Test2', async () => {
    expect(true).toBe(true);
  });
});
