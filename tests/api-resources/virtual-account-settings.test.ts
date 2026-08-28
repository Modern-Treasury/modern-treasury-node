// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource virtualAccountSettings', () => {
  test('list', async () => {
    const responsePromise = client.virtualAccountSettings.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.virtualAccountSettings.list(
        {
          after_cursor: 'after_cursor',
          external_id: 'external_id',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('create: only required params', async () => {
    const responsePromise = client.virtualAccountSettings.create({
      allocation_type: 'allocation_type',
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.virtualAccountSettings.create({
      allocation_type: 'allocation_type',
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      allocation_identifier: 'allocation_identifier',
      allocation_length: 0,
      allocation_range_end: 'allocation_range_end',
      allocation_range_start: 'allocation_range_start',
      external_id: 'external_id',
      generated_allocation_identifier_length: 0,
    });
  });
});
