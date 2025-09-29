// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lineItems', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.lineItems.retrieve('id', {
      itemizable_type: 'expected_payments',
      itemizable_id: 'itemizable_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.lineItems.retrieve('id', {
      itemizable_type: 'expected_payments',
      itemizable_id: 'itemizable_id',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.lineItems.update('id', {
      itemizable_type: 'expected_payments',
      itemizable_id: 'itemizable_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.lineItems.update('id', {
      itemizable_type: 'expected_payments',
      itemizable_id: 'itemizable_id',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  // Prism is broken in this case
  test.skip('list: only required params', async () => {
    const responsePromise = client.lineItems.list('itemizable_id', { itemizable_type: 'expected_payments' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism is broken in this case
  test.skip('list: required and optional params', async () => {
    const response = await client.lineItems.list('itemizable_id', {
      itemizable_type: 'expected_payments',
      after_cursor: 'after_cursor',
      per_page: 0,
    });
  });
});
