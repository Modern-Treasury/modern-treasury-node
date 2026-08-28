// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationID: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource legalEntityAssociations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.legalEntityAssociations.create({
      child_legal_entity_id: 'child_legal_entity_id',
      parent_legal_entity_id: 'parent_legal_entity_id',
      relationship_types: ['authorized_signer'],
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
      child_legal_entity_id: 'child_legal_entity_id',
      parent_legal_entity_id: 'parent_legal_entity_id',
      relationship_types: ['authorized_signer'],
      ownership_percentage: 0,
      title: 'title',
    });
  });

  test('delete', async () => {
    const responsePromise = client.legalEntityAssociations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
