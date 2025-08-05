// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource internalAccounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.internalAccounts.create({
      connection_id: 'connection_id',
      currency: 'USD',
      name: 'name',
      party_name: 'party_name',
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
    const response = await client.internalAccounts.create({
      connection_id: 'connection_id',
      currency: 'USD',
      name: 'name',
      party_name: 'party_name',
      account_capabilities: [
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          created_at: '2019-12-27T18:11:19.117Z',
          direction: 'credit',
          discarded_at: '2019-12-27T18:11:19.117Z',
          identifier: 'identifier',
          live_mode: true,
          object: 'object',
          payment_type: 'ach',
          updated_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      account_type: 'checking',
      counterparty_id: 'counterparty_id',
      legal_entity_id: 'legal_entity_id',
      parent_account_id: 'parent_account_id',
      party_address: {
        country: 'country',
        line1: 'line1',
        locality: 'locality',
        postal_code: 'postal_code',
        region: 'region',
        line2: 'line2',
      },
      vendor_attributes: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.internalAccounts.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.internalAccounts.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.internalAccounts.update(
        'id',
        {
          counterparty_id: 'counterparty_id',
          ledger_account_id: 'ledger_account_id',
          metadata: { foo: 'string' },
          name: 'name',
          parent_account_id: 'parent_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.internalAccounts.list();
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
      client.internalAccounts.list(
        {
          after_cursor: 'after_cursor',
          counterparty_id: 'counterparty_id',
          currency: 'AED',
          legal_entity_id: 'legal_entity_id',
          metadata: { foo: 'string' },
          payment_direction: 'credit',
          payment_type: 'ach',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('updateAccountCapability: only required params', async () => {
    const responsePromise = client.internalAccounts.updateAccountCapability('id', {
      internal_account_id: 'internal_account_id',
      identifier: 'identifier',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateAccountCapability: required and optional params', async () => {
    const response = await client.internalAccounts.updateAccountCapability('id', {
      internal_account_id: 'internal_account_id',
      identifier: 'identifier',
    });
  });
});
