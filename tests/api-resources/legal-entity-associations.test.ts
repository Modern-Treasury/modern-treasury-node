// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource legalEntityAssociations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.legalEntityAssociations.create({
      parent_legal_entity_id: 'parent_legal_entity_id',
      relationship_types: ['beneficial_owner'],
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
    const response = await client.legalEntityAssociations.create({
      parent_legal_entity_id: 'parent_legal_entity_id',
      relationship_types: ['beneficial_owner'],
      child_legal_entity: {
        addresses: [
          {
            country: 'country',
            line1: 'line1',
            locality: 'locality',
            postal_code: 'postal_code',
            region: 'region',
            address_types: ['business'],
            line2: 'line2',
          },
        ],
        business_name: 'business_name',
        date_formed: '2019-12-27',
        date_of_birth: '2019-12-27',
        doing_business_as_names: ['string'],
        email: 'email',
        first_name: 'first_name',
        identifications: [{ id_number: 'id_number', id_type: 'ar_cuil', issuing_country: 'issuing_country' }],
        last_name: 'last_name',
        legal_entity_type: 'business',
        legal_structure: 'corporation',
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        phone_numbers: [{ phone_number: 'phone_number' }],
        risk_rating: 'low',
        website: 'website',
      },
      child_legal_entity_id: 'child_legal_entity_id',
      ownership_percentage: 0,
      title: 'title',
    });
  });
});
