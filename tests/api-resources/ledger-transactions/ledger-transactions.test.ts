// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ledgerTransactions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ledgerTransactions.create({
      ledger_entries: [
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      ],
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
    const response = await client.ledgerTransactions.create({
      ledger_entries: [
        {
          amount: 0,
          direction: 'credit',
          ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          available_balance_amount: { foo: 0 },
          effective_at: '2019-12-27T18:11:19.117Z',
          lock_version: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          pending_balance_amount: { foo: 0 },
          posted_balance_amount: { foo: 0 },
          show_resulting_ledger_account_balances: true,
        },
      ],
      description: 'description',
      effective_at: '2019-12-27T18:11:19.117Z',
      effective_date: '2019-12-27',
      external_id: 'external_id',
      ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ledgerable_type: 'expected_payment',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      status: 'archived',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.ledgerTransactions.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.ledgerTransactions.update('id');
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
      client.ledgerTransactions.update(
        'id',
        {
          description: 'description',
          effective_at: '2019-12-27T18:11:19.117Z',
          ledger_entries: [
            {
              amount: 0,
              direction: 'credit',
              ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              available_balance_amount: { foo: 0 },
              effective_at: '2019-12-27T18:11:19.117Z',
              lock_version: 0,
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              pending_balance_amount: { foo: 0 },
              posted_balance_amount: { foo: 0 },
              show_resulting_ledger_account_balances: true,
            },
          ],
          ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ledgerable_type: 'expected_payment',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          status: 'archived',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.ledgerTransactions.list();
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
      client.ledgerTransactions.list(
        {
          id: ['string'],
          after_cursor: 'after_cursor',
          amount: { eq: 0, gt: 0, gte: 0, lt: 0, lte: 0 },
          effective_at: { foo: '2019-12-27T18:11:19.117Z' },
          effective_date: { foo: '2019-12-27T18:11:19.117Z' },
          external_id: 'external_id',
          ledger_account_category_id: 'ledger_account_category_id',
          ledger_account_id: 'ledger_account_id',
          ledger_account_settlement_id: 'ledger_account_settlement_id',
          ledger_id: 'ledger_id',
          ledgerable_id: 'ledgerable_id',
          ledgerable_type: 'expected_payment',
          metadata: { foo: 'string' },
          order_by: { created_at: 'asc', effective_at: 'asc' },
          partially_posts_ledger_transaction_id: 'partially_posts_ledger_transaction_id',
          per_page: 0,
          posted_at: { foo: '2019-12-27T18:11:19.117Z' },
          reverses_ledger_transaction_id: 'reverses_ledger_transaction_id',
          status: 'pending',
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('createPartialPost: only required params', async () => {
    const responsePromise = client.ledgerTransactions.createPartialPost('id', {
      posted_ledger_entries: [
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPartialPost: required and optional params', async () => {
    const response = await client.ledgerTransactions.createPartialPost('id', {
      posted_ledger_entries: [
        {
          amount: 0,
          direction: 'credit',
          ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        },
      ],
      description: 'description',
      effective_at: '2019-12-27T18:11:19.117Z',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('createReversal', async () => {
    const responsePromise = client.ledgerTransactions.createReversal('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createReversal: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ledgerTransactions.createReversal(
        'id',
        {
          description: 'description',
          effective_at: '2019-12-27T18:11:19.117Z',
          external_id: 'external_id',
          ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ledgerable_type: 'expected_payment',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          status: 'archived',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
