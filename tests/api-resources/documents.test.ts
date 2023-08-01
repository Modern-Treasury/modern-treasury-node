// File generated from our OpenAPI spec by Stainless.

import ModernTreasury, { toFile } from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource documents', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.documents.create({
      documentable_id: 'string',
      documentable_type: 'cases',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.documents.create({
      documentable_id: 'string',
      documentable_type: 'cases',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      document_type: 'string',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.documents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.documents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.documents.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.documents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.documents.list(
        { after_cursor: 'string', documentable_id: 'string', documentable_type: 'cases', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
