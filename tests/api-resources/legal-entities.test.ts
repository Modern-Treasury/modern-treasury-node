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
          country: 'country',
          line1: 'line1',
          locality: 'locality',
          postal_code: 'postal_code',
          region: 'region',
          address_types: ['business'],
          line2: 'line2',
        },
      ],
      bank_settings: {
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        backup_withholding_percentage: 0,
        created_at: '2019-12-27T18:11:19.117Z',
        discarded_at: '2019-12-27T18:11:19.117Z',
        enable_backup_withholding: true,
        live_mode: true,
        object: 'object',
        privacy_opt_out: true,
        regulation_o: true,
        updated_at: '2019-12-27T18:11:19.117Z',
      },
      business_name: 'business_name',
      citizenship_country: 'citizenship_country',
      compliance_details: {
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        created_at: '2019-12-27T18:11:19.117Z',
        discarded_at: '2019-12-27T18:11:19.117Z',
        issuer: 'issuer',
        live_mode: true,
        object: 'object',
        token_expires_at: '2019-12-27T18:11:19.117Z',
        token_issued_at: '2019-12-27T18:11:19.117Z',
        token_url: 'token_url',
        updated_at: '2019-12-27T18:11:19.117Z',
        validated: true,
        validated_at: '2019-12-27T18:11:19.117Z',
      },
      date_formed: '2019-12-27',
      date_of_birth: '2019-12-27',
      doing_business_as_names: ['string'],
      email: 'email',
      first_name: 'first_name',
      identifications: [
        {
          id_number: 'id_number',
          id_type: 'ar_cuil',
          expiration_date: '2019-12-27',
          issuing_country: 'issuing_country',
          issuing_region: 'issuing_region',
        },
      ],
      industry_classifications: [
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          classification_codes: ['string'],
          classification_type: 'anzsic',
          created_at: '2019-12-27T18:11:19.117Z',
          discarded_at: '2019-12-27T18:11:19.117Z',
          live_mode: true,
          object: 'object',
          updated_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      last_name: 'last_name',
      legal_entity_associations: [
        {
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
            bank_settings: {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              backup_withholding_percentage: 0,
              created_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              enable_backup_withholding: true,
              live_mode: true,
              object: 'object',
              privacy_opt_out: true,
              regulation_o: true,
              updated_at: '2019-12-27T18:11:19.117Z',
            },
            business_name: 'business_name',
            citizenship_country: 'citizenship_country',
            compliance_details: {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              created_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              issuer: 'issuer',
              live_mode: true,
              object: 'object',
              token_expires_at: '2019-12-27T18:11:19.117Z',
              token_issued_at: '2019-12-27T18:11:19.117Z',
              token_url: 'token_url',
              updated_at: '2019-12-27T18:11:19.117Z',
              validated: true,
              validated_at: '2019-12-27T18:11:19.117Z',
            },
            date_formed: '2019-12-27',
            date_of_birth: '2019-12-27',
            doing_business_as_names: ['string'],
            email: 'email',
            first_name: 'first_name',
            identifications: [
              {
                id_number: 'id_number',
                id_type: 'ar_cuil',
                expiration_date: '2019-12-27',
                issuing_country: 'issuing_country',
                issuing_region: 'issuing_region',
              },
            ],
            industry_classifications: [
              {
                id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
                classification_codes: ['string'],
                classification_type: 'anzsic',
                created_at: '2019-12-27T18:11:19.117Z',
                discarded_at: '2019-12-27T18:11:19.117Z',
                live_mode: true,
                object: 'object',
                updated_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            last_name: 'last_name',
            legal_entity_type: 'business',
            legal_structure: 'corporation',
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            middle_name: 'middle_name',
            phone_numbers: [{ phone_number: 'phone_number' }],
            politically_exposed_person: true,
            preferred_name: 'preferred_name',
            prefix: 'prefix',
            risk_rating: 'low',
            suffix: 'suffix',
            wealth_and_employment_details: {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              annual_income: 0,
              created_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              employer_country: 'employer_country',
              employer_name: 'employer_name',
              employer_state: 'employer_state',
              employment_status: 'employed',
              income_country: 'income_country',
              income_source: 'family_support',
              income_state: 'income_state',
              industry: 'accounting',
              live_mode: true,
              object: 'object',
              occupation: 'consulting',
              source_of_funds: 'alimony',
              updated_at: '2019-12-27T18:11:19.117Z',
              wealth_source: 'business_sale',
            },
            website: 'website',
          },
          child_legal_entity_id: 'child_legal_entity_id',
          ownership_percentage: 0,
          title: 'title',
        },
      ],
      legal_structure: 'corporation',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      middle_name: 'middle_name',
      phone_numbers: [{ phone_number: 'phone_number' }],
      politically_exposed_person: true,
      preferred_name: 'preferred_name',
      prefix: 'prefix',
      risk_rating: 'low',
      suffix: 'suffix',
      wealth_and_employment_details: {
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        annual_income: 0,
        created_at: '2019-12-27T18:11:19.117Z',
        discarded_at: '2019-12-27T18:11:19.117Z',
        employer_country: 'employer_country',
        employer_name: 'employer_name',
        employer_state: 'employer_state',
        employment_status: 'employed',
        income_country: 'income_country',
        income_source: 'family_support',
        income_state: 'income_state',
        industry: 'accounting',
        live_mode: true,
        object: 'object',
        occupation: 'consulting',
        source_of_funds: 'alimony',
        updated_at: '2019-12-27T18:11:19.117Z',
        wealth_source: 'business_sale',
      },
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
          bank_settings: {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            backup_withholding_percentage: 0,
            created_at: '2019-12-27T18:11:19.117Z',
            discarded_at: '2019-12-27T18:11:19.117Z',
            enable_backup_withholding: true,
            live_mode: true,
            object: 'object',
            privacy_opt_out: true,
            regulation_o: true,
            updated_at: '2019-12-27T18:11:19.117Z',
          },
          business_name: 'business_name',
          citizenship_country: 'citizenship_country',
          compliance_details: {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            created_at: '2019-12-27T18:11:19.117Z',
            discarded_at: '2019-12-27T18:11:19.117Z',
            issuer: 'issuer',
            live_mode: true,
            object: 'object',
            token_expires_at: '2019-12-27T18:11:19.117Z',
            token_issued_at: '2019-12-27T18:11:19.117Z',
            token_url: 'token_url',
            updated_at: '2019-12-27T18:11:19.117Z',
            validated: true,
            validated_at: '2019-12-27T18:11:19.117Z',
          },
          date_formed: '2019-12-27',
          date_of_birth: '2019-12-27',
          doing_business_as_names: ['string'],
          email: 'email',
          first_name: 'first_name',
          identifications: [
            {
              id_number: 'id_number',
              id_type: 'ar_cuil',
              expiration_date: '2019-12-27',
              issuing_country: 'issuing_country',
              issuing_region: 'issuing_region',
            },
          ],
          industry_classifications: [
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              classification_codes: ['string'],
              classification_type: 'anzsic',
              created_at: '2019-12-27T18:11:19.117Z',
              discarded_at: '2019-12-27T18:11:19.117Z',
              live_mode: true,
              object: 'object',
              updated_at: '2019-12-27T18:11:19.117Z',
            },
          ],
          last_name: 'last_name',
          legal_structure: 'corporation',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          middle_name: 'middle_name',
          phone_numbers: [{ phone_number: 'phone_number' }],
          politically_exposed_person: true,
          preferred_name: 'preferred_name',
          prefix: 'prefix',
          risk_rating: 'low',
          suffix: 'suffix',
          wealth_and_employment_details: {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            annual_income: 0,
            created_at: '2019-12-27T18:11:19.117Z',
            discarded_at: '2019-12-27T18:11:19.117Z',
            employer_country: 'employer_country',
            employer_name: 'employer_name',
            employer_state: 'employer_state',
            employment_status: 'employed',
            income_country: 'income_country',
            income_source: 'family_support',
            income_state: 'income_state',
            industry: 'accounting',
            live_mode: true,
            object: 'object',
            occupation: 'consulting',
            source_of_funds: 'alimony',
            updated_at: '2019-12-27T18:11:19.117Z',
            wealth_source: 'business_sale',
          },
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
