// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accountDetails.create('account_id', {
      accounts_type: 'external_accounts',
      account_number: 'account_number',
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
    const response = await client.accountDetails.create('account_id', {
      accounts_type: 'external_accounts',
      account_number: 'account_number',
      account_number_type: 'au_number',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.accountDetails.retrieve('id', {
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
    const response = await client.accountDetails.retrieve('id', {
      accounts_type: 'external_accounts',
      account_id: 'account_id',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.accountDetails.list('account_id', { accounts_type: 'external_accounts' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.accountDetails.list('account_id', {
      accounts_type: 'external_accounts',
      after_cursor: 'after_cursor',
      per_page: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.accountDetails.delete('id', {
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
    const response = await client.accountDetails.delete('id', {
      accounts_type: 'external_accounts',
      account_id: 'account_id',
    });
  });
});
