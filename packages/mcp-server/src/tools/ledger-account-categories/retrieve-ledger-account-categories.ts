// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_ledger_account_categories',
  description: 'Get the details on a single ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      balances: {
        type: 'object',
        description:
          'For example, if you want the balances as of a particular time (ISO8601), the encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`. The balances as of a time are inclusive of entries with that exact time.',
        properties: {
          as_of_date: {
            type: 'string',
            format: 'date',
          },
          effective_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.ledgerAccountCategories.retrieve(id, body);
};

export default { metadata, tool, handler };
