// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource lineItems', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.invoices.lineItems.create('string', {
      name: 'string',
      unit_amount: 0,
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
    const response = await modernTreasury.invoices.lineItems.create('string', {
      name: 'string',
      unit_amount: 0,
      description: 'string',
      direction: 'string',
      quantity: 0,
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.invoices.lineItems.retrieve('string', 'string');
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
      modernTreasury.invoices.lineItems.retrieve('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.invoices.lineItems.update('string', 'string');
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
      modernTreasury.invoices.lineItems.update('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.invoices.lineItems.update(
        'string',
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
          originating_account_id: 'string',
          payment_effective_date: '2019-12-27',
          payment_method: 'ui',
          payment_type: 'ach',
          receiving_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.invoices.lineItems.list('string');
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
    await expect(
      modernTreasury.invoices.lineItems.list('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.invoices.lineItems.list(
        'string',
        { after_cursor: 'string', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = modernTreasury.invoices.lineItems.del('string', 'string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.invoices.lineItems.del('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
