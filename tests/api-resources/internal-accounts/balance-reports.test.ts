// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource balanceReports', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.internalAccounts.balanceReports.create('string', {
      as_of_date: '2019-12-27',
      as_of_time: 'string',
      balance_report_type: 'intraday',
      balances: [
        { amount: 0, balance_type: 'closing_available', vendor_code: 'string', vendor_code_type: 'string' },
        { amount: 0, balance_type: 'closing_available', vendor_code: 'string', vendor_code_type: 'string' },
        { amount: 0, balance_type: 'closing_available', vendor_code: 'string', vendor_code_type: 'string' },
      ],
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
    const response = await modernTreasury.internalAccounts.balanceReports.create('string', {
      as_of_date: '2019-12-27',
      as_of_time: 'string',
      balance_report_type: 'intraday',
      balances: [
        { amount: 0, balance_type: 'closing_available', vendor_code: 'string', vendor_code_type: 'string' },
        { amount: 0, balance_type: 'closing_available', vendor_code: 'string', vendor_code_type: 'string' },
        { amount: 0, balance_type: 'closing_available', vendor_code: 'string', vendor_code_type: 'string' },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.internalAccounts.balanceReports.retrieve('string', 'string');
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
      modernTreasury.internalAccounts.balanceReports.retrieve('string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.internalAccounts.balanceReports.list('string');
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
      modernTreasury.internalAccounts.balanceReports.list('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.balanceReports.list(
        'string',
        { after_cursor: 'string', as_of_date: '2019-12-27', balance_report_type: 'intraday', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = modernTreasury.internalAccounts.balanceReports.del('string', 'string');
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
    await expect(
      modernTreasury.internalAccounts.balanceReports.del('string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
