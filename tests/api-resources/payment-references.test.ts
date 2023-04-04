// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource payment_references', () => {
  test('list: only required params', async () => {
    const response = await modernTreasury.paymentReferences.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.paymentReferences.list({
      after_cursor: 'string',
      per_page: 0,
      referenceable_id: 'string',
      referenceable_type: 'payment_order',
      reference_number: 'string',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.paymentReferences.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentReferences.list(
        {
          after_cursor: 'string',
          per_page: 0,
          referenceable_id: 'string',
          referenceable_type: 'payment_order',
          reference_number: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retireve', async () => {
    const response = await modernTreasury.paymentReferences.retireve('string');
  });

  test('retireve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentReferences.retireve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
