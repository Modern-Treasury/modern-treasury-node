// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledgerableEvents', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.ledgerableEvents.create({ amount: 0, name: 'string' });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerableEvents.create({
      amount: 0,
      name: 'string',
      currency: 'string',
      currency_exponent: 0,
      custom_data: {},
      description: 'string',
      direction: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      originating_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      receiving_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.ledgerableEvents.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerableEvents.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
