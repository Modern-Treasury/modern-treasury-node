// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_flows',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/payment_flows/{id}',
  operationId: 'updatePaymentFlow',
};

export const tool: Tool = {
  name: 'update_payment_flows',
  description: 'update payment_flow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'Required. The updated status of the payment flow. Can only be used to mark a flow as `cancelled`.',
        enum: ['cancelled'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.paymentFlows.update(id, body));
};

export default { metadata, tool, handler };
