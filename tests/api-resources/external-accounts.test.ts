// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource external_accounts', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.externalAccounts.create({
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.externalAccounts.create({
      account_type: 'checking',
      party_type: 'business',
      party_address: {
        line1: 'string',
        line2: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      name: 'string',
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      account_details: [
        { account_number: 'string', account_number_type: 'iban' },
        { account_number: 'string', account_number_type: 'iban' },
        { account_number: 'string', account_number_type: 'iban' },
      ],
      routing_details: [
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
      ],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      party_name: 'string',
      party_identifier: 'string',
      plaid_processor_token: 'string',
      contact_details: [
        { contact_identifier: 'string', contact_identifier_type: 'email' },
        { contact_identifier: 'string', contact_identifier_type: 'email' },
        { contact_identifier: 'string', contact_identifier_type: 'email' },
      ],
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

  test('update: only required params', async () => {
    const response = await modernTreasury.externalAccounts.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.externalAccounts.update('string', {
      party_type: 'business',
      account_type: 'checking',
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'string',
      party_name: 'string',
      party_address: {
        line1: 'string',
        line2: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      metadata: { foo: 'string' },
    });
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
          party_type: 'business',
          account_type: 'checking',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'string',
          party_name: 'string',
          party_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          metadata: { foo: 'string' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.externalAccounts.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.externalAccounts.list({
      after_cursor: 'string',
      per_page: 0,
      party_name: 'string',
      counterparty_id: 'string',
      metadata: { foo: 'string' },
    });
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
          per_page: 0,
          party_name: 'string',
          counterparty_id: 'string',
          metadata: { foo: 'string' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('delete', async () => {
    const response = await modernTreasury.externalAccounts.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('complete_verification: only required params', async () => {
    const response = await modernTreasury.externalAccounts.completeVerification('string');
  });

  test('complete_verification: required and optional params', async () => {
    const response = await modernTreasury.externalAccounts.completeVerification('string', {
      amounts: [0, 0],
    });
  });

  test('complete_verification: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.completeVerification('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('complete_verification: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.externalAccounts.completeVerification(
        'string',
        { amounts: [0, 0] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('verify: only required params', async () => {
    const response = await modernTreasury.externalAccounts.verify('string', {
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payment_type: 'ach',
    });
  });

  test('verify: required and optional params', async () => {
    const response = await modernTreasury.externalAccounts.verify('string', {
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payment_type: 'ach',
      currency: 'AED',
    });
  });
});
