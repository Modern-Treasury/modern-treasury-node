// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource reversals', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.paymentOrders.reversals.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        ledger_transaction: {
          effective_date: '2019-12-27',
          ledger_entries: [
            { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
            { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
            { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
          ],
        },
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        reason: 'duplicate',
        'Idempotency-Key': 'string',
      },
    );
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.paymentOrders.reversals.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        ledger_transaction: {
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
        },
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        reason: 'duplicate',
        'Idempotency-Key': 'string',
      },
    );
  });

  test('retrieve', async () => {
    const response = await modernTreasury.paymentOrders.reversals.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentOrders.reversals.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.paymentOrders.reversals.list('string');
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentOrders.reversals.list('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentOrders.reversals.list(
        'string',
        { after_cursor: 'string', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
