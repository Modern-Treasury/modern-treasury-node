// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource paymentFlows', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.paymentFlows.create({
      amount: 0,
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'string',
      direction: 'credit',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.paymentFlows.create({
      amount: 0,
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'string',
      direction: 'credit',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.paymentFlows.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentFlows.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentFlows.retrieve(
        'string',
        { 'Idempotency-Key': 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await modernTreasury.paymentFlows.update('string', { status: 'cancelled' });
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.paymentFlows.update('string', {
      status: 'cancelled',
      'Idempotency-Key': 'string',
    });
  });

  test('list', async () => {
    const response = await modernTreasury.paymentFlows.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.paymentFlows.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentFlows.list(
        {
          after_cursor: 'string',
          client_token: 'string',
          counterparty_id: 'string',
          originating_account_id: 'string',
          payment_order_id: 'string',
          per_page: 0,
          receiving_account_id: 'string',
          status: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
