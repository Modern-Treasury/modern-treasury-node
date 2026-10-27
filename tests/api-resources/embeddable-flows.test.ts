// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource embeddableFlows', () => {
  test('list', async () => {
    const responsePromise = client.embeddableFlows.list();
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
      client.embeddableFlows.list(
        {
          after_cursor: 'after_cursor',
          per_page: 0,
          status: 'status',
          template: 'legal_entity_onboarding',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('create: only required params', async () => {
    const responsePromise = client.embeddableFlows.create({
      options: { counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', payment_types: ['string'] },
      template: 'legal_entity_onboarding',
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
    const response = await client.embeddableFlows.create({
      options: {
        counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        payment_types: ['string'],
        receiving_countries: ['USA'],
      },
      template: 'legal_entity_onboarding',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.embeddableFlows.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.embeddableFlows.update('id', { status: 'cancelled' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.embeddableFlows.update('id', { status: 'cancelled' });
  });
});
