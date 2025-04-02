// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_accounts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ledger_accounts',
  description: 'Get a list of ledger accounts.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'array',
        description:
          'If you have specific IDs to retrieve in bulk, you can pass them as query parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.',
        items: {
          type: 'string',
        },
      },
      after_cursor: {
        type: 'string',
      },
      available_balance_amount: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to filter by balance amount.',
        properties: {
          eq: {
            type: 'integer',
          },
          gt: {
            type: 'integer',
          },
          gte: {
            type: 'integer',
          },
          lt: {
            type: 'integer',
          },
          lte: {
            type: 'integer',
          },
          not_eq: {
            type: 'integer',
          },
        },
        required: [],
      },
      balances: {
        type: 'object',
        description:
          'Use `balances[effective_at_lower_bound]` and `balances[effective_at_upper_bound]` to get the balances change between the two timestamps. The lower bound is inclusive while the upper bound is exclusive of the provided timestamps. If no value is supplied the balances will be retrieved not including that bound.',
        properties: {
          as_of_date: {
            type: 'string',
            format: 'date',
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
      created_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
      currency: {
        type: 'string',
      },
      ledger_account_category_id: {
        type: 'string',
      },
      ledger_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      name: {
        type: 'array',
        description:
          'If you have specific names to retrieve in bulk, you can pass them as query parameters delimited with `name[]=`, for example `?name[]=123&name[]=abc`.',
        items: {
          type: 'string',
        },
      },
      pending_balance_amount: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to filter by balance amount.',
        properties: {
          eq: {
            type: 'integer',
          },
          gt: {
            type: 'integer',
          },
          gte: {
            type: 'integer',
          },
          lt: {
            type: 'integer',
          },
          lte: {
            type: 'integer',
          },
          not_eq: {
            type: 'integer',
          },
        },
        required: [],
      },
      per_page: {
        type: 'integer',
      },
      posted_balance_amount: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to filter by balance amount.',
        properties: {
          eq: {
            type: 'integer',
          },
          gt: {
            type: 'integer',
          },
          gte: {
            type: 'integer',
          },
          lt: {
            type: 'integer',
          },
          lte: {
            type: 'integer',
          },
          not_eq: {
            type: 'integer',
          },
        },
        required: [],
      },
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the updated at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.ledgerAccounts.list(body);
};

export default { metadata, tool, handler };
