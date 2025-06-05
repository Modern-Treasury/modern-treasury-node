// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_entries/{id}',
  operationId: 'getLedgerEntry',
};

export const tool: Tool = {
  name: 'retrieve_ledger_entries',
  description: 'Get details on a single ledger entry.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      show_balances: {
        type: 'boolean',
        description:
          'If true, response will include the balances attached to the ledger entry. If there is no balance available, null will be returned instead.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ledgerEntries.retrieve(id, body));
};

export default { metadata, tool, handler };
