// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledgerAccountPayouts', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.ledgerAccountPayouts.create({
      funding_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payout_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccountPayouts.create({
      funding_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payout_ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'string',
      effective_at_upper_bound: '14:15:22Z',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      status: 'pending',
      'Idempotency-Key': 'string',
    });
  });

  test('update', async () => {
    const response = await modernTreasury.ledgerAccountPayouts.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountPayouts.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountPayouts.update(
        'string',
        {
          description: 'string',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          status: 'posted',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.ledgerAccountPayouts.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountPayouts.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountPayouts.list(
        { after_cursor: 'string', payout_ledger_account_id: 'string', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retireve', async () => {
    const response = await modernTreasury.ledgerAccountPayouts.retireve('string');
  });

  test('retireve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccountPayouts.retireve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
