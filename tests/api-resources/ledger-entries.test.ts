// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledger_entries', () => {
  test('retrieve', async () => {
    const response = await modernTreasury.ledgerEntries.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEntries.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.ledgerEntries.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.ledgerEntries.list({
      after_cursor: 'string',
      per_page: 0,
      ledger_account_id: 'string',
      ledger_transaction_id: 'string',
      effective_date: { foo: '2019-12-27' },
      effective_at: { foo: 'string' },
      updated_at: { foo: '2019-12-27T18:11:19.117Z' },
      as_of_lock_version: 0,
      ledger_account_lock_version: { foo: 0 },
      ledger_account_category_id: 'string',
      show_deleted: true,
      direction: 'credit',
      status: 'pending',
      order_by: { created_at: 'asc', effective_at: 'asc' },
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.ledgerEntries.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEntries.list(
        {
          after_cursor: 'string',
          per_page: 0,
          ledger_account_id: 'string',
          ledger_transaction_id: 'string',
          effective_date: { foo: '2019-12-27' },
          effective_at: { foo: 'string' },
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
          as_of_lock_version: 0,
          ledger_account_lock_version: { foo: 0 },
          ledger_account_category_id: 'string',
          show_deleted: true,
          direction: 'credit',
          status: 'pending',
          order_by: { created_at: 'asc', effective_at: 'asc' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
