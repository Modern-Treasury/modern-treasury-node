// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'retrieve_bulk_results',
  description: 'get bulk_result',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id } = args;
    return client.bulkResults.retrieve(id);
  },
});

registerApiMethod({
  name: 'list_bulk_results',
  description: 'list bulk_results',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      entity_id: {
        type: 'string',
        description: 'Unique identifier for the result entity object.',
      },
      entity_type: {
        type: 'string',
        description:
          'The type of the request that created this result. bulk_request is the only supported `request_type`',
        enum: [
          'payment_order',
          'ledger_account',
          'ledger_transaction',
          'expected_payment',
          'transaction',
          'entity_link',
          'bulk_error',
        ],
      },
      per_page: {
        type: 'integer',
      },
      request_id: {
        type: 'string',
        description:
          'Unique identifier for the request that created this bulk result. This is the ID of the bulk request when `request_type` is bulk_request',
      },
      request_type: {
        type: 'string',
        description:
          'The type of the request that created this result. bulk_request is the only supported `request_type`',
        enum: ['bulk_request'],
      },
      status: {
        type: 'string',
        description: 'One of successful or failed.',
        enum: ['pending', 'successful', 'failed'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.bulkResults.list(body);
  },
});
