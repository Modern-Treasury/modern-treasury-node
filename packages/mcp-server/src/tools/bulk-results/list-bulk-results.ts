// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'bulk_results',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
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
          'transaction_line_item',
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
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.bulkResults.list(body);
};

export default { metadata, tool, handler };
