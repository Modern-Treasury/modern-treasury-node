// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'update_ledger_entries',
  description: 'Update the details of a ledger entry.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { id, ...body } = args;
  return client.ledgerEntries.update(id, body);
};

export default { tool, handler };
