// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource virtualAccounts', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.virtualAccounts.create({
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.virtualAccounts.create({
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'string',
      account_details: [
        { account_number: 'string', account_number_type: 'clabe' },
        { account_number: 'string', account_number_type: 'clabe' },
        { account_number: 'string', account_number_type: 'clabe' },
      ],
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      credit_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      debit_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'string',
      metadata: { foo: 'string' },
      routing_details: [
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
      ],
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.virtualAccounts.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const response = await modernTreasury.virtualAccounts.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.update(
        'string',
        {
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { foo: 'string' },
          name: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.virtualAccounts.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.virtualAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.list(
        {
          after_cursor: 'string',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { foo: 'string' },
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const response = await modernTreasury.virtualAccounts.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
