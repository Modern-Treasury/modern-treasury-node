// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_orders/{id}',
  operationId: 'getPaymentOrder',
};

export const tool: Tool = {
  name: 'retrieve_payment_orders',
  description: 'Get details on a single payment order',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.paymentOrders.retrieve(id));
};

export default { metadata, tool, handler };
