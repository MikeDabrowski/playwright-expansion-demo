import { expect, test } from '@playwright/test';

test.setTimeout(60000);

test(
  'Duplicate filenames in a zip',
  async ({}) => {

    expect(true).toBe(true);
  },
);

test(
  'Batch from ZIP with mixed pdfs',
  {},
  async ({}) => {

    expect(true).toBe(true);
  },
);

test.describe('cancellable zip', () => {
  test.beforeEach(
    async () => {

      expect(true).toBe(true);
    },
  );

  test(
    'Cancel ZIP batch',

    async ({}) => {

      expect(true).toBe(true);
    },
  );

  test(
    'Refresh Batch after managing its letters',

    async ({}) => {

      expect(true).toBe(true);
    },
  );

  test(
    '[#1167] Refresh Batch after managing its letters',

    async ({}) => {

      expect(true).toBe(true);
    },
  );
});
