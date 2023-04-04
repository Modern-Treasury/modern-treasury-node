// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource routing_details', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.routingDetails.create('external_accounts', 'string', {
      payment_type: 'ach',
      routing_number: 'string',
      routing_number_type: 'aba',
      'Idempotency-Key': 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.routingDetails.create('external_accounts', 'string', {
      payment_type: 'ach',
      routing_number: 'string',
      routing_number_type: 'aba',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.routingDetails.retrieve('external_accounts', 'string', 'string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.routingDetails.retrieve('external_accounts', 'string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.routingDetails.list('external_accounts', 'string');
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.routingDetails.list('external_accounts', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.routingDetails.list(
        'external_accounts',
        'string',
        { after_cursor: 'string', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('delete', async () => {
    const response = await modernTreasury.routingDetails.del('external_accounts', 'string', 'string');
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.routingDetails.del('external_accounts', 'string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
