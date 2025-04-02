// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'incoming_payment_details',
  operation: 'read',
  tags: [],
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

export const handler = (client: ModernTreasury, args: any) => {
  const { id } = args;
  return client.incomingPaymentDetails.retrieve(id);
};

export default { metadata, tool, handler };
