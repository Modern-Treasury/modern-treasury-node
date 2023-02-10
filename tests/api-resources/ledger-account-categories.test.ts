// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledger_account_categories', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.create({
      name: 'string',
      currency: 'string',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      normal_balance: 'credit',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.create({
      name: 'string',
      description: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      currency: 'string',
      currency_exponent: 0,
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      normal_balance: 'credit',
    });
  });

  test('retrieve: only required params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.retrieve('string');
  });

  test('retrieve: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.retrieve('string', {
      balances: { as_of_date: '2019-12-27', effective_at: '2019-12-27T18:11:19.117Z' },
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.retrieve(
        'string',
        { balances: { as_of_date: '2019-12-27', effective_at: '2019-12-27T18:11:19.117Z' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.update('string', {
      name: 'string',
      description: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.update(
        'string',
        { name: 'string', description: 'string', metadata: { key: 'value', foo: 'bar', modern: 'treasury' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccountCategories.list({
      after_cursor: 'string',
      per_page: 0,
      metadata: { foo: 'string' },
      name: 'string',
      ledger_id: 'string',
      parent_ledger_account_category_id: 'string',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.list(
        {
          after_cursor: 'string',
          per_page: 0,
          metadata: { foo: 'string' },
          name: 'string',
          ledger_id: 'string',
          parent_ledger_account_category_id: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('delete', async () => {
    const response = await modernTreasury.ledgerAccountCategories.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('add_ledger_account', async () => {
    const response = await modernTreasury.ledgerAccountCategories.addLedgerAccount('string', 'string');
  });

  test('add_ledger_account: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.addLedgerAccount('string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('add_nested_category', async () => {
    const response = await modernTreasury.ledgerAccountCategories.addNestedCategory('string', 'string');
  });

  test('add_nested_category: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.addNestedCategory('string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('remove_ledger_account', async () => {
    const response = await modernTreasury.ledgerAccountCategories.removeLedgerAccount('string', 'string');
  });

  test('remove_ledger_account: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.removeLedgerAccount('string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('remove_nested_category', async () => {
    const response = await modernTreasury.ledgerAccountCategories.removeNestedCategory('string', 'string');
  });

  test('remove_nested_category: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountCategories.removeNestedCategory('string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
