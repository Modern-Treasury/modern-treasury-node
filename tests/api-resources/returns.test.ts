// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource returns', () => {
  test('create: only required params', async () => {
    const responsePromise = client.returns.create({
      returnable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      returnable_type: 'incoming_payment_detail',
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
    const response = await client.returns.create({
      returnable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      returnable_type: 'incoming_payment_detail',
      additional_information: 'additional_information',
      code: '901',
      corrections: {
        account_number: 'account_number',
        company_id: 'company_id',
        company_name: 'company_name',
        individual_identification_number: 'individual_identification_number',
        routing_number: 'routing_number',
        transaction_code: 'transaction_code',
      },
      data: {},
      date_of_death: '2019-12-27',
      reason: 'reason',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.returns.retrieve('id');
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
    await expect(client.returns.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.returns.list();
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
    await expect(client.returns.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.returns.list(
        {
          after_cursor: 'after_cursor',
          counterparty_id: 'counterparty_id',
          internal_account_id: 'internal_account_id',
          per_page: 0,
          returnable_id: 'returnable_id',
          returnable_type: 'incoming_payment_detail',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
