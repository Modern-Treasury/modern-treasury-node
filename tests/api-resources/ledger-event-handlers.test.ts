// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ledgerEventHandlers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ledgerEventHandlers.create({
      ledger_transaction_template: {
        description: 'My Ledger Transaction Template Description',
        effective_at: '{{ledgerable_event.custom_data.effective_at}}',
        ledger_entries: [
          { amount: 'amount', direction: 'direction', ledger_account_id: 'ledger_account_id' },
          { amount: 'amount', direction: 'direction', ledger_account_id: 'ledger_account_id' },
          { amount: 'amount', direction: 'direction', ledger_account_id: 'ledger_account_id' },
        ],
        status: 'posted',
      },
      name: 'name',
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
    const response = await client.ledgerEventHandlers.create({
      ledger_transaction_template: {
        description: 'My Ledger Transaction Template Description',
        effective_at: '{{ledgerable_event.custom_data.effective_at}}',
        ledger_entries: [
          { amount: 'amount', direction: 'direction', ledger_account_id: 'ledger_account_id' },
          { amount: 'amount', direction: 'direction', ledger_account_id: 'ledger_account_id' },
          { amount: 'amount', direction: 'direction', ledger_account_id: 'ledger_account_id' },
        ],
        status: 'posted',
      },
      name: 'name',
      conditions: { field: 'ledgerable_event.name', operator: 'equals', value: 'credit_card_swipe' },
      description: 'description',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      variables: {
        credit_account: {
          query: { field: 'name', operator: 'equals', value: 'my_credit_account' },
          type: 'ledger_account',
        },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.ledgerEventHandlers.retrieve('id');
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
      client.ledgerEventHandlers.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.ledgerEventHandlers.list();
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
    await expect(client.ledgerEventHandlers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ledgerEventHandlers.list(
        {
          after_cursor: 'after_cursor',
          created_at: { foo: '2019-12-27T18:11:19.117Z' },
          metadata: { foo: 'string' },
          name: 'name',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = client.ledgerEventHandlers.del('id');
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
    await expect(client.ledgerEventHandlers.del('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });
});
