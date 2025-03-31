// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

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

export const handler = (client: ModernTreasury, args: any) => {
  const { id, ...body } = args;
  return client.ledgerEntries.retrieve(id, body);
};

export default { tool, handler };
