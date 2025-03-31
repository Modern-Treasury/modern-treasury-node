// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'add_ledger_account_ledger_account_categories',
  description: 'Add a ledger account to a ledger account category.',
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

export const handler = (client: ModernTreasury, args: any) => {
  const { id, ledger_account_id } = args;
  return client.ledgerAccountCategories.addLedgerAccount(id, ledger_account_id);
};

export default { tool, handler };
