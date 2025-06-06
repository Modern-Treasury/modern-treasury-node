// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ledgerAccounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ledgerAccounts.create({
      currency: 'currency',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'name',
      normal_balance: 'credit',
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
    const response = await client.ledgerAccounts.create({
      currency: 'currency',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'name',
      normal_balance: 'credit',
      currency_exponent: 0,
      description: 'description',
      ledger_account_category_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ledgerable_type: 'counterparty',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.ledgerAccounts.retrieve('id');
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
    await expect(client.ledgerAccounts.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ledgerAccounts.retrieve(
        'id',
        {
          balances: {
            as_of_date: '2019-12-27',
            as_of_lock_version: 0,
            effective_at: '2019-12-27T18:11:19.117Z',
            effective_at_lower_bound: '2019-12-27T18:11:19.117Z',
            effective_at_upper_bound: '2019-12-27T18:11:19.117Z',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.ledgerAccounts.update('id');
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
    await expect(client.ledgerAccounts.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ledgerAccounts.update(
        'id',
        {
          description: 'description',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          name: 'name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.ledgerAccounts.list();
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
    await expect(client.ledgerAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ledgerAccounts.list(
        {
          id: ['string'],
          after_cursor: 'after_cursor',
          available_balance_amount: { eq: 0, gt: 0, gte: 0, lt: 0, lte: 0, not_eq: 0 },
          balances: {
            as_of_date: '2019-12-27',
            effective_at: '2019-12-27T18:11:19.117Z',
            effective_at_lower_bound: '2019-12-27T18:11:19.117Z',
            effective_at_upper_bound: '2019-12-27T18:11:19.117Z',
          },
          created_at: { foo: '2019-12-27T18:11:19.117Z' },
          currency: 'currency',
          external_id: 'external_id',
          ledger_account_category_id: 'ledger_account_category_id',
          ledger_id: 'ledger_id',
          metadata: { foo: 'string' },
          name: ['string'],
          pending_balance_amount: { eq: 0, gt: 0, gte: 0, lt: 0, lte: 0, not_eq: 0 },
          per_page: 0,
          posted_balance_amount: { eq: 0, gt: 0, gte: 0, lt: 0, lte: 0, not_eq: 0 },
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = client.ledgerAccounts.del('id');
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
    await expect(client.ledgerAccounts.del('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });
});
