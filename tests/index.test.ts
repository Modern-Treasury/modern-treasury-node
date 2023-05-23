// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '../index';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new ModernTreasury({
        baseURL: 'http://localhost:5000/custom/path/',
        organizationId: 'my-organization-ID',
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new ModernTreasury({
        baseURL: 'http://localhost:5000/custom/path',
        organizationId: 'my-organization-ID',
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new ModernTreasury({
      maxRetries: 1,
      organizationId: 'my-organization-ID',
      apiKey: 'my api key',
    });
    expect(client.maxRetries).toEqual(1);

    // default
    const client2 = new ModernTreasury({ organizationId: 'my-organization-ID', apiKey: 'my api key' });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with minimal arguments', () => {
    // set API Key via env var
    process.env['MODERN_TREASURY_API_KEY'] = 'env var api key';
    const client = new ModernTreasury({ organizationId: 'my-organization-ID' });
    expect(client.apiKey).toBe('env var api key');
    expect(client.organizationId).toBe('my-organization-ID');
  });

  test('with apiKey argument', () => {
    process.env['MODERN_TREASURY_API_KEY'] = 'env var api key';

    const client = new ModernTreasury({ apiKey: 'another api key', organizationId: 'my-organization-ID' });
    expect(client.apiKey).toBe('another api key');
  });

  test('with options argument', () => {
    process.env['MODERN_TREASURY_API_KEY'] = 'env var api key';

    // apiKey and custom options
    const client = new ModernTreasury({ apiKey: 'my api key', organizationId: 'my-organization-ID' });
    expect(client.apiKey).toBe('my api key');
  });

  test('with disabled authentication', () => {
    // fails if no API Key provided
    expect(() => {
      new ModernTreasury({ organizationId: 'my-organization-ID' });
    }).toThrow();
  });
});

describe('idempotency', () => {
  test('key can be set per-request', async () => {
    const client = new ModernTreasury({
      apiKey: 'my api key',
      organizationId: 'my-organization-ID',
      baseURL: 'http://127.0.0.1:4010',
    });
    await client.counterparties.create(
      {
        accounting: {},
        accounts: [{}, {}, {}],
        email: 'dev@stainlessapi.com',
        ledger_type: 'customer',
        metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        name: 'string',
        send_remittance_advice: true,
        taxpayer_identifier: 'string',
        'Idempotency-Key': 'string',
      },
      { idempotencyKey: 'my-idempotency-key' },
    );
  });
});
