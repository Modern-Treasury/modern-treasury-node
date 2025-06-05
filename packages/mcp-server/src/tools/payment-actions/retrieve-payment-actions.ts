// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_actions/{id}',
};

export const tool: Tool = {
  name: 'retrieve_payment_actions',
  description: 'Get details on a single payment action.',
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
  return asTextContentResult(await client.paymentActions.retrieve(id));
};

export default { metadata, tool, handler };
