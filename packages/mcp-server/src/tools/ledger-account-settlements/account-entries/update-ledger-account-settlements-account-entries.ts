// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_settlements.account_entries',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_ledger_account_settlements_account_entries',
  description: 'Add ledger entries to a draft ledger account settlement.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      ledger_entry_ids: {
        type: 'array',
        description:
          'The ids of the ledger entries that are to be added or removed from the ledger account settlement.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.ledgerAccountSettlements.accountEntries.update(id, body);
};

export default { metadata, tool, handler };
