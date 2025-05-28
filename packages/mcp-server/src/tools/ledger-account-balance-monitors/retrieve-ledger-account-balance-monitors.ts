// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_balance_monitors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_account_balance_monitors/{id}',
  operationId: 'getLedgerAccountBalanceMonitor',
};

export const tool: Tool = {
  name: 'retrieve_ledger_account_balance_monitors',
  description: 'Get details on a single ledger account balance monitor.',
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
  return client.ledgerAccountBalanceMonitors.retrieve(id);
};

export default { metadata, tool, handler };
