// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource virtualAccounts', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.virtualAccounts.create({
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'string',
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
    const response = await modernTreasury.virtualAccounts.create({
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'string',
      account_details: [
        { account_number: 'string', account_number_type: 'clabe' },
        { account_number: 'string', account_number_type: 'clabe' },
        { account_number: 'string', account_number_type: 'clabe' },
      ],
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      credit_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      debit_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'string',
      metadata: { foo: 'string' },
      routing_details: [
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.virtualAccounts.retrieve('string');
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
      modernTreasury.virtualAccounts.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.virtualAccounts.update('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.update(
        'string',
        {
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { foo: 'string' },
          name: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.virtualAccounts.list();
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
    await expect(modernTreasury.virtualAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.virtualAccounts.list(
        {
          after_cursor: 'string',
          counterparty_id: 'string',
          internal_account_id: 'string',
          metadata: { foo: 'string' },
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = modernTreasury.virtualAccounts.del('string');
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
      modernTreasury.virtualAccounts.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
