// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path';
import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource documents', () => {
  // skipped: prism mock server is broken for file uploads
  test.skip('create: only required params', async () => {
    const response = await modernTreasury.documents.create('cases', 'string', {
      document_type: 'string',
      file: await fileFromPath('README.md'),
      'Idempotency-Key': 'string',
    });
  });

  // skipped: prism mock server is broken for file uploads
  test.skip('create: required and optional params', async () => {
    const response = await modernTreasury.documents.create('cases', 'string', {
      document_type: 'string',
      file: await fileFromPath('README.md'),
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.documents.retrieve(
      'cases',
      'string',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.documents.retrieve('cases', 'string', '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.documents.list('cases', 'string');
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.documents.list('cases', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.documents.list(
        'cases',
        'string',
        { after_cursor: 'string', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
