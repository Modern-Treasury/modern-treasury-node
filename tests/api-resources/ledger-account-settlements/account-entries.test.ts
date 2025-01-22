// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const client = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountEntries', () => {
  test('update: only required params', async () => {
    const responsePromise = client.ledgerAccountSettlements.accountEntries.update('id', {
      ledger_entry_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.ledgerAccountSettlements.accountEntries.update('id', {
      ledger_entry_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  test('del: only required params', async () => {
    const responsePromise = client.ledgerAccountSettlements.accountEntries.del('id', {
      ledger_entry_ids: [{}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: required and optional params', async () => {
    const response = await client.ledgerAccountSettlements.accountEntries.del('id', {
      ledger_entry_ids: [{}],
    });
  });
});
