// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'incoming_payment_details',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/incoming_payment_details/{id}',
  operationId: 'updateIncomingPaymentDetail',
};

export const tool: Tool = {
  name: 'update_incoming_payment_details',
  description: 'Update an existing Incoming Payment Detail.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.incomingPaymentDetails.update(id, body));
};

export default { metadata, tool, handler };
