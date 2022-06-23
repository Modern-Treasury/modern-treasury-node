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

  test('with minimal arguments', () => {
    // fails if no api key provided
    expect(() => {
      new ModernTreasury({ organizationId: 'my-organization-ID' });
    }).toThrow();

    // set api key via env var
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
    process.env['MODERN_TREASURY_API_KEY'] = 'env var api key';

    const client = new ModernTreasury({ apiKey: null, organizationId: 'my-organization-ID' });
    expect(client.apiKey).toBeNull();
  });
});
