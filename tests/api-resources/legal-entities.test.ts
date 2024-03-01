// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource legalEntities', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.legalEntities.create({ legal_entity_type: 'business' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.legalEntities.create({
      legal_entity_type: 'business',
      addresses: [
        {
          address_types: ['business', 'mailing', 'other'],
          line1: 'string',
          line2: 'string',
          locality: 'string',
          region: 'string',
          postal_code: 'string',
          country: 'string',
        },
        {
          address_types: ['business', 'mailing', 'other'],
          line1: 'string',
          line2: 'string',
          locality: 'string',
          region: 'string',
          postal_code: 'string',
          country: 'string',
        },
        {
          address_types: ['business', 'mailing', 'other'],
          line1: 'string',
          line2: 'string',
          locality: 'string',
          region: 'string',
          postal_code: 'string',
          country: 'string',
        },
      ],
      business_name: 'string',
      date_of_birth: '2019-12-27',
      doing_business_as_names: ['string', 'string', 'string'],
      email: 'string',
      first_name: 'string',
      identifications: [
        { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
        { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
        { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
      ],
      last_name: 'string',
      legal_structure: 'corporation',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      phone_numbers: [{ phone_number: 'string' }, { phone_number: 'string' }, { phone_number: 'string' }],
      website: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.legalEntities.retrieve('string');
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
      modernTreasury.legalEntities.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.legalEntities.update('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.legalEntities.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.legalEntities.update(
        'string',
        {
          business_name: 'string',
          date_of_birth: '2019-12-27',
          doing_business_as_names: ['string', 'string', 'string'],
          email: 'string',
          first_name: 'string',
          last_name: 'string',
          legal_structure: 'corporation',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          phone_numbers: [{ phone_number: 'string' }, { phone_number: 'string' }, { phone_number: 'string' }],
          website: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.legalEntities.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.legalEntities.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.legalEntities.list(
        {
          after_cursor: 'string',
          legal_entity_type: 'business',
          metadata: { foo: 'string' },
          per_page: 0,
          show_deleted: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
