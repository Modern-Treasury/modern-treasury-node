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
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          account_number: 'string',
          account_number_type: 'clabe',
          account_number_safe: 'string',
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          account_number: 'string',
          account_number_type: 'clabe',
          account_number_safe: 'string',
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          account_number: 'string',
          account_number_type: 'clabe',
          account_number_safe: 'string',
        },
      ],
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      credit_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      debit_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'string',
      metadata: { foo: 'string' },
      routing_details: [
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          routing_number: 'string',
          routing_number_type: 'aba',
          payment_type: 'ach',
          bank_name: 'string',
          bank_address: {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            object: 'string',
            live_mode: true,
            created_at: '2019-12-27T18:11:19.117Z',
            updated_at: '2019-12-27T18:11:19.117Z',
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          routing_number: 'string',
          routing_number_type: 'aba',
          payment_type: 'ach',
          bank_name: 'string',
          bank_address: {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            object: 'string',
            live_mode: true,
            created_at: '2019-12-27T18:11:19.117Z',
            updated_at: '2019-12-27T18:11:19.117Z',
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          routing_number: 'string',
          routing_number_type: 'aba',
          payment_type: 'ach',
          bank_name: 'string',
          bank_address: {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            object: 'string',
            live_mode: true,
            created_at: '2019-12-27T18:11:19.117Z',
            updated_at: '2019-12-27T18:11:19.117Z',
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
        },
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
