// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_ledger_account_categories',
  description: 'Update the details of a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account category.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account category.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { id, ...body } = args;
  return client.ledgerAccountCategories.update(id, body);
};

export default { metadata, tool, handler };
