// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';
const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource events', () => {
  test('retrieve', async () => {
    const response = await modernTreasury.events.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.events.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await modernTreasury.events.list();
  });

  test('list: required and optional params', async () => {
    const response = await modernTreasury.events.list({
      after_cursor: 'string',
      per_page: 0,
      event_time_start: '2019-12-27T18:11:19.117Z',
      event_time_end: '2019-12-27T18:11:19.117Z',
      resource: 'string',
      entity_id: 'string',
      event_name: 'string',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.events.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.events.list(
        {
          after_cursor: 'string',
          per_page: 0,
          event_time_start: '2019-12-27T18:11:19.117Z',
          event_time_end: '2019-12-27T18:11:19.117Z',
          resource: 'string',
          entity_id: 'string',
          event_name: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
