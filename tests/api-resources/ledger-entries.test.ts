// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledgerEntries', () => {
  test('retrieve', async () => {
    const response = await modernTreasury.ledgerEntries.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEntries.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEntries.retrieve(
        'string',
        { show_balances: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.ledgerEntries.list();
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
          as_of_lock_version: 0,
          direction: 'credit',
          effective_at: { foo: 'string' },
          effective_date: { foo: '2019-12-27' },
          id: { foo: 'string' },
          ledger_account_category_id: 'string',
          ledger_account_id: 'string',
          ledger_account_lock_version: { foo: 0 },
          ledger_account_statement_id: 'string',
          ledger_transaction_id: 'string',
          order_by: { created_at: 'asc', effective_at: 'asc' },
          per_page: 0,
          show_balances: true,
          show_deleted: true,
          status: 'pending',
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
