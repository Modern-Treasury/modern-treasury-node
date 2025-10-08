// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury, { toFile } from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentOrders', () => {
  // prism mock server is broken for file uploads
  test.skip('create: only required params', async () => {
    const responsePromise = client.paymentOrders.create({
      amount: 0,
      direction: 'credit',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'ach',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism mock server is broken for file uploads
  test.skip('create: required and optional params', async () => {
    const response = await client.paymentOrders.create({
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
      documents: [
        {
          documentable_id: 'documentable_id',
          documentable_type: 'counterparties',
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
          document_type: 'document_type',
        },
      ],
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
      reconciliation_status: 'reconciled',
      remittance_information: 'remittance_information',
      send_remittance_advice: true,
      statement_descriptor: 'statement_descriptor',
      subtype: '0C',
      transaction_monitoring_enabled: true,
      ultimate_originating_party_identifier: 'ultimate_originating_party_identifier',
      ultimate_originating_party_name: 'ultimate_originating_party_name',
      ultimate_receiving_party_identifier: 'ultimate_receiving_party_identifier',
      ultimate_receiving_party_name: 'ultimate_receiving_party_name',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.paymentOrders.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.paymentOrders.update('id');
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
      client.paymentOrders.update(
        'id',
        {
          accounting: {
            account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          accounting_category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          accounting_ledger_class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amount: 0,
          charge_bearer: 'shared',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'AED',
          description: 'description',
          direction: 'credit',
          effective_date: '2019-12-27',
          expires_at: '2019-12-27T18:11:19.117Z',
          fallback_type: 'ach',
          foreign_exchange_contract: 'foreign_exchange_contract',
          foreign_exchange_indicator: 'fixed_to_variable',
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
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
          reconciliation_status: 'reconciled',
          remittance_information: 'remittance_information',
          send_remittance_advice: true,
          statement_descriptor: 'statement_descriptor',
          status: 'approved',
          subtype: '0C',
          type: 'ach',
          ultimate_originating_party_identifier: 'ultimate_originating_party_identifier',
          ultimate_originating_party_name: 'ultimate_originating_party_name',
          ultimate_receiving_party_identifier: 'ultimate_receiving_party_identifier',
          ultimate_receiving_party_name: 'ultimate_receiving_party_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.paymentOrders.list();
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
      client.paymentOrders.list(
        {
          after_cursor: 'after_cursor',
          counterparty_id: 'counterparty_id',
          created_at_end: '2019-12-27',
          created_at_start: '2019-12-27',
          direction: 'credit',
          effective_date_end: '2019-12-27',
          effective_date_start: '2019-12-27',
          external_id: 'external_id',
          metadata: { foo: 'string' },
          originating_account_id: 'originating_account_id',
          per_page: 0,
          priority: 'high',
          process_after_end: '2019-12-27T18:11:19.117Z',
          process_after_start: '2019-12-27T18:11:19.117Z',
          reference_number: 'reference_number',
          status: 'approved',
          transaction_id: 'transaction_id',
          type: 'ach',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('createAsync: only required params', async () => {
    const responsePromise = client.paymentOrders.createAsync({
      amount: 0,
      direction: 'credit',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'ach',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createAsync: required and optional params', async () => {
    const response = await client.paymentOrders.createAsync({
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
      reconciliation_status: 'reconciled',
      remittance_information: 'remittance_information',
      send_remittance_advice: true,
      statement_descriptor: 'statement_descriptor',
      subtype: '0C',
      transaction_monitoring_enabled: true,
      ultimate_originating_party_identifier: 'ultimate_originating_party_identifier',
      ultimate_originating_party_name: 'ultimate_originating_party_name',
      ultimate_receiving_party_identifier: 'ultimate_receiving_party_identifier',
      ultimate_receiving_party_name: 'ultimate_receiving_party_name',
    });
  });
});
