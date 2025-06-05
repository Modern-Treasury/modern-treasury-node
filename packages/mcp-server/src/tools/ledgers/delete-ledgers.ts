// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledgers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/ledgers/{id}',
  operationId: 'deleteLedger',
};

export const tool: Tool = {
  name: 'delete_ledgers',
  description: 'Delete a ledger.',
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
  return asTextContentResult(await client.ledgers.del(id));
};

export default { metadata, tool, handler };
