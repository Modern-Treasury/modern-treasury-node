// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledgerAccountStatements', () => {
  // Prism is broken in this case
  test.skip('create: only required params', async () => {
    const response = await modernTreasury.ledgerAccountStatements.create({
      effective_at_lower_bound: 'string',
      effective_at_upper_bound: 'string',
      ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism is broken in this case
  test.skip('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccountStatements.create({
      effective_at_lower_bound: 'string',
      effective_at_upper_bound: 'string',
      ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'string',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.ledgerAccountStatements.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountStatements.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
