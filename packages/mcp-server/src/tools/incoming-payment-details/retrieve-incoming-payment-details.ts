// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'incoming_payment_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/incoming_payment_details/{id}',
  operationId: 'getIncomingPaymentDetail',
};

export const tool: Tool = {
  name: 'retrieve_incoming_payment_details',
  description: 'Get an existing Incoming Payment Detail.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.incomingPaymentDetails.retrieve(id));
};

export default { metadata, tool, handler };
