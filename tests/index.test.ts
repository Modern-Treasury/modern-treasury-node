// File generated from our OpenAPI spec by Stainless.

import { Headers } from 'modern-treasury/core';
import ModernTreasury from 'modern-treasury';
import { Response } from 'modern-treasury/_shims/fetch';

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

  describe('defaultHeaders', () => {
    const client = new ModernTreasury({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      organizationId: 'my-organization-ID',
      apiKey: 'my api key',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['X-My-Default-Header']).toEqual('2');
    });

    test('can be overriden with `undefined`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });

    test('can be overriden with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new ModernTreasury({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        organizationId: 'my-organization-ID',
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new ModernTreasury({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        organizationId: 'my-organization-ID',
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new ModernTreasury({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        organizationId: 'my-organization-ID',
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new ModernTreasury({
      baseURL: 'http://localhost:5000/',
      organizationId: 'my-organization-ID',
      apiKey: 'my api key',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
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
    await client.counterparties.create({ name: 'string' }, { idempotencyKey: 'my-idempotency-key' });
  });
});
