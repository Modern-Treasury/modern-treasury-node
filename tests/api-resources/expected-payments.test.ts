// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource expectedPayments', () => {
  test('create', async () => {
    const responsePromise = client.expectedPayments.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.expectedPayments.create(
        {
          amount_lower_bound: 0,
          amount_reconciled: 0,
          amount_reconciled_direction: 'credit',
          amount_unreconciled: 0,
          amount_unreconciled_direction: 'credit',
          amount_upper_bound: 0,
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'AED',
          date_lower_bound: '2019-12-27',
          date_upper_bound: '2019-12-27',
          description: 'description',
          direction: 'credit',
          external_id: 'external_id',
          internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ledger_transaction: {
            ledger_entries: [
              {
                amount: 0,
                direction: 'credit',
                ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
                available_balance_amount: { foo: 0 },
                effective_at: '2019-12-27T18:11:19.117Z',
                lock_version: 0,
                metadata: {
                  key: 'value',
                  foo: 'bar',
                  modern: 'treasury',
                },
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
            metadata: {
              key: 'value',
              foo: 'bar',
              modern: 'treasury',
            },
            status: 'archived',
          },
          ledger_transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          line_items: [
            {
              amount: 0,
              accounting_category_id: 'accounting_category_id',
              description: 'description',
              metadata: {
                key: 'value',
                foo: 'bar',
                modern: 'treasury',
              },
            },
          ],
          metadata: {
            key: 'value',
            foo: 'bar',
            modern: 'treasury',
          },
          reconciliation_filters: {},
          reconciliation_groups: {},
          reconciliation_rule_variables: [
            {
              amount_lower_bound: 0,
              amount_upper_bound: 0,
              direction: 'credit',
              internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              currency: 'AED',
              custom_identifiers: { foo: 'string' },
              date_lower_bound: '2019-12-27',
              date_upper_bound: '2019-12-27',
              type: 'ach',
            },
          ],
          remittance_information: 'remittance_information',
          statement_descriptor: 'statement_descriptor',
          type: 'ach',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = client.expectedPayments.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.expectedPayments.update('id');
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
      client.expectedPayments.update(
        'id',
        {
          amount_lower_bound: 0,
          amount_reconciled: 0,
          amount_reconciled_direction: 'credit',
          amount_unreconciled: 0,
          amount_unreconciled_direction: 'credit',
          amount_upper_bound: 0,
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'AED',
          date_lower_bound: '2019-12-27',
          date_upper_bound: '2019-12-27',
          description: 'description',
          direction: 'credit',
          external_id: 'external_id',
          internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: {
            key: 'value',
            foo: 'bar',
            modern: 'treasury',
          },
          reconciliation_filters: {},
          reconciliation_groups: {},
          reconciliation_rule_variables: [
            {
              amount_lower_bound: 0,
              amount_upper_bound: 0,
              direction: 'credit',
              internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              currency: 'AED',
              custom_identifiers: { foo: 'string' },
              date_lower_bound: '2019-12-27',
              date_upper_bound: '2019-12-27',
              type: 'ach',
            },
          ],
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
    const responsePromise = client.expectedPayments.list();
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
      client.expectedPayments.list(
        {
          after_cursor: 'after_cursor',
          counterparty_id: 'counterparty_id',
          created_at_lower_bound: '2019-12-27T18:11:19.117Z',
          created_at_upper_bound: '2019-12-27T18:11:19.117Z',
          direction: 'credit',
          external_id: 'external_id',
          internal_account_id: 'internal_account_id',
          metadata: { foo: 'string' },
          per_page: 0,
          status: 'archived',
          type: 'ach',
          updated_at_lower_bound: '2019-12-27T18:11:19.117Z',
          updated_at_upper_bound: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.expectedPayments.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
