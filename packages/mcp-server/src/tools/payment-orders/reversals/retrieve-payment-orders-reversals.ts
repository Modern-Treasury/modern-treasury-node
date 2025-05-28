// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_orders.reversals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_orders/{payment_order_id}/reversals/{reversal_id}',
  operationId: 'getReversal',
};

export const tool: Tool = {
  name: 'retrieve_payment_orders_reversals',
  description: 'Get details on a single reversal of a payment order.',
  inputSchema: {
    type: 'object',
    properties: {
      payment_order_id: {
        type: 'string',
      },
      reversal_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { payment_order_id, reversal_id, ...body } = args as any;
  return client.paymentOrders.reversals.retrieve(payment_order_id, reversal_id);
};

export default { metadata, tool, handler };
