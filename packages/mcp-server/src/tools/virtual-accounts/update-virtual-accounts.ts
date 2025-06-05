// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'virtual_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/virtual_accounts/{id}',
  operationId: 'updateVirtualAccount',
};

export const tool: Tool = {
  name: 'update_virtual_accounts',
  description: 'update virtual_account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
        description: "The ledger account that you'd like to link to the virtual account.",
      },
      metadata: {
        type: 'object',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.virtualAccounts.update(id, body));
};

export default { metadata, tool, handler };
