// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledgerEventHandlers', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.ledgerEventHandlers.create({
      ledger_transaction_template: {
        description: 'string',
        effective_at: 'string',
        ledger_entries: [
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
        ],
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      },
      name: 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerEventHandlers.create({
      ledger_transaction_template: {
        description: 'string',
        effective_at: 'string',
        ledger_entries: [
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
        ],
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      },
      name: 'string',
      conditions: { field: 'string', operator: 'string', value: 'string' },
      description: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.ledgerEventHandlers.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.ledgerEventHandlers.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.list(
        {
          after_cursor: 'string',
          created_at: { foo: '2019-12-27T18:11:19.117Z' },
          metadata: { foo: 'string' },
          name: 'string',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const response = await modernTreasury.ledgerEventHandlers.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});