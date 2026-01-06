// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lineItems', () => {
  test('create: only required params', async () => {
    const responsePromise = client.invoices.lineItems.create('invoice_id', { name: 'name', unit_amount: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.invoices.lineItems.create('invoice_id', {
      name: 'name',
      unit_amount: 0,
      description: 'description',
      direction: 'direction',
      metadata: {
        key: 'value',
        foo: 'bar',
        modern: 'treasury',
      },
      quantity: 0,
      unit_amount_decimal: 'unit_amount_decimal',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.invoices.lineItems.retrieve('id', { invoice_id: 'invoice_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.invoices.lineItems.retrieve('id', { invoice_id: 'invoice_id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.invoices.lineItems.update('id', { invoice_id: 'invoice_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.invoices.lineItems.update('id', {
      invoice_id: 'invoice_id',
      description: 'description',
      direction: 'direction',
      metadata: {
        key: 'value',
        foo: 'bar',
        modern: 'treasury',
      },
      name: 'name',
      quantity: 0,
      unit_amount: 0,
      unit_amount_decimal: 'unit_amount_decimal',
    });
  });

  test('list', async () => {
    const responsePromise = client.invoices.lineItems.list('invoice_id');
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
      client.invoices.lineItems.list(
        'invoice_id',
        { after_cursor: 'after_cursor', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.invoices.lineItems.delete('id', { invoice_id: 'invoice_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.invoices.lineItems.delete('id', { invoice_id: 'invoice_id' });
  });
});
