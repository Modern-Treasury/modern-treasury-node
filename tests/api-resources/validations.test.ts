// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource validations', () => {
  test('validateRoutingNumber: only required params', async () => {
    const responsePromise = modernTreasury.validations.validateRoutingNumber({
      routing_number: 'string',
      routing_number_type: 'aba',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validateRoutingNumber: required and optional params', async () => {
    const response = await modernTreasury.validations.validateRoutingNumber({
      routing_number: 'string',
      routing_number_type: 'aba',
    });
  });
});
