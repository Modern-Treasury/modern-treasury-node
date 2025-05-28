// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'virtual_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/virtual_accounts/{id}',
  operationId: 'deleteVirtualAccount',
};

export const tool: Tool = {
  name: 'delete_virtual_accounts',
  description: 'delete virtual_account',
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
  return client.virtualAccounts.del(id);
};

export default { metadata, tool, handler };
