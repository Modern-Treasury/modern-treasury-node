// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'retrieve_ledger_accounts',
  description: 'Get details on a single ledger account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      balances: {
        type: 'object',
        description:
          'Use `balances[effective_at_lower_bound]` and `balances[effective_at_upper_bound]` to get the balances change between the two timestamps. The lower bound is inclusive while the upper bound is exclusive of the provided timestamps. If no value is supplied the balances will be retrieved not including that bound. Use `balances[as_of_lock_version]` to retrieve a balance as of a specific Ledger Account `lock_version`.',
        properties: {
          as_of_date: {
            type: 'string',
            format: 'date',
          },
          as_of_lock_version: {
            type: 'integer',
          },
          effective_at: {
            type: 'string',
            format: 'date-time',
          },
          effective_at_lower_bound: {
            type: 'string',
            format: 'date-time',
          },
          effective_at_upper_bound: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { id, ...body } = args;
  return client.ledgerAccounts.retrieve(id, body);
};

export default { tool, handler };
