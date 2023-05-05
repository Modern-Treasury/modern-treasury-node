// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource counterparties', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.counterparties.create({
      accounting: {},
      accounts: [{}, {}, {}],
      email: 'dev@stainlessapi.com',
      ledger_type: 'customer',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      name: 'string',
      send_remittance_advice: true,
      taxpayer_identifier: 'string',
      'Idempotency-Key': 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.counterparties.create({
      accounting: { type: 'customer' },
      accounts: [
        {
          account_type: 'cash',
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
          account_type: 'cash',
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
          account_type: 'cash',
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
      ledger_type: 'customer',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      name: 'string',
      send_remittance_advice: true,
      taxpayer_identifier: 'string',
      'Idempotency-Key': 'string',
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

  test('update', async () => {
    const response = await modernTreasury.counterparties.update('string');
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
          email: 'dev@stainlessapi.com',
          metadata: { foo: 'string' },
          name: 'string',
          send_remittance_advice: true,
          taxpayer_identifier: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.counterparties.list();
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
          created_at_lower_bound: '2019-12-27T18:11:19.117Z',
          created_at_upper_bound: '2019-12-27T18:11:19.117Z',
          email: 'dev@stainlessapi.com',
          metadata: { foo: 'string' },
          name: 'string',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const response = await modernTreasury.counterparties.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('collectAccount: only required params', async () => {
    const response = await modernTreasury.counterparties.collectAccount('string', {
      custom_redirect: 'https://example.com',
      direction: 'credit',
      fields: ['name', 'name', 'name'],
      send_email: true,
      'Idempotency-Key': 'string',
    });
  });

  test('collectAccount: required and optional params', async () => {
    const response = await modernTreasury.counterparties.collectAccount('string', {
      custom_redirect: 'https://example.com',
      direction: 'credit',
      fields: ['name', 'name', 'name'],
      send_email: true,
      'Idempotency-Key': 'string',
    });
  });
});
