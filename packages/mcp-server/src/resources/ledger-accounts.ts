// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledger_accounts',
  description: 'Create a ledger account.',
  inputSchema: {
    type: 'object',
    properties: {
      currency: {
        type: 'string',
        description: 'The currency of the ledger account.',
      },
      ledger_id: {
        type: 'string',
        description: 'The id of the ledger that this account belongs to.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account.',
      },
      normal_balance: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
      currency_exponent: {
        type: 'integer',
        description: 'The currency exponent of the ledger account.',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account.',
      },
      ledger_account_category_ids: {
        type: 'array',
        description:
          'The array of ledger account category ids that this ledger account should be a child of.',
        items: {
          type: 'string',
        },
      },
      ledgerable_id: {
        type: 'string',
        description:
          'If the ledger account links to another object in Modern Treasury, the id will be populated here, otherwise null.',
      },
      ledgerable_type: {
        type: 'string',
        description:
          'If the ledger account links to another object in Modern Treasury, the type will be populated here, otherwise null. The value is one of internal_account or external_account.',
        enum: ['counterparty', 'external_account', 'internal_account', 'virtual_account'],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerAccounts.create(body);
  },
});

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccounts.retrieve(id, body);
  },
});

registerApiMethod({
  name: 'update_ledger_accounts',
  description: 'Update the details of a ledger account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccounts.update(id, body);
  },
});

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerAccounts.list(body);
  },
});

registerApiMethod({
  name: 'delete_ledger_accounts',
  description: 'Delete a ledger account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id } = args;
    return client.ledgerAccounts.del(id);
  },
});
