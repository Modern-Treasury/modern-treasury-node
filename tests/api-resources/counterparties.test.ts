// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource counterparties', () => {
  test('create: only required params', async () => {
    const responsePromise = client.counterparties.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.counterparties.create({
      name: 'name',
      accounting: { type: 'customer' },
      accounts: [
        {
          account_type: 'cash',
          party_type: 'business',
          party_address: {
            line1: 'line1',
            line2: 'line2',
            locality: 'locality',
            region: 'region',
            postal_code: 'postal_code',
            country: 'country',
          },
          name: 'name',
          account_details: [
            { account_number: 'account_number', account_number_type: 'au_number' },
            { account_number: 'account_number', account_number_type: 'au_number' },
            { account_number: 'account_number', account_number_type: 'au_number' },
          ],
          routing_details: [
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          party_name: 'party_name',
          party_identifier: 'party_identifier',
          ledger_account: {
            name: 'name',
            description: 'description',
            normal_balance: 'credit',
            ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            currency: 'currency',
            currency_exponent: 0,
            ledger_account_category_ids: [
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ],
            ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ledgerable_type: 'counterparty',
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          plaid_processor_token: 'plaid_processor_token',
          contact_details: [
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
          ],
        },
        {
          account_type: 'cash',
          party_type: 'business',
          party_address: {
            line1: 'line1',
            line2: 'line2',
            locality: 'locality',
            region: 'region',
            postal_code: 'postal_code',
            country: 'country',
          },
          name: 'name',
          account_details: [
            { account_number: 'account_number', account_number_type: 'au_number' },
            { account_number: 'account_number', account_number_type: 'au_number' },
            { account_number: 'account_number', account_number_type: 'au_number' },
          ],
          routing_details: [
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          party_name: 'party_name',
          party_identifier: 'party_identifier',
          ledger_account: {
            name: 'name',
            description: 'description',
            normal_balance: 'credit',
            ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            currency: 'currency',
            currency_exponent: 0,
            ledger_account_category_ids: [
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ],
            ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ledgerable_type: 'counterparty',
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          plaid_processor_token: 'plaid_processor_token',
          contact_details: [
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
          ],
        },
        {
          account_type: 'cash',
          party_type: 'business',
          party_address: {
            line1: 'line1',
            line2: 'line2',
            locality: 'locality',
            region: 'region',
            postal_code: 'postal_code',
            country: 'country',
          },
          name: 'name',
          account_details: [
            { account_number: 'account_number', account_number_type: 'au_number' },
            { account_number: 'account_number', account_number_type: 'au_number' },
            { account_number: 'account_number', account_number_type: 'au_number' },
          ],
          routing_details: [
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'routing_number', routing_number_type: 'aba', payment_type: 'ach' },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          party_name: 'party_name',
          party_identifier: 'party_identifier',
          ledger_account: {
            name: 'name',
            description: 'description',
            normal_balance: 'credit',
            ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            currency: 'currency',
            currency_exponent: 0,
            ledger_account_category_ids: [
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ],
            ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ledgerable_type: 'counterparty',
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          plaid_processor_token: 'plaid_processor_token',
          contact_details: [
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
            { contact_identifier: 'contact_identifier', contact_identifier_type: 'email' },
          ],
        },
      ],
      email: 'dev@stainlessapi.com',
      ledger_type: 'customer',
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
      legal_entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      send_remittance_advice: true,
      taxpayer_identifier: 'taxpayer_identifier',
      verification_status: 'denied',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.counterparties.retrieve('id');
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
    await expect(client.counterparties.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.counterparties.update('id');
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
    await expect(client.counterparties.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.counterparties.update(
        'id',
        {
          email: 'dev@stainlessapi.com',
          legal_entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { foo: 'string' },
          name: 'name',
          send_remittance_advice: true,
          taxpayer_identifier: 'taxpayer_identifier',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.counterparties.list();
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
    await expect(client.counterparties.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.counterparties.list(
        {
          after_cursor: 'after_cursor',
          created_at_lower_bound: '2019-12-27T18:11:19.117Z',
          created_at_upper_bound: '2019-12-27T18:11:19.117Z',
          email: 'dev@stainlessapi.com',
          legal_entity_id: 'legal_entity_id',
          metadata: { foo: 'string' },
          name: 'name',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = client.counterparties.del('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.counterparties.del('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('collectAccount: only required params', async () => {
    const responsePromise = client.counterparties.collectAccount('id', { direction: 'credit' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('collectAccount: required and optional params', async () => {
    const response = await client.counterparties.collectAccount('id', {
      direction: 'credit',
      custom_redirect: 'https://example.com',
      fields: ['name', 'nameOnAccount', 'taxpayerIdentifier'],
      send_email: true,
    });
  });
});
