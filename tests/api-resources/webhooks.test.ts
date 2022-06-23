// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource webhooks', () => {
  it.each([
    ['foo', '08ba357e274f528065766c770a639abf6809b39ccfd37c2a3157c7f51954da0a'],
    ['{"foo":"bar"}', '57e14f6f354543f0101fb06ea24df7731d90087b76651e3497345e22a3622940'],
    [
      '{"foo":"bar","bar":"baz","a": true}',
      'ec1c86d16075e6937fc26d55b7dc60bac9b1178a2f714312f7c5cb13a319b0ac',
    ],
    [
      '{"a":{"b":{"c":{"d":[null,1,true,false,["foo",{"bar":[true, false]}]]}}}}',
      '39b6fc0f5b02a5aefbdd7fb337245b4209036334e837d8c5b6a4092965ebc0a5',
    ],
  ])('getSignature', (payload, expected) => {
    const signature = modernTreasury.webhooks.getSignature(payload, { key: 'foo' });
    expect(signature).toEqual(expected);
  });

  it('getSignature: Throws an error when the key has not been set', () => {
    const client = new ModernTreasury({
      apiKey: 'something1234',
      baseURL: 'http://127.0.0.1:4010',
      organizationId: 'c40c0b40-11d3-42ee-8f2e-18ee8b8239aa',
    });
    expect(() => client.webhooks.getSignature('bar')).toThrowError(/webhook key/);
  });

  it('getSignature: Uses the webhook key set at the client level', () => {
    const client = new ModernTreasury({
      apiKey: 'something1234',
      baseURL: 'http://127.0.0.1:4010',
      organizationId: 'c40c0b40-11d3-42ee-8f2e-18ee8b8239aa',
      webhookKey: 'hello, world',
    });
    const payload = '{"foo":"bar"}';
    const signature = client.webhooks.getSignature(payload);
    expect(signature).toEqual('07e118b4a9818c9242baf9009e76a78c29aeb015da93f600d514b77185247069');

    const otherSignature = modernTreasury.webhooks.getSignature(payload, { key: 'foo' });
    expect(otherSignature).not.toEqual(signature);
  });

  it('validateSignature: Throws an error when the X-Signature header is not present', () => {
    expect(() =>
      modernTreasury.webhooks.validateSignature('bar', /* headers */ {}, { key: 'foo' }),
    ).toThrowError('Could not find an X-Signature header');
  });

  it('validateSignature: Correctly verifies against the expected signature', () => {
    const payload = '{"foo":"bar"}';
    expect(
      modernTreasury.webhooks.validateSignature(
        payload,
        /* headers */ { 'X-Signature': '57e14f6f354543f0101fb06ea24df7731d90087b76651e3497345e22a3622940' },
        {
          key: 'foo',
        },
      ),
    ).toBe(true);

    // lowercased header
    expect(
      modernTreasury.webhooks.validateSignature(
        payload,
        /* headers */ { 'x-signature': '57e14f6f354543f0101fb06ea24df7731d90087b76651e3497345e22a3622940' },
        {
          key: 'foo',
        },
      ),
    ).toBe(true);

    // modified payload
    expect(
      modernTreasury.webhooks.validateSignature(
        payload + 'foo',
        /* headers */ { 'X-Signature': '57e14f6f354543f0101fb06ea24df7731d90087b76651e3497345e22a3622940' },
        {
          key: 'foo',
        },
      ),
    ).toBe(false);

    // modified signature
    expect(
      modernTreasury.webhooks.validateSignature(
        payload,
        /* headers */ { 'X-Signature': 'hello' },
        {
          key: 'foo',
        },
      ),
    ).toBe(false);
  });
});
