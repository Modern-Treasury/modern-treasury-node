// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_orders.reversals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_orders/{payment_order_id}/reversals',
  operationId: 'listReversals',
};

export const tool: Tool = {
  name: 'list_payment_orders_reversals',
  description: 'Get a list of all reversals of a payment order.',
  inputSchema: {
    type: 'object',
    properties: {
      payment_order_id: {
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

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { payment_order_id, ...body } = args as any;
  return asTextContentResult(await client.paymentOrders.reversals.list(payment_order_id, body));
};

export default { metadata, tool, handler };
