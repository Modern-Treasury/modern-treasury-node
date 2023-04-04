// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource connections', () => {
  test('list: only required params', async () => {
    const response = await modernTreasury.connections.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.connections.list({
      after_cursor: 'string',
      per_page: 0,
      vendor_customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      entity: 'string',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.connections.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.connections.list(
        {
          after_cursor: 'string',
          per_page: 0,
          vendor_customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          entity: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
