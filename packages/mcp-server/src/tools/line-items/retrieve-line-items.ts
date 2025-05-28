// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/{itemizable_type}/{itemizable_id}/line_items/{id}',
  operationId: 'getLineItem',
};

export const tool: Tool = {
  name: 'retrieve_line_items',
  description: 'Get a single line item',
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
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { itemizable_type, itemizable_id, id, ...body } = args as any;
  return client.lineItems.retrieve(itemizable_type, itemizable_id, id);
};

export default { metadata, tool, handler };
