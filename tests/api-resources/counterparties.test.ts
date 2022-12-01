// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource counterparties', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.counterparties.create({ name: 'string' });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.counterparties.create({
      name: 'string',
      accounts: [
        {
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
        },
        {
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
        },
        {
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
        },
      ],
      email: 'dev@stainlessapi.com',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      send_remittance_advice: true,
      accounting: { type: 'customer' },
      ledger_type: 'customer',
      taxpayer_identifier: 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.counterparties.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await modernTreasury.counterparties.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.counterparties.update('string', {
      name: 'string',
      email: 'dev@stainlessapi.com',
      metadata: { foo: 'string' },
      send_remittance_advice: true,
      taxpayer_identifier: 'string',
    });
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.update(
        'string',
        {
          name: 'string',
          email: 'dev@stainlessapi.com',
          metadata: { foo: 'string' },
          send_remittance_advice: true,
          taxpayer_identifier: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.counterparties.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.counterparties.list({
      after_cursor: 'string',
      per_page: 0,
      name: 'string',
      email: 'dev@stainlessapi.com',
      metadata: { foo: 'string' },
      created_at_lower_bound: '2019-12-27T18:11:19.117Z',
      created_at_upper_bound: '2019-12-27T18:11:19.117Z',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.counterparties.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.list(
        {
          after_cursor: 'string',
          per_page: 0,
          name: 'string',
          email: 'dev@stainlessapi.com',
          metadata: { foo: 'string' },
          created_at_lower_bound: '2019-12-27T18:11:19.117Z',
          created_at_upper_bound: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('delete', async () => {
    const response = await modernTreasury.counterparties.del('string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('collect_account: only required params', async () => {
    const response = await modernTreasury.counterparties.collectAccount('string', { direction: 'credit' });
  });

  test('collect_account: required and optional params', async () => {
    const response = await modernTreasury.counterparties.collectAccount('string', {
      direction: 'credit',
      send_email: true,
      fields: ['name', 'name', 'name'],
      custom_redirect: 'https://example.com',
    });
  });
});
