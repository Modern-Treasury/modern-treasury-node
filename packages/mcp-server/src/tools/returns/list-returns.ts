// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'returns',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_returns',
  description: 'Get a list of returns.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
        description:
          'Specify `counterparty_id` if you wish to see returns that occurred with a specific counterparty.',
      },
      internal_account_id: {
        type: 'string',
        description: 'Specify `internal_account_id` if you wish to see returns to/from a specific account.',
      },
      per_page: {
        type: 'integer',
      },
      returnable_id: {
        type: 'string',
        description: 'The ID of a valid returnable. Must be accompanied by `returnable_type`.',
      },
      returnable_type: {
        type: 'string',
        description:
          'One of `payment_order`, `paper_item`, `reversal`, or `incoming_payment_detail`. Must be accompanied by `returnable_id`.',
        enum: ['incoming_payment_detail', 'paper_item', 'payment_order', 'return', 'reversal'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.returns.list(body);
};

export default { metadata, tool, handler };
