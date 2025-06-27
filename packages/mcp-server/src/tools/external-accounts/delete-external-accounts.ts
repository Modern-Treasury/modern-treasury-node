// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'external_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/external_accounts/{id}',
  operationId: 'deleteExternalAccount',
};

export const tool: Tool = {
  name: 'delete_external_accounts',
  description: 'delete external account',
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
  const response = await client.externalAccounts.del(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
