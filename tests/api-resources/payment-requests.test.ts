// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentRequests', () => {
  test('list', async () => {
    const responsePromise = client.paymentRequests.list();
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
      client.paymentRequests.list(
        {
          id: 'id',
          after_cursor: 'after_cursor',
          created_at_end: '2019-12-27T18:11:19.117Z',
          created_at_start: '2019-12-27T18:11:19.117Z',
          internal_account_id: 'internal_account_id',
          payment_type: 'wire',
          per_page: 0,
          status: 'approved',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = client.paymentRequests.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.paymentRequests.update('id', { status: 'approved' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.paymentRequests.update('id', { status: 'approved' });
  });

  test('simulate: only required params', async () => {
    const responsePromise = client.paymentRequests.simulate({
      amount: 0,
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      requesting_account_number: 'requesting_account_number',
      requesting_party_name: 'requesting_party_name',
      requesting_routing_number: 'requesting_routing_number',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('simulate: required and optional params', async () => {
    const response = await client.paymentRequests.simulate({
      amount: 0,
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      requesting_account_number: 'requesting_account_number',
      requesting_party_name: 'requesting_party_name',
      requesting_routing_number: 'requesting_routing_number',
      description: 'description',
    });
  });

  test('cancelSimulation: only required params', async () => {
    const responsePromise = client.paymentRequests.cancelSimulation('id', { status: 'cancelled' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelSimulation: required and optional params', async () => {
    const response = await client.paymentRequests.cancelSimulation('id', { status: 'cancelled' });
  });
});
