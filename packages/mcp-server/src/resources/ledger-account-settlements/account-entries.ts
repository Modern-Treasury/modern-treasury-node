// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccountSettlements.accountEntries.update(id, body);
  },
});

registerApiMethod({
  name: 'delete_ledger_account_settlements_account_entries',
  description: 'Remove ledger entries from a draft ledger account settlement.',
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
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccountSettlements.accountEntries.del(id, body);
  },
});
