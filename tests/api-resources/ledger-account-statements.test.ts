// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ledgerAccountStatements', () => {
  // Prism is broken in this case
  test.skip('create: only required params', async () => {
    const responsePromise = client.ledgerAccountStatements.create({
      effective_at_lower_bound: '2019-12-27T18:11:19.117Z',
      effective_at_upper_bound: '2019-12-27T18:11:19.117Z',
      ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism is broken in this case
  test.skip('create: required and optional params', async () => {
    const response = await client.ledgerAccountStatements.create({
      effective_at_lower_bound: '2019-12-27T18:11:19.117Z',
      effective_at_upper_bound: '2019-12-27T18:11:19.117Z',
      ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'description',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.ledgerAccountStatements.retrieve('id');
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
      client.ledgerAccountStatements.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
