// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_references',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_payment_references',
  description: 'get payment_reference',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.paymentReferences.retrieve(id);
};

export default { metadata, tool, handler };
