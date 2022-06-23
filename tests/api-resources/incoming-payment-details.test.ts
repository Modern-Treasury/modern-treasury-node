// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource incoming_payment_details', () => {
  test('retrieve', async () => {
    const response = await modernTreasury.incomingPaymentDetails.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.incomingPaymentDetails.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await modernTreasury.incomingPaymentDetails.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.incomingPaymentDetails.update('string', {
      metadata: { foo: 'string' },
    });
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.incomingPaymentDetails.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.incomingPaymentDetails.update(
        'string',
        { metadata: { foo: 'string' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.incomingPaymentDetails.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.incomingPaymentDetails.list({
      after_cursor: 'string',
      per_page: 0,
      direction: 'credit',
      status: 'completed',
      type: 'ach',
      as_of_date_start: '2019-12-27',
      as_of_date_end: '2019-12-27',
      metadata: { foo: 'string' },
      virtual_account_id: 'string',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.incomingPaymentDetails.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.incomingPaymentDetails.list(
        {
          after_cursor: 'string',
          per_page: 0,
          direction: 'credit',
          status: 'completed',
          type: 'ach',
          as_of_date_start: '2019-12-27',
          as_of_date_end: '2019-12-27',
          metadata: { foo: 'string' },
          virtual_account_id: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
