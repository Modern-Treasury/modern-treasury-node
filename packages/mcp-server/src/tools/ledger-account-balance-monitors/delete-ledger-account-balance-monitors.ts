// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_balance_monitors',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/ledger_account_balance_monitors/{id}',
  operationId: 'deleteLedgerAccountBalanceMonitor',
};

export const tool: Tool = {
  name: 'delete_ledger_account_balance_monitors',
  description: 'Delete a ledger account balance monitor.',
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
  return asTextContentResult(await client.ledgerAccountBalanceMonitors.del(id));
};

export default { metadata, tool, handler };
