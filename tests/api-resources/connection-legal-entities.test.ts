// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connectionLegalEntities', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.connectionLegalEntities.create({ connection_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.connectionLegalEntities.create({
      connection_id: 'string',
      legal_entity: {
        legal_entity_type: 'business',
        first_name: 'string',
        last_name: 'string',
        date_of_birth: '2019-12-27',
        date_formed: '2019-12-27',
        business_name: 'string',
        doing_business_as_names: ['string', 'string', 'string'],
        legal_structure: 'corporation',
        phone_numbers: [{ phone_number: 'string' }, { phone_number: 'string' }, { phone_number: 'string' }],
        email: 'string',
        website: 'string',
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
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
        identifications: [
          { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
          { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
          { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
        ],
        legal_entity_associations: [
          {
            relationship_types: ['beneficial_owner', 'control_person'],
            title: 'string',
            ownership_percentage: 0,
            child_legal_entity: {
              legal_entity_type: 'business',
              first_name: 'string',
              last_name: 'string',
              date_of_birth: '2019-12-27',
              date_formed: '2019-12-27',
              business_name: 'string',
              doing_business_as_names: ['string', 'string', 'string'],
              legal_structure: 'corporation',
              phone_numbers: [
                { phone_number: 'string' },
                { phone_number: 'string' },
                { phone_number: 'string' },
              ],
              email: 'string',
              website: 'string',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
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
              identifications: [
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
              ],
            },
            child_legal_entity_id: 'string',
          },
          {
            relationship_types: ['beneficial_owner', 'control_person'],
            title: 'string',
            ownership_percentage: 0,
            child_legal_entity: {
              legal_entity_type: 'business',
              first_name: 'string',
              last_name: 'string',
              date_of_birth: '2019-12-27',
              date_formed: '2019-12-27',
              business_name: 'string',
              doing_business_as_names: ['string', 'string', 'string'],
              legal_structure: 'corporation',
              phone_numbers: [
                { phone_number: 'string' },
                { phone_number: 'string' },
                { phone_number: 'string' },
              ],
              email: 'string',
              website: 'string',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
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
              identifications: [
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
              ],
            },
            child_legal_entity_id: 'string',
          },
          {
            relationship_types: ['beneficial_owner', 'control_person'],
            title: 'string',
            ownership_percentage: 0,
            child_legal_entity: {
              legal_entity_type: 'business',
              first_name: 'string',
              last_name: 'string',
              date_of_birth: '2019-12-27',
              date_formed: '2019-12-27',
              business_name: 'string',
              doing_business_as_names: ['string', 'string', 'string'],
              legal_structure: 'corporation',
              phone_numbers: [
                { phone_number: 'string' },
                { phone_number: 'string' },
                { phone_number: 'string' },
              ],
              email: 'string',
              website: 'string',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
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
              identifications: [
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
                { id_number: 'string', id_type: 'ar_cuil', issuing_country: 'string' },
              ],
            },
            child_legal_entity_id: 'string',
          },
        ],
      },
      legal_entity_id: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.connectionLegalEntities.retrieve('string');
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
      modernTreasury.connectionLegalEntities.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.connectionLegalEntities.update('string');
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
      modernTreasury.connectionLegalEntities.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.connectionLegalEntities.update(
        'string',
        { status: 'processing' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.connectionLegalEntities.list();
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
    await expect(
      modernTreasury.connectionLegalEntities.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.connectionLegalEntities.list(
        {
          after_cursor: 'string',
          connection_id: 'string',
          legal_entity_id: 'string',
          per_page: 0,
          status: 'completed',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
