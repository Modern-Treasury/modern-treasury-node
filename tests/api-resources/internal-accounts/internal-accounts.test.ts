// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource internalAccounts', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.internalAccounts.create({
      connection_id: 'string',
      counterparty_id: 'string',
      currency: 'USD',
      entity_id: 'string',
      name: 'string',
      parent_account_id: 'string',
      party_address: {
        line1: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      party_name: 'string',
      'Idempotency-Key': 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.internalAccounts.create({
      connection_id: 'string',
      counterparty_id: 'string',
      currency: 'USD',
      entity_id: 'string',
      name: 'string',
      parent_account_id: 'string',
      party_address: {
        line1: 'string',
        line2: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      party_name: 'string',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.internalAccounts.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const response = await modernTreasury.internalAccounts.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.update(
        'string',
        {
          counterparty_id: 'string',
          metadata: { foo: 'string' },
          name: 'string',
          parent_account_id: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.internalAccounts.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.internalAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.list(
        {
          after_cursor: 'string',
          counterparty_id: 'string',
          currency: 'AED',
          metadata: { foo: 'string' },
          payment_direction: 'credit',
          payment_type: 'ach',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
