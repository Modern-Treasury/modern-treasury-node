// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}',
  operationId: 'removeLedgerAccountFromLedgerAccountCategory',
};

export const tool: Tool = {
  name: 'remove_ledger_account_ledger_account_categories',
  description: 'Remove a ledger account from a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ledger_account_id, ...body } = args as any;
  return client.ledgerAccountCategories.removeLedgerAccount(id, ledger_account_id);
};

export default { metadata, tool, handler };
