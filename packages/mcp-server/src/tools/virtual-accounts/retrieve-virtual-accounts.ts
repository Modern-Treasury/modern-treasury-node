// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'virtual_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/virtual_accounts/{id}',
  operationId: 'getVirtualAccount',
};

export const tool: Tool = {
  name: 'retrieve_virtual_accounts',
  description: 'get virtual_account',
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
  return asTextContentResult(await client.virtualAccounts.retrieve(id));
};

export default { metadata, tool, handler };
