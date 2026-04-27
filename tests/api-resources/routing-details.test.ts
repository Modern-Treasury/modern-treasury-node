// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routingDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.routingDetails.create('account_id', {
      accounts_type: 'external_accounts',
      routing_number: 'routing_number',
      routing_number_type: 'aba',
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
    const response = await client.routingDetails.create('account_id', {
      accounts_type: 'external_accounts',
      routing_number: 'routing_number',
      routing_number_type: 'aba',
      payment_type: 'ach',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.routingDetails.retrieve('id', {
      accounts_type: 'external_accounts',
      account_id: 'account_id',
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
    const response = await client.routingDetails.retrieve('id', {
      accounts_type: 'external_accounts',
      account_id: 'account_id',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.routingDetails.list('account_id', { accounts_type: 'external_accounts' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.routingDetails.list('account_id', {
      accounts_type: 'external_accounts',
      after_cursor: 'after_cursor',
      per_page: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.routingDetails.delete('id', {
      accounts_type: 'external_accounts',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.routingDetails.delete('id', {
      accounts_type: 'external_accounts',
      account_id: 'account_id',
    });
  });
});
