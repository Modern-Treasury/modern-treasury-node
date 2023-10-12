// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.invoices.create({
      counterparty_id: 'string',
      due_date: '2019-12-27T18:11:19.117Z',
      originating_account_id: 'string',
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
    const response = await modernTreasury.invoices.create({
      counterparty_id: 'string',
      due_date: '2019-12-27T18:11:19.117Z',
      originating_account_id: 'string',
      contact_details: [
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          contact_identifier: 'string',
          contact_identifier_type: 'email',
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          contact_identifier: 'string',
          contact_identifier_type: 'email',
        },
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          object: 'string',
          live_mode: true,
          created_at: '2019-12-27T18:11:19.117Z',
          updated_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          contact_identifier: 'string',
          contact_identifier_type: 'email',
        },
      ],
      counterparty_billing_address: {
        line1: 'string',
        line2: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      counterparty_shipping_address: {
        line1: 'string',
        line2: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      currency: 'AED',
      description: 'string',
      invoicer_address: {
        line1: 'string',
        line2: 'string',
        locality: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
      },
      notification_email_addresses: ['string', 'string', 'string'],
      notifications_enabled: true,
      payment_effective_date: '2019-12-27',
      payment_method: 'ui',
      payment_type: 'ach',
      receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      recipient_email: 'string',
      recipient_name: 'string',
      virtual_account_id: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.invoices.retrieve('string');
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
      modernTreasury.invoices.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.invoices.update('string');
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
      modernTreasury.invoices.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.invoices.update(
        'string',
        {
          contact_details: [
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object: 'string',
              live_mode: true,
              created_at: '2019-12-27T18:11:19.117Z',
              updated_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              contact_identifier: 'string',
              contact_identifier_type: 'email',
            },
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object: 'string',
              live_mode: true,
              created_at: '2019-12-27T18:11:19.117Z',
              updated_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              contact_identifier: 'string',
              contact_identifier_type: 'email',
            },
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              object: 'string',
              live_mode: true,
              created_at: '2019-12-27T18:11:19.117Z',
              updated_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              contact_identifier: 'string',
              contact_identifier_type: 'email',
            },
          ],
          counterparty_billing_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          counterparty_id: 'string',
          counterparty_shipping_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          currency: 'AED',
          description: 'string',
          due_date: '2019-12-27T18:11:19.117Z',
          invoicer_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          notification_email_addresses: ['string', 'string', 'string'],
          notifications_enabled: true,
          originating_account_id: 'string',
          payment_effective_date: '2019-12-27',
          payment_method: 'ui',
          payment_type: 'ach',
          receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          recipient_email: 'string',
          recipient_name: 'string',
          status: 'string',
          virtual_account_id: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.invoices.list();
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
    await expect(modernTreasury.invoices.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.invoices.list(
        { after_cursor: 'string', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('addPaymentOrder', async () => {
    const responsePromise = modernTreasury.invoices.addPaymentOrder('string', 'string');
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
      modernTreasury.invoices.addPaymentOrder('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
