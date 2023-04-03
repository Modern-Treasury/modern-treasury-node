// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource validations', () => {
  test('validate_routing_number: only required params', async () => {
    const response = await modernTreasury.validations.validateRoutingNumber({
      routing_number: 'string',
      routing_number_type: 'aba',
    });
  });

  test('validate_routing_number: required and optional params', async () => {
    const response = await modernTreasury.validations.validateRoutingNumber({
      routing_number: 'string',
      routing_number_type: 'aba',
    });
  });
});
