import { test, expect } from '@playwright/test';

test.describe('Navigation 1', { tag: '@nightly' }, () => {
  test.setTimeout(120000);

  test('Navigation 1-1', async () => {
    expect(true).toBe(true);
  });

  test('Navigation 1-2', async () => {
    expect(true).toBe(true);
  });

  test('Navigation 1-3', async () => {
    expect(true).toBe(true);
  });

});
