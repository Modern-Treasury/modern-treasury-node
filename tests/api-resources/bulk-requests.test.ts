// File generated from our OpenAPI spec by Stainless.

import ModernTreasury, { toFile } from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulkRequests', () => {
  // Multipart documents aren't constructed properly yet
  test.skip('create: only required params', async () => {
    const responsePromise = modernTreasury.bulkRequests.create({
      action_type: 'create',
      resource_type: 'payment_order',
      resources: [
        {
          type: 'ach',
          amount: 0,
          direction: 'credit',
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        {
          type: 'ach',
          amount: 0,
          direction: 'credit',
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        {
          type: 'ach',
          amount: 0,
          direction: 'credit',
          originating_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await modernTreasury.bulkRequests.create({
      action_type: 'create',
      resource_type: 'payment_order',
      resources: [
        {
          type: 'ach',
          subtype: '0C',
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
          expires_at: '2019-12-27T18:11:19.117Z',
          fallback_type: 'ach',
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
          ledger_transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
        },
        {
          type: 'ach',
          subtype: '0C',
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
          expires_at: '2019-12-27T18:11:19.117Z',
          fallback_type: 'ach',
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
          ledger_transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
        },
        {
          type: 'ach',
          subtype: '0C',
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
          expires_at: '2019-12-27T18:11:19.117Z',
          fallback_type: 'ach',
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
          ledger_transaction_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
        },
      ],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.bulkRequests.retrieve('string');
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
      modernTreasury.bulkRequests.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.bulkRequests.list();
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
    await expect(modernTreasury.bulkRequests.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.bulkRequests.list(
        {
          action_type: 'create',
          after_cursor: 'string',
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
