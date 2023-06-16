// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource returns', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.returns.create({
      returnable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      returnable_type: 'incoming_payment_detail',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.returns.create({
      returnable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      returnable_type: 'incoming_payment_detail',
      additional_information: 'string',
      code: '901',
      date_of_death: '2019-12-27',
      reason: 'string',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.returns.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.returns.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.returns.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.returns.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.returns.list(
        {
          after_cursor: 'string',
          counterparty_id: 'string',
          internal_account_id: 'string',
          per_page: 0,
          returnable_id: 'string',
          returnable_type: 'incoming_payment_detail',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
