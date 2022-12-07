// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledger_transactions', () => {
  test('create: only required params', async () => {
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
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerTransactions.create({
      description: 'string',
      status: 'archived',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
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
      external_id: 'string',
      ledgerable_type: 'counterparty',
      ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('update: only required params', async () => {
    const response = await modernTreasury.ledgerTransactions.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.ledgerTransactions.update('string', {
      description: 'string',
      status: 'archived',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
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
    });
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
          status: 'archived',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.ledgerTransactions.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.ledgerTransactions.list({
      after_cursor: 'string',
      per_page: 0,
      metadata: { foo: 'string' },
      ledger_id: 'string',
      ledger_account_id: 'string',
      effective_at: { foo: 'string' },
      effective_date: { foo: '2019-12-27T18:11:19.117Z' },
      posted_at: { foo: '2019-12-27T18:11:19.117Z' },
      updated_at: { foo: '2019-12-27T18:11:19.117Z' },
      status: 'pending',
      external_id: 'string',
      ledger_account_category_id: 'string',
    });
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
          after_cursor: 'string',
          per_page: 0,
          metadata: { foo: 'string' },
          ledger_id: 'string',
          ledger_account_id: 'string',
          effective_at: { foo: 'string' },
          effective_date: { foo: '2019-12-27T18:11:19.117Z' },
          posted_at: { foo: '2019-12-27T18:11:19.117Z' },
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
          status: 'pending',
          external_id: 'string',
          ledger_account_category_id: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
