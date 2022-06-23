// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource transactions', () => {
  test('retrieve', async () => {
    const response = await modernTreasury.transactions.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.transactions.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await modernTreasury.transactions.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.transactions.update('string', { metadata: { foo: 'string' } });
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.transactions.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.transactions.update(
        'string',
        { metadata: { foo: 'string' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.transactions.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.transactions.list({
      after_cursor: 'string',
      per_page: 0,
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      virtual_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      posted: true,
      as_of_date_start: '2019-12-27',
      as_of_date_end: '2019-12-27',
      direction: 'string',
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payment_type: 'string',
      transactable_type: 'string',
      description: 'string',
      metadata: { foo: 'string' },
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.transactions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.transactions.list(
        {
          after_cursor: 'string',
          per_page: 0,
          internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          virtual_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          posted: true,
          as_of_date_start: '2019-12-27',
          as_of_date_end: '2019-12-27',
          direction: 'string',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          payment_type: 'string',
          transactable_type: 'string',
          description: 'string',
          metadata: { foo: 'string' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
