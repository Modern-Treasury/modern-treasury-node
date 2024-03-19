// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource legalEntityAssociations', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.legalEntityAssociations.create({
      relationship_types: ['beneficial_owner', 'control_person'],
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
    const response = await modernTreasury.legalEntityAssociations.create({
      relationship_types: ['beneficial_owner', 'control_person'],
      associated_legal_entity: {
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
      },
      associated_legal_entity_id: 'string',
      associator_legal_entity_id: 'string',
      ownership_percentage: 0,
      title: 'string',
    });
  });
});
