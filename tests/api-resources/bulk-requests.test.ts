// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulkRequests', () => {
  // Multipart documents aren't constructed properly yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.bulkRequests.create({
      action_type: 'create',
      resource_type: 'payment_order',
      resources: [
        {
          amount: 0,
          direction: 'credit',
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          type: 'ach',
        },
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

  // Multipart documents aren't constructed properly yet
  test.skip('create: required and optional params', async () => {
    const response = await client.bulkRequests.create({
      action_type: 'create',
      resource_type: 'payment_order',
      resources: [
        {
          amount: 0,
          direction: 'credit',
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          type: 'ach',
          accounting: {
            account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          accounting_category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          accounting_ledger_class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          charge_bearer: 'shared',
          currency: 'AED',
          description: 'description',
          effective_date: '2019-12-27',
          expires_at: '2019-12-27T18:11:19.117Z',
          fallback_type: 'ach',
          foreign_exchange_contract: 'foreign_exchange_contract',
          foreign_exchange_indicator: 'fixed_to_variable',
          ledger_transaction: {
            ledger_entries: [
              {
                amount: 0,
                direction: 'credit',
                ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
                available_balance_amount: { foo: 0 },
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
          ledger_transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          line_items: [
            {
              amount: 0,
              accounting_category_id: 'accounting_category_id',
              description: 'description',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          nsf_protected: true,
          originating_party_name: 'originating_party_name',
          priority: 'high',
          process_after: '2019-12-27T18:11:19.117Z',
          purpose: 'purpose',
          receiving_account: {
            account_details: [{ account_number: 'account_number', account_number_type: 'au_number' }],
            account_type: 'base_wallet',
            contact_details: [{ contact_identifier: 'contact_identifier', contact_identifier_type: 'email' }],
            external_id: 'external_id',
            ledger_account: {
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
            },
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            name: 'name',
            party_address: {
              country: 'country',
              line1: 'line1',
              line2: 'line2',
              locality: 'locality',
              postal_code: 'postal_code',
              region: 'region',
            },
            party_identifier: 'party_identifier',
            party_name: 'party_name',
            party_type: 'business',
            plaid_processor_token: 'plaid_processor_token',
            routing_details: [
              { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
            ],
          },
          receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          remittance_information: 'remittance_information',
          send_remittance_advice: true,
          statement_descriptor: 'statement_descriptor',
          subtype: '0C',
          transaction_monitoring_enabled: true,
          ultimate_originating_party_identifier: 'ultimate_originating_party_identifier',
          ultimate_originating_party_name: 'ultimate_originating_party_name',
          ultimate_receiving_party_identifier: 'ultimate_receiving_party_identifier',
          ultimate_receiving_party_name: 'ultimate_receiving_party_name',
        },
      ],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.bulkRequests.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.bulkRequests.list();
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
      client.bulkRequests.list(
        {
          action_type: 'create',
          after_cursor: 'after_cursor',
          metadata: { foo: 'string' },
          per_page: 0,
          resource_type: 'payment_order',
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
