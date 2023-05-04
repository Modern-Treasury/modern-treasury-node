// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource externalAccounts', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.externalAccounts.create({
      account_details: [
        { account_number: 'string' },
        { account_number: 'string' },
        { account_number: 'string' },
      ],
      account_type: 'cash',
      contact_details: [{}, {}, {}],
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      name: 'string',
      party_address: {},
      party_identifier: 'string',
      party_name: 'string',
      party_type: 'business',
      plaid_processor_token: 'string',
      routing_details: [
        { routing_number: 'string', routing_number_type: 'aba' },
        { routing_number: 'string', routing_number_type: 'aba' },
        { routing_number: 'string', routing_number_type: 'aba' },
      ],
      'Idempotency-Key': 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.externalAccounts.create({
      account_details: [
        { account_number: 'string', account_number_type: 'iban' },
        { account_number: 'string', account_number_type: 'iban' },
        { account_number: 'string', account_number_type: 'iban' },
      ],
      account_type: 'cash',
      contact_details: [
        { contact_identifier: 'string', contact_identifier_type: 'email' },
        { contact_identifier: 'string', contact_identifier_type: 'email' },
        { contact_identifier: 'string', contact_identifier_type: 'email' },
      ],
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      name: 'string',
      party_address: {
        line1: 'string',
        line2: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      party_identifier: 'string',
      party_name: 'string',
      party_type: 'business',
      plaid_processor_token: 'string',
      routing_details: [
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
      ],
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.externalAccounts.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const response = await modernTreasury.externalAccounts.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.update(
        'string',
        {
          account_type: 'cash',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { foo: 'string' },
          name: 'string',
          party_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          party_name: 'string',
          party_type: 'business',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.externalAccounts.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.externalAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.list(
        {
          after_cursor: 'string',
          counterparty_id: 'string',
          metadata: { foo: 'string' },
          party_name: 'string',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const response = await modernTreasury.externalAccounts.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('completeVerification', async () => {
    const response = await modernTreasury.externalAccounts.completeVerification('string');
  });

  test('completeVerification: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.completeVerification('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('completeVerification: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.completeVerification(
        'string',
        { amounts: [0, 0], 'Idempotency-Key': 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('verify: only required params', async () => {
    const response = await modernTreasury.externalAccounts.verify('string', {
      currency: 'AED',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payment_type: 'ach',
      'Idempotency-Key': 'string',
    });
  });

  test('verify: required and optional params', async () => {
    const response = await modernTreasury.externalAccounts.verify('string', {
      currency: 'AED',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payment_type: 'ach',
      'Idempotency-Key': 'string',
    });
  });
});
