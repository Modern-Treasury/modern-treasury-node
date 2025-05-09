// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'line_items',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_line_items',
  description: 'Get a list of line items',
  inputSchema: {
    type: 'object',
    properties: {
      itemizable_type: {
        type: 'string',
        enum: ['expected_payments', 'payment_orders'],
      },
      itemizable_id: {
        type: 'string',
      },
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { itemizable_type, itemizable_id, ...body } = args as any;
  return client.lineItems.list(itemizable_type, itemizable_id, body);
};

export default { metadata, tool, handler };
