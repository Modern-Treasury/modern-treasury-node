// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledger_accounts', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.ledgerAccounts.create({
      name: 'string',
      normal_balance: 'credit',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccounts.create({
      name: 'string',
      description: 'string',
      normal_balance: 'credit',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'string',
      currency_exponent: 0,
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('retrieve: only required params', async () => {
    const response = await modernTreasury.ledgerAccounts.retrieve('string');
  });

  test('retrieve: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccounts.retrieve('string', {
      balances: { as_of_date: '2019-12-27' },
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.retrieve(
        'string',
        { balances: { as_of_date: '2019-12-27' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await modernTreasury.ledgerAccounts.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccounts.update('string', {
      name: 'string',
      description: 'string',
      normal_balance: 'credit',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.update(
        'string',
        {
          name: 'string',
          description: 'string',
          normal_balance: 'credit',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.ledgerAccounts.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccounts.list({
      after_cursor: 'string',
      per_page: 0,
      metadata: { foo: 'string' },
      id: 'string',
      name: 'string',
      ledger_id: 'string',
      balances: { as_of_date: '2019-12-27' },
      updated_at: { foo: '2019-12-27T18:11:19.117Z' },
      ledger_account_category_id: 'string',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.ledgerAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.list(
        {
          after_cursor: 'string',
          per_page: 0,
          metadata: { foo: 'string' },
          id: 'string',
          name: 'string',
          ledger_id: 'string',
          balances: { as_of_date: '2019-12-27' },
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
          ledger_account_category_id: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('delete', async () => {
    const response = await modernTreasury.ledgerAccounts.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
