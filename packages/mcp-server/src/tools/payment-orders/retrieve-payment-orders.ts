// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_orders',
  operation: 'read',
  tags: [],
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
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { id } = args;
  return client.paymentOrders.retrieve(id);
};

export default { metadata, tool, handler };
