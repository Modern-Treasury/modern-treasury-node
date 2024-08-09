// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routingDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.routingDetails.create('external_accounts', 'account_id', {
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
    const response = await client.routingDetails.create('external_accounts', 'account_id', {
      routing_number: 'routing_number',
      routing_number_type: 'aba',
      payment_type: 'ach',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.routingDetails.retrieve('external_accounts', 'account_id', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.routingDetails.retrieve('external_accounts', 'account_id', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.routingDetails.list('external_accounts', 'account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.routingDetails.list('external_accounts', 'account_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.routingDetails.list(
        'external_accounts',
        'account_id',
        { after_cursor: 'after_cursor', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = client.routingDetails.del('external_accounts', 'account_id', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.routingDetails.del('external_accounts', 'account_id', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
