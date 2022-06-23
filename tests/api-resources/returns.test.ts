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
      code: '901',
      reason: 'string',
      date_of_death: '2019-12-27',
      additional_information: 'string',
      returnable_type: 'incoming_payment_detail',
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

  test('list: only required params', async () => {
    const response = await modernTreasury.returns.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.returns.list({
      after_cursor: 'string',
      per_page: 0,
      internal_account_id: 'string',
      counterparty_id: 'string',
      returnable_id: 'string',
      returnable_type: 'incoming_payment_detail',
    });
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
          per_page: 0,
          internal_account_id: 'string',
          counterparty_id: 'string',
          returnable_id: 'string',
          returnable_type: 'incoming_payment_detail',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
