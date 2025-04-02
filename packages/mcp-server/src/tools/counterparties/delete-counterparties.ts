// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'counterparties',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_counterparties',
  description: 'Deletes a given counterparty.',
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
  return client.counterparties.del(id);
};

export default { metadata, tool, handler };
