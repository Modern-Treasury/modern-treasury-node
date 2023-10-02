// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('top level methods', () => {
  test('ping', async () => {
    const responsePromise = modernTreasury.ping();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ping: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.ping({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });
});
