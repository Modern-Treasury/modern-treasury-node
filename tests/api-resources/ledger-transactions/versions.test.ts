// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource versions', () => {
  test('list: only required params', async () => {
    const response = await modernTreasury.ledgerTransactions.versions.list('string');
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.ledgerTransactions.versions.list('string', {
      after_cursor: 'string',
      per_page: 0,
      created_at: { foo: '2019-12-27T18:11:19.117Z' },
      version: { foo: 0 },
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.versions.list('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.versions.list(
        'string',
        {
          after_cursor: 'string',
          per_page: 0,
          created_at: { foo: '2019-12-27T18:11:19.117Z' },
          version: { foo: 0 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('versions: only required params', async () => {
    const response = await modernTreasury.ledgerTransactions.versions.versions('string');
  });

  test('versions: required and optional params', async () => {
    const response = await modernTreasury.ledgerTransactions.versions.versions('string', {
      after_cursor: 'string',
      per_page: 0,
      created_at: { foo: '2019-12-27T18:11:19.117Z' },
      version: { foo: 0 },
    });
  });

  test('versions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.versions.versions('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('versions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.versions.versions(
        'string',
        {
          after_cursor: 'string',
          per_page: 0,
          created_at: { foo: '2019-12-27T18:11:19.117Z' },
          version: { foo: 0 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
