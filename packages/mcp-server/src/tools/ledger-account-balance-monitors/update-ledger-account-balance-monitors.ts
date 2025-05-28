// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_balance_monitors',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/ledger_account_balance_monitors/{id}',
  operationId: 'updateLedgerAccountBalanceMonitor',
};

export const tool: Tool = {
  name: 'update_ledger_account_balance_monitors',
  description: 'Update a ledger account balance monitor.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'An optional, free-form description for internal use.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.ledgerAccountBalanceMonitors.update(id, body);
};

export default { metadata, tool, handler };
