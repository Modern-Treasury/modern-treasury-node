// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'line_items',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/{itemizable_type}/{itemizable_id}/line_items/{id}',
  operationId: 'updateLineItem',
};

export const tool: Tool = {
  name: 'update_line_items',
  description: 'update line item',
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
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { itemizable_type, itemizable_id, id, ...body } = args as any;
  return asTextContentResult(await client.lineItems.update(itemizable_type, itemizable_id, id, body));
};

export default { metadata, tool, handler };
