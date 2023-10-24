// File generated from our OpenAPI spec by Stainless.

import ModernTreasury, { toFile } from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentOrders', () => {
  // prism mock server is broken for file uploads
  test.skip('create: only required params', async () => {
    const responsePromise = modernTreasury.paymentOrders.create({
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
    const response = await modernTreasury.paymentOrders.create({
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
      description: 'string',
      documents: [
        {
          documentable_id: 'string',
          documentable_type: 'cases',
          document_type: 'string',
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        },
        {
          documentable_id: 'string',
          documentable_type: 'cases',
          document_type: 'string',
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        },
        {
          documentable_id: 'string',
          documentable_type: 'cases',
          document_type: 'string',
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        },
      ],
      effective_date: '2019-12-27',
      expires_at: '2019-12-27T18:11:19.117Z',
      fallback_type: 'ach',
      foreign_exchange_contract: 'string',
      foreign_exchange_indicator: 'fixed_to_variable',
      ledger_transaction: {
        description: 'string',
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
        external_id: 'string',
        ledgerable_type: 'counterparty',
        ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      line_items: [
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
      ],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      nsf_protected: true,
      originating_party_name: 'string',
      priority: 'high',
      purpose: 'string',
      receiving_account: {
        account_type: 'cash',
        party_type: 'business',
        party_address: {
          line1: 'string',
          line2: 'string',
          locality: 'string',
          region: 'string',
          postal_code: 'string',
          country: 'string',
        },
        name: 'string',
        account_details: [
          { account_number: 'string', account_number_type: 'iban' },
          { account_number: 'string', account_number_type: 'iban' },
          { account_number: 'string', account_number_type: 'iban' },
        ],
        routing_details: [
          { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
          { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
          { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        ],
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        party_name: 'string',
        party_identifier: 'string',
        ledger_account: {
          name: 'string',
          description: 'string',
          normal_balance: 'credit',
          ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'string',
          currency_exponent: 0,
          ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ledgerable_type: 'external_account',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        },
        plaid_processor_token: 'string',
        contact_details: [
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
        ],
      },
      receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      remittance_information: 'string',
      send_remittance_advice: true,
      statement_descriptor: 'string',
      subtype: '0C',
      transaction_monitoring_enabled: true,
      ultimate_originating_party_identifier: 'string',
      ultimate_originating_party_name: 'string',
      ultimate_receiving_party_identifier: 'string',
      ultimate_receiving_party_name: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.paymentOrders.retrieve('string');
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
      modernTreasury.paymentOrders.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.paymentOrders.update('string');
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
      modernTreasury.paymentOrders.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentOrders.update(
        'string',
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
          description: 'string',
          direction: 'credit',
          effective_date: '2019-12-27',
          expires_at: '2019-12-27T18:11:19.117Z',
          fallback_type: 'ach',
          foreign_exchange_contract: 'string',
          foreign_exchange_indicator: 'fixed_to_variable',
          line_items: [
            {
              amount: 0,
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              description: 'string',
              accounting_category_id: 'string',
            },
            {
              amount: 0,
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              description: 'string',
              accounting_category_id: 'string',
            },
            {
              amount: 0,
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              description: 'string',
              accounting_category_id: 'string',
            },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          nsf_protected: true,
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          originating_party_name: 'string',
          priority: 'high',
          purpose: 'string',
          receiving_account: {
            account_type: 'cash',
            party_type: 'business',
            party_address: {
              line1: 'string',
              line2: 'string',
              locality: 'string',
              region: 'string',
              postal_code: 'string',
              country: 'string',
            },
            name: 'string',
            account_details: [
              { account_number: 'string', account_number_type: 'iban' },
              { account_number: 'string', account_number_type: 'iban' },
              { account_number: 'string', account_number_type: 'iban' },
            ],
            routing_details: [
              { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
              { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
              { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
            ],
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            party_name: 'string',
            party_identifier: 'string',
            ledger_account: {
              name: 'string',
              description: 'string',
              normal_balance: 'credit',
              ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              currency: 'string',
              currency_exponent: 0,
              ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              ledgerable_type: 'external_account',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            },
            plaid_processor_token: 'string',
            contact_details: [
              { contact_identifier: 'string', contact_identifier_type: 'email' },
              { contact_identifier: 'string', contact_identifier_type: 'email' },
              { contact_identifier: 'string', contact_identifier_type: 'email' },
            ],
          },
          receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          remittance_information: 'string',
          send_remittance_advice: true,
          statement_descriptor: 'string',
          status: 'approved',
          subtype: '0C',
          type: 'ach',
          ultimate_originating_party_identifier: 'string',
          ultimate_originating_party_name: 'string',
          ultimate_receiving_party_identifier: 'string',
          ultimate_receiving_party_name: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.paymentOrders.list();
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
    await expect(modernTreasury.paymentOrders.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentOrders.list(
        {
          after_cursor: 'string',
          counterparty_id: 'string',
          direction: 'credit',
          effective_date_end: '2019-12-27',
          effective_date_start: '2019-12-27',
          metadata: { foo: 'string' },
          originating_account_id: 'string',
          per_page: 0,
          priority: 'high',
          reference_number: 'string',
          status: 'approved',
          transaction_id: 'string',
          type: 'ach',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('createAsync: only required params', async () => {
    const responsePromise = modernTreasury.paymentOrders.createAsync({
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
    const response = await modernTreasury.paymentOrders.createAsync({
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
      description: 'string',
      effective_date: '2019-12-27',
      expires_at: '2019-12-27T18:11:19.117Z',
      fallback_type: 'ach',
      foreign_exchange_contract: 'string',
      foreign_exchange_indicator: 'fixed_to_variable',
      ledger_transaction: {
        description: 'string',
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
        external_id: 'string',
        ledgerable_type: 'counterparty',
        ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      line_items: [
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
      ],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      nsf_protected: true,
      originating_party_name: 'string',
      priority: 'high',
      purpose: 'string',
      receiving_account: {
        account_type: 'cash',
        party_type: 'business',
        party_address: {
          line1: 'string',
          line2: 'string',
          locality: 'string',
          region: 'string',
          postal_code: 'string',
          country: 'string',
        },
        name: 'string',
        account_details: [
          { account_number: 'string', account_number_type: 'iban' },
          { account_number: 'string', account_number_type: 'iban' },
          { account_number: 'string', account_number_type: 'iban' },
        ],
        routing_details: [
          { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
          { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
          { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
        ],
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        party_name: 'string',
        party_identifier: 'string',
        ledger_account: {
          name: 'string',
          description: 'string',
          normal_balance: 'credit',
          ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'string',
          currency_exponent: 0,
          ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ledgerable_type: 'external_account',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        },
        plaid_processor_token: 'string',
        contact_details: [
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
        ],
      },
      receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      remittance_information: 'string',
      send_remittance_advice: true,
      statement_descriptor: 'string',
      subtype: '0C',
      transaction_monitoring_enabled: true,
      ultimate_originating_party_identifier: 'string',
      ultimate_originating_party_name: 'string',
      ultimate_receiving_party_identifier: 'string',
      ultimate_receiving_party_name: 'string',
    });
  });
});
