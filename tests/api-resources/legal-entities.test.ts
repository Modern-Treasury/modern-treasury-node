// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource legalEntities', () => {
  test('create: only required params', async () => {
    const responsePromise = client.legalEntities.create({ legal_entity_type: 'business' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.legalEntities.create({
      legal_entity_type: 'business',
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
      business_name: 'business_name',
      date_formed: '2019-12-27',
      date_of_birth: '2019-12-27',
      doing_business_as_names: ['string', 'string', 'string'],
      email: 'email',
      first_name: 'first_name',
      identifications: [
        { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
        { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
        { id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' },
      ],
      last_name: 'last_name',
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
      legal_structure: 'corporation',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      phone_numbers: [
        { phone_number: 'phone_number' },
        { phone_number: 'phone_number' },
        { phone_number: 'phone_number' },
      ],
      risk_rating: 'low',
      website: 'website',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.legalEntities.retrieve('id');
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
    await expect(client.legalEntities.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.legalEntities.update('id');
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
    await expect(client.legalEntities.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.legalEntities.update(
        'id',
        {
          business_name: 'business_name',
          date_formed: '2019-12-27',
          date_of_birth: '2019-12-27',
          doing_business_as_names: ['string', 'string', 'string'],
          email: 'email',
          first_name: 'first_name',
          last_name: 'last_name',
          legal_structure: 'corporation',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          phone_numbers: [
            { phone_number: 'phone_number' },
            { phone_number: 'phone_number' },
            { phone_number: 'phone_number' },
          ],
          risk_rating: 'low',
          website: 'website',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.legalEntities.list();
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
    await expect(client.legalEntities.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.legalEntities.list(
        {
          after_cursor: 'after_cursor',
          legal_entity_type: 'business',
          metadata: { foo: 'string' },
          per_page: 0,
          show_deleted: 'show_deleted',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
