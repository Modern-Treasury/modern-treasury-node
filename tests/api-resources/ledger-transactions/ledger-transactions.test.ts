// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledgerTransactions', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.ledgerTransactions.create({
      effective_date: '2019-12-27',
      ledger_entries: [
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      ],
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerTransactions.create({
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
        },
      ],
      description: 'string',
      external_id: 'string',
      ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ledgerable_type: 'counterparty',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      status: 'archived',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.ledgerTransactions.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const response = await modernTreasury.ledgerTransactions.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.update(
        'string',
        {
          description: 'string',
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
            },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          status: 'archived',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.ledgerTransactions.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.list(
        {
          id: { foo: 'string' },
          after_cursor: 'string',
          effective_at: { foo: 'string' },
          effective_date: { foo: '2019-12-27T18:11:19.117Z' },
          external_id: 'string',
          ledger_account_category_id: 'string',
          ledger_account_id: 'string',
          ledger_id: 'string',
          ledgerable_id: 'string',
          ledgerable_type: 'counterparty',
          metadata: { foo: 'string' },
          order_by: { created_at: 'asc', effective_at: 'asc' },
          per_page: 0,
          posted_at: { foo: '2019-12-27T18:11:19.117Z' },
          reverses_ledger_transaction_id: 'string',
          status: 'pending',
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('createReversal', async () => {
    const response = await modernTreasury.ledgerTransactions.createReversal('string');
  });

  test('createReversal: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.createReversal('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('createReversal: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.createReversal(
        'string',
        {
          description: 'string',
          effective_at: '2019-12-27T18:11:19.117Z',
          external_id: 'string',
          ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ledgerable_type: 'counterparty',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          status: 'archived',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
