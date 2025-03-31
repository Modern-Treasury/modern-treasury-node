// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

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

export const handler = (client: ModernTreasury, args: any) => {
  const { id } = args;
  return client.paymentReferences.retrieve(id);
};

export default { tool, handler };
