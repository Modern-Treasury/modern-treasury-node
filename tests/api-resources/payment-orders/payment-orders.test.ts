// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path';

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource payment_orders', () => {
  // skipped: prism mock server is broken for file uploads
  test.skip('create: only required params', async () => {
    const response = await modernTreasury.paymentOrders.create({
      type: 'ach',
      amount: 0,
      direction: 'credit',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: prism mock server is broken for file uploads
  test.skip('create: required and optional params', async () => {
    const response = await modernTreasury.paymentOrders.create({
      type: 'ach',
      subtype: 'CCD',
      amount: 0,
      direction: 'credit',
      priority: 'high',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      accounting: {
        account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      accounting_category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      accounting_ledger_class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'AED',
      effective_date: '2019-12-27',
      description: 'string',
      statement_descriptor: 'string',
      remittance_information: 'string',
      purpose: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      charge_bearer: 'shared',
      foreign_exchange_indicator: 'fixed_to_variable',
      foreign_exchange_contract: 'string',
      nsf_protected: true,
      originating_party_name: 'string',
      ultimate_originating_party_name: 'string',
      ultimate_originating_party_identifier: 'string',
      ultimate_receiving_party_name: 'string',
      ultimate_receiving_party_identifier: 'string',
      send_remittance_advice: true,
      fallback_type: 'ach',
      receiving_account: {
        account_type: 'checking',
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
        plaid_processor_token: 'string',
        contact_details: [
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
        ],
      },
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
          },
          {
            amount: 0,
            direction: 'credit',
            ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            lock_version: 0,
            pending_balance_amount: { foo: 0 },
            posted_balance_amount: { foo: 0 },
            available_balance_amount: { foo: 0 },
          },
          {
            amount: 0,
            direction: 'credit',
            ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            lock_version: 0,
            pending_balance_amount: { foo: 0 },
            posted_balance_amount: { foo: 0 },
            available_balance_amount: { foo: 0 },
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
      transaction_monitoring_enabled: true,
      documents: [
        { document_type: 'string', file: await fileFromPath('README.md') },
        { document_type: 'string', file: await fileFromPath('README.md') },
        { document_type: 'string', file: await fileFromPath('README.md') },
      ],
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.paymentOrders.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.paymentOrders.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await modernTreasury.paymentOrders.update('string');
  });

  test('update: required and optional params', async () => {
    const response = await modernTreasury.paymentOrders.update('string', {
      type: 'ach',
      subtype: 'CCD',
      amount: 0,
      direction: 'credit',
      priority: 'high',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      accounting: {
        account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      accounting_category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      accounting_ledger_class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'AED',
      effective_date: '2019-12-27',
      description: 'string',
      statement_descriptor: 'string',
      remittance_information: 'string',
      purpose: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      charge_bearer: 'shared',
      foreign_exchange_indicator: 'fixed_to_variable',
      foreign_exchange_contract: 'string',
      nsf_protected: true,
      originating_party_name: 'string',
      ultimate_originating_party_name: 'string',
      ultimate_originating_party_identifier: 'string',
      ultimate_receiving_party_name: 'string',
      ultimate_receiving_party_identifier: 'string',
      send_remittance_advice: true,
      status: 'approved',
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      fallback_type: 'ach',
      receiving_account: {
        account_type: 'checking',
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
        plaid_processor_token: 'string',
        contact_details: [
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
        ],
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
    });
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
          type: 'ach',
          subtype: 'CCD',
          amount: 0,
          direction: 'credit',
          priority: 'high',
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          accounting: {
            account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          accounting_category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          accounting_ledger_class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'AED',
          effective_date: '2019-12-27',
          description: 'string',
          statement_descriptor: 'string',
          remittance_information: 'string',
          purpose: 'string',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          charge_bearer: 'shared',
          foreign_exchange_indicator: 'fixed_to_variable',
          foreign_exchange_contract: 'string',
          nsf_protected: true,
          originating_party_name: 'string',
          ultimate_originating_party_name: 'string',
          ultimate_originating_party_identifier: 'string',
          ultimate_receiving_party_name: 'string',
          ultimate_receiving_party_identifier: 'string',
          send_remittance_advice: true,
          status: 'approved',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fallback_type: 'ach',
          receiving_account: {
            account_type: 'checking',
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
            plaid_processor_token: 'string',
            contact_details: [
              { contact_identifier: 'string', contact_identifier_type: 'email' },
              { contact_identifier: 'string', contact_identifier_type: 'email' },
              { contact_identifier: 'string', contact_identifier_type: 'email' },
            ],
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.paymentOrders.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.paymentOrders.list({
      after_cursor: 'string',
      per_page: 0,
      type: 'ach',
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'approved',
      direction: 'credit',
      reference_number: 'string',
      effective_date_start: '2019-12-27',
      effective_date_end: '2019-12-27',
      metadata: { foo: 'string' },
    });
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
          per_page: 0,
          type: 'ach',
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          status: 'approved',
          direction: 'credit',
          reference_number: 'string',
          effective_date_start: '2019-12-27',
          effective_date_end: '2019-12-27',
          metadata: { foo: 'string' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('create_async: only required params', async () => {
    const response = await modernTreasury.paymentOrders.createAsync({
      type: 'ach',
      amount: 0,
      direction: 'credit',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('create_async: required and optional params', async () => {
    const response = await modernTreasury.paymentOrders.createAsync({
      type: 'ach',
      subtype: 'CCD',
      amount: 0,
      direction: 'credit',
      priority: 'high',
      originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      accounting: {
        account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      accounting_category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      accounting_ledger_class_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'AED',
      effective_date: '2019-12-27',
      description: 'string',
      statement_descriptor: 'string',
      remittance_information: 'string',
      purpose: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      charge_bearer: 'shared',
      foreign_exchange_indicator: 'fixed_to_variable',
      foreign_exchange_contract: 'string',
      nsf_protected: true,
      originating_party_name: 'string',
      ultimate_originating_party_name: 'string',
      ultimate_originating_party_identifier: 'string',
      ultimate_receiving_party_name: 'string',
      ultimate_receiving_party_identifier: 'string',
      send_remittance_advice: true,
      fallback_type: 'ach',
      receiving_account: {
        account_type: 'checking',
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
        plaid_processor_token: 'string',
        contact_details: [
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
          { contact_identifier: 'string', contact_identifier_type: 'email' },
        ],
      },
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
          },
          {
            amount: 0,
            direction: 'credit',
            ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            lock_version: 0,
            pending_balance_amount: { foo: 0 },
            posted_balance_amount: { foo: 0 },
            available_balance_amount: { foo: 0 },
          },
          {
            amount: 0,
            direction: 'credit',
            ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            lock_version: 0,
            pending_balance_amount: { foo: 0 },
            posted_balance_amount: { foo: 0 },
            available_balance_amount: { foo: 0 },
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
      transaction_monitoring_enabled: true,
    });
  });
});
