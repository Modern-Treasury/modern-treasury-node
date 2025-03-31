// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'update_virtual_accounts',
  description: 'update virtual_account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
        description: "The ledger account that you'd like to link to the virtual account.",
      },
      metadata: {
        type: 'object',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { id, ...body } = args;
  return client.virtualAccounts.update(id, body);
};

export default { tool, handler };
