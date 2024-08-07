// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource expectedPayments', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.expectedPayments.create({
      amount_lower_bound: 0,
      amount_upper_bound: 0,
      direction: 'credit',
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await modernTreasury.expectedPayments.create({
      amount_lower_bound: 0,
      amount_upper_bound: 0,
      direction: 'credit',
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'AED',
      date_lower_bound: '2019-12-27',
      date_upper_bound: '2019-12-27',
      description: 'description',
      ledger_transaction: {
        description: 'description',
        status: 'archived',
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        effective_at: '2019-12-27T18:11:19.117Z',
        effective_date: '2019-12-27',
        ledger_entries: [
          {
            amount: 0,
            direction: 'credit',
            ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            lock_version: 0,
            pending_balance_amount: { foo: 0 },
            posted_balance_amount: { foo: 0 },
            available_balance_amount: { foo: 0 },
            show_resulting_ledger_account_balances: true,
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          {
            amount: 0,
            direction: 'credit',
            ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            lock_version: 0,
            pending_balance_amount: { foo: 0 },
            posted_balance_amount: { foo: 0 },
            available_balance_amount: { foo: 0 },
            show_resulting_ledger_account_balances: true,
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          {
            amount: 0,
            direction: 'credit',
            ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            lock_version: 0,
            pending_balance_amount: { foo: 0 },
            posted_balance_amount: { foo: 0 },
            available_balance_amount: { foo: 0 },
            show_resulting_ledger_account_balances: true,
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
        ],
        external_id: 'external_id',
        ledgerable_type: 'expected_payment',
        ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      ledger_transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      line_items: [
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'description',
          accounting_category_id: 'accounting_category_id',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'description',
          accounting_category_id: 'accounting_category_id',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'description',
          accounting_category_id: 'accounting_category_id',
        },
      ],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      reconciliation_filters: {},
      reconciliation_groups: {},
      reconciliation_rule_variables: [{ foo: 'string' }, { foo: 'string' }, { foo: 'string' }],
      remittance_information: 'remittance_information',
      statement_descriptor: 'statement_descriptor',
      type: 'ach',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.expectedPayments.retrieve('id');
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
      modernTreasury.expectedPayments.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.expectedPayments.update('id');
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
      modernTreasury.expectedPayments.update('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.expectedPayments.update(
        'id',
        {
          amount_lower_bound: 0,
          amount_upper_bound: 0,
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'AED',
          date_lower_bound: '2019-12-27',
          date_upper_bound: '2019-12-27',
          description: 'description',
          direction: 'credit',
          internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          reconciliation_filters: {},
          reconciliation_groups: {},
          reconciliation_rule_variables: [{ foo: 'string' }, { foo: 'string' }, { foo: 'string' }],
          remittance_information: 'remittance_information',
          statement_descriptor: 'statement_descriptor',
          status: 'reconciled',
          type: 'ach',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.expectedPayments.list();
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
    await expect(modernTreasury.expectedPayments.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.expectedPayments.list(
        {
          after_cursor: 'after_cursor',
          counterparty_id: 'counterparty_id',
          created_at_lower_bound: '2019-12-27T18:11:19.117Z',
          created_at_upper_bound: '2019-12-27T18:11:19.117Z',
          direction: 'credit',
          internal_account_id: 'internal_account_id',
          metadata: { foo: 'string' },
          per_page: 0,
          status: 'archived',
          type: 'ach',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = modernTreasury.expectedPayments.del('id');
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
      modernTreasury.expectedPayments.del('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
