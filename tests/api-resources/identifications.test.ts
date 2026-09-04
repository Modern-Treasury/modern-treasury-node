// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource identifications', () => {
  test('create: only required params', async () => {
    const responsePromise = client.identifications.create({
      id_number: 'id_number',
      id_type: 'ar_cuil',
      legal_entity_id: 'legal_entity_id',
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
    const response = await client.identifications.create({
      id_number: 'id_number',
      id_type: 'ar_cuil',
      legal_entity_id: 'legal_entity_id',
      documents: [
        {
          document_type: 'articles_of_incorporation',
          file_data: 'file_data',
          filename: 'filename',
        },
      ],
      expiration_date: '2019-12-27',
      issuing_country: 'issuing_country',
      issuing_region: 'issuing_region',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.identifications.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.identifications.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.identifications.update(
        'id',
        {
          expiration_date: '2019-12-27',
          id_number: 'id_number',
          id_type: 'ar_cuil',
          issuing_country: 'issuing_country',
          issuing_region: 'issuing_region',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
