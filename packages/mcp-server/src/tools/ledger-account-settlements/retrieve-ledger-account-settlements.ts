// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_settlements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_account_settlements/{id}',
  operationId: 'getLedgerAccountSettlement',
};

export const tool: Tool = {
  name: 'retrieve_ledger_account_settlements',
  description: 'Get details on a single ledger account settlement.',
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
  return asTextContentResult(await client.ledgerAccountSettlements.retrieve(id));
};

export default { metadata, tool, handler };
