// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  test('create: only required params', async () => {
    const responsePromise = client.invoices.create({
      counterparty_id: 'counterparty_id',
      due_date: '2019-12-27T18:11:19.117Z',
      originating_account_id: 'originating_account_id',
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
    const response = await client.invoices.create({
      counterparty_id: 'counterparty_id',
      due_date: '2019-12-27T18:11:19.117Z',
      originating_account_id: 'originating_account_id',
      contact_details: [
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          contact_identifier: 'contact_identifier',
          contact_identifier_type: 'email',
          created_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          live_mode: true,
          object: 'object',
          updated_at: '2019-12-27T18:11:19.117Z',
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          contact_identifier: 'contact_identifier',
          contact_identifier_type: 'email',
          created_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          live_mode: true,
          object: 'object',
          updated_at: '2019-12-27T18:11:19.117Z',
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          contact_identifier: 'contact_identifier',
          contact_identifier_type: 'email',
          created_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          live_mode: true,
          object: 'object',
          updated_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      counterparty_billing_address: {
        country: 'country',
        line1: 'line1',
        locality: 'locality',
        postal_code: 'postal_code',
        region: 'region',
        line2: 'line2',
      },
      counterparty_shipping_address: {
        country: 'country',
        line1: 'line1',
        locality: 'locality',
        postal_code: 'postal_code',
        region: 'region',
        line2: 'line2',
      },
      currency: 'AED',
      description: 'description',
      fallback_payment_method: 'fallback_payment_method',
      ingest_ledger_entries: true,
      invoice_line_items: [
        {
          name: 'name',
          unit_amount: 0,
          description: 'description',
          direction: 'direction',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          quantity: 0,
          unit_amount_decimal: 'unit_amount_decimal',
        },
        {
          name: 'name',
          unit_amount: 0,
          description: 'description',
          direction: 'direction',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          quantity: 0,
          unit_amount_decimal: 'unit_amount_decimal',
        },
        {
          name: 'name',
          unit_amount: 0,
          description: 'description',
          direction: 'direction',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          quantity: 0,
          unit_amount_decimal: 'unit_amount_decimal',
        },
      ],
      invoicer_address: {
        country: 'country',
        line1: 'line1',
        locality: 'locality',
        postal_code: 'postal_code',
        region: 'region',
        line2: 'line2',
      },
      ledger_account_settlement_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      notification_email_addresses: ['string', 'string', 'string'],
      notifications_enabled: true,
      payment_effective_date: '2019-12-27',
      payment_method: 'ui',
      payment_type: 'ach',
      receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      recipient_email: 'recipient_email',
      recipient_name: 'recipient_name',
      remind_after_overdue_days: [0, 0, 0],
      virtual_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.invoices.retrieve('id');
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
    await expect(client.invoices.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.invoices.update('id');
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
    await expect(client.invoices.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.update(
        'id',
        {
          contact_details: [
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              contact_identifier: 'contact_identifier',
              contact_identifier_type: 'email',
              created_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              live_mode: true,
              object: 'object',
              updated_at: '2019-12-27T18:11:19.117Z',
            },
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              contact_identifier: 'contact_identifier',
              contact_identifier_type: 'email',
              created_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              live_mode: true,
              object: 'object',
              updated_at: '2019-12-27T18:11:19.117Z',
            },
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              contact_identifier: 'contact_identifier',
              contact_identifier_type: 'email',
              created_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              live_mode: true,
              object: 'object',
              updated_at: '2019-12-27T18:11:19.117Z',
            },
          ],
          counterparty_billing_address: {
            country: 'country',
            line1: 'line1',
            locality: 'locality',
            postal_code: 'postal_code',
            region: 'region',
            line2: 'line2',
          },
          counterparty_id: 'counterparty_id',
          counterparty_shipping_address: {
            country: 'country',
            line1: 'line1',
            locality: 'locality',
            postal_code: 'postal_code',
            region: 'region',
            line2: 'line2',
          },
          currency: 'AED',
          description: 'description',
          due_date: '2019-12-27T18:11:19.117Z',
          fallback_payment_method: 'fallback_payment_method',
          ingest_ledger_entries: true,
          invoice_line_items: [
            {
              name: 'name',
              unit_amount: 0,
              description: 'description',
              direction: 'direction',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              quantity: 0,
              unit_amount_decimal: 'unit_amount_decimal',
            },
            {
              name: 'name',
              unit_amount: 0,
              description: 'description',
              direction: 'direction',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              quantity: 0,
              unit_amount_decimal: 'unit_amount_decimal',
            },
            {
              name: 'name',
              unit_amount: 0,
              description: 'description',
              direction: 'direction',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              quantity: 0,
              unit_amount_decimal: 'unit_amount_decimal',
            },
          ],
          invoicer_address: {
            country: 'country',
            line1: 'line1',
            locality: 'locality',
            postal_code: 'postal_code',
            region: 'region',
            line2: 'line2',
          },
          ledger_account_settlement_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          notification_email_addresses: ['string', 'string', 'string'],
          notifications_enabled: true,
          originating_account_id: 'originating_account_id',
          payment_effective_date: '2019-12-27',
          payment_method: 'ui',
          payment_type: 'ach',
          receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          recipient_email: 'recipient_email',
          recipient_name: 'recipient_name',
          remind_after_overdue_days: [0, 0, 0],
          status: 'status',
          virtual_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.invoices.list();
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
    await expect(client.invoices.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.list(
        {
          after_cursor: 'after_cursor',
          counterparty_id: 'counterparty_id',
          due_date_end: '2019-12-27',
          due_date_start: '2019-12-27',
          expected_payment_id: 'expected_payment_id',
          metadata: { foo: 'string' },
          number: 'number',
          originating_account_id: 'originating_account_id',
          payment_order_id: 'payment_order_id',
          per_page: 0,
          status: 'draft',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('addPaymentOrder', async () => {
    const responsePromise = client.invoices.addPaymentOrder('id', 'payment_order_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addPaymentOrder: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.addPaymentOrder('id', 'payment_order_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
