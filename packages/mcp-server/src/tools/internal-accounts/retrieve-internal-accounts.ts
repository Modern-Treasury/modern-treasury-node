// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_internal_accounts',
  description: 'get internal account',
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
  return client.internalAccounts.retrieve(id);
};

export default { metadata, tool, handler };
