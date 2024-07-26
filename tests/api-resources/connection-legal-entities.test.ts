// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connectionLegalEntities', () => {
  test('create: only required params', async () => {
    const responsePromise = client.connectionLegalEntities.create({ connection_id: 'connection_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.connectionLegalEntities.create({
      connection_id: 'connection_id',
      legal_entity: {
        legal_entity_type: 'business',
        risk_rating: 'low',
        first_name: 'first_name',
        last_name: 'last_name',
        date_of_birth: '2019-12-27',
        date_formed: '2019-12-27',
        business_name: 'business_name',
        doing_business_as_names: ['string', 'string', 'string'],
        legal_structure: 'corporation',
        phone_numbers: [
          { phone_number: 'phone_number' },
          { phone_number: 'phone_number' },
          { phone_number: 'phone_number' },
        ],
        email: 'email',
        website: 'website',
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        addresses: [
          {
            address_types: ['business', 'mailing', 'other'],
            line1: 'line1',
            line2: 'line2',
            locality: 'locality',
            region: 'region',
            postal_code: 'postal_code',
            country: 'country',
          },
          {
            address_types: ['business', 'mailing', 'other'],
            line1: 'line1',
            line2: 'line2',
            locality: 'locality',
            region: 'region',
            postal_code: 'postal_code',
            country: 'country',
          },
          {
            address_types: ['business', 'mailing', 'other'],
            line1: 'line1',
            line2: 'line2',
            locality: 'locality',
            region: 'region',
            postal_code: 'postal_code',
            country: 'country',
          },
        ],
        identifications: [
          { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
          { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
          { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
        ],
        legal_entity_associations: [
          {
            relationship_types: ['beneficial_owner', 'control_person'],
            title: 'title',
            ownership_percentage: 0,
            child_legal_entity: {
              legal_entity_type: 'business',
              risk_rating: 'low',
              first_name: 'first_name',
              last_name: 'last_name',
              date_of_birth: '2019-12-27',
              date_formed: '2019-12-27',
              business_name: 'business_name',
              doing_business_as_names: ['string', 'string', 'string'],
              legal_structure: 'corporation',
              phone_numbers: [
                { phone_number: 'phone_number' },
                { phone_number: 'phone_number' },
                { phone_number: 'phone_number' },
              ],
              email: 'email',
              website: 'website',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              addresses: [
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
              ],
              identifications: [
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
              ],
            },
            child_legal_entity_id: 'child_legal_entity_id',
          },
          {
            relationship_types: ['beneficial_owner', 'control_person'],
            title: 'title',
            ownership_percentage: 0,
            child_legal_entity: {
              legal_entity_type: 'business',
              risk_rating: 'low',
              first_name: 'first_name',
              last_name: 'last_name',
              date_of_birth: '2019-12-27',
              date_formed: '2019-12-27',
              business_name: 'business_name',
              doing_business_as_names: ['string', 'string', 'string'],
              legal_structure: 'corporation',
              phone_numbers: [
                { phone_number: 'phone_number' },
                { phone_number: 'phone_number' },
                { phone_number: 'phone_number' },
              ],
              email: 'email',
              website: 'website',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              addresses: [
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
              ],
              identifications: [
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
              ],
            },
            child_legal_entity_id: 'child_legal_entity_id',
          },
          {
            relationship_types: ['beneficial_owner', 'control_person'],
            title: 'title',
            ownership_percentage: 0,
            child_legal_entity: {
              legal_entity_type: 'business',
              risk_rating: 'low',
              first_name: 'first_name',
              last_name: 'last_name',
              date_of_birth: '2019-12-27',
              date_formed: '2019-12-27',
              business_name: 'business_name',
              doing_business_as_names: ['string', 'string', 'string'],
              legal_structure: 'corporation',
              phone_numbers: [
                { phone_number: 'phone_number' },
                { phone_number: 'phone_number' },
                { phone_number: 'phone_number' },
              ],
              email: 'email',
              website: 'website',
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
              addresses: [
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
                {
                  address_types: ['business', 'mailing', 'other'],
                  line1: 'line1',
                  line2: 'line2',
                  locality: 'locality',
                  region: 'region',
                  postal_code: 'postal_code',
                  country: 'country',
                },
              ],
              identifications: [
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
                { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
              ],
            },
            child_legal_entity_id: 'child_legal_entity_id',
          },
        ],
      },
      legal_entity_id: 'legal_entity_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.connectionLegalEntities.retrieve('id');
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
      client.connectionLegalEntities.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.connectionLegalEntities.update('id');
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
      client.connectionLegalEntities.update('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectionLegalEntities.update(
        'id',
        { status: 'processing' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.connectionLegalEntities.list();
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
    await expect(client.connectionLegalEntities.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectionLegalEntities.list(
        {
          after_cursor: 'after_cursor',
          connection_id: 'connection_id',
          legal_entity_id: 'legal_entity_id',
          per_page: 0,
          status: 'completed',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
