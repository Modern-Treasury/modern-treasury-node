// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reversals', () => {
  test('create: only required params', async () => {
    const responsePromise = client.paymentOrders.reversals.create('payment_order_id', {
      reason: 'duplicate',
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
    const response = await client.paymentOrders.reversals.create('payment_order_id', {
      reason: 'duplicate',
      ledger_transaction: {
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
      },
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.paymentOrders.reversals.retrieve('reversal_id', {
      payment_order_id: 'payment_order_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.paymentOrders.reversals.retrieve('reversal_id', {
      payment_order_id: 'payment_order_id',
    });
  });

  test('list', async () => {
    const responsePromise = client.paymentOrders.reversals.list('payment_order_id');
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
      client.paymentOrders.reversals.list(
        'payment_order_id',
        { after_cursor: 'after_cursor', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
