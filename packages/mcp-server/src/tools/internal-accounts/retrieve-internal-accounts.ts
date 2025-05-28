// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/internal_accounts/{id}',
  operationId: 'getInternalAccount',
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

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.internalAccounts.retrieve(id);
};

export default { metadata, tool, handler };
