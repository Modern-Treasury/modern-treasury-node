// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource externalAccounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.externalAccounts.create({
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.externalAccounts.create({
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      account_details: [
        { account_number: 'account_number', account_number_type: 'au_number' },
        { account_number: 'account_number', account_number_type: 'au_number' },
        { account_number: 'account_number', account_number_type: 'au_number' },
      ],
      account_type: 'cash',
      contact_details: [
        { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
        { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
        { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
      ],
      ledger_account: {
        name: 'name',
        description: 'description',
        normal_balance: 'credit',
        ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        currency: 'currency',
        currency_exponent: 0,
        ledger_account_category_ids: [
          '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        ],
        ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        ledgerable_type: 'counterparty',
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      },
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      name: 'name',
      party_address: {
        line1: 'line1',
        line2: 'line2',
        locality: 'locality',
        region: 'region',
        postal_code: 'postal_code',
        country: 'country',
      },
      party_identifier: 'party_identifier',
      party_name: 'party_name',
      party_type: 'business',
      plaid_processor_token: 'plaid_processor_token',
      routing_details: [
        { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
        { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.externalAccounts.retrieve('id');
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
      client.externalAccounts.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.externalAccounts.update('id');
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
    await expect(client.externalAccounts.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalAccounts.update(
        'id',
        {
          account_type: 'cash',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { foo: 'string' },
          name: 'name',
          party_address: {
            line1: 'line1',
            line2: 'line2',
            locality: 'locality',
            region: 'region',
            postal_code: 'postal_code',
            country: 'country',
          },
          party_name: 'party_name',
          party_type: 'business',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.externalAccounts.list();
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
    await expect(client.externalAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalAccounts.list(
        {
          after_cursor: 'after_cursor',
          counterparty_id: 'counterparty_id',
          metadata: { foo: 'string' },
          party_name: 'party_name',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = client.externalAccounts.del('id');
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
    await expect(client.externalAccounts.del('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('completeVerification', async () => {
    const responsePromise = client.externalAccounts.completeVerification('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('completeVerification: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalAccounts.completeVerification('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('completeVerification: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalAccounts.completeVerification(
        'id',
        { amounts: [2, 4] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('verify: only required params', async () => {
    const responsePromise = client.externalAccounts.verify('id', {
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payment_type: 'ach',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verify: required and optional params', async () => {
    const response = await client.externalAccounts.verify('id', {
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payment_type: 'ach',
      currency: 'AED',
      fallback_type: 'ach',
      priority: 'high',
    });
  });
});
