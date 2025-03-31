// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledger_transactions',
  description: 'Create a ledger transaction.',
  inputSchema: {
    type: 'object',
    properties: {
      ledger_entries: {
        type: 'array',
        description: 'An array of ledger entry objects.',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'integer',
              description:
                "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.",
            },
            direction: {
              type: 'string',
              enum: ['credit', 'debit'],
            },
            ledger_account_id: {
              type: 'string',
              description: 'The ledger account that this ledger entry is associated with.',
            },
            available_balance_amount: {
              type: 'object',
              description:
                'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s available balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
            },
            lock_version: {
              type: 'integer',
              description:
                'Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details.',
            },
            metadata: {
              type: 'object',
              description:
                'Additional data represented as key-value pairs. Both the key and value must be strings.',
            },
            pending_balance_amount: {
              type: 'object',
              description:
                'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s pending balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
            },
            posted_balance_amount: {
              type: 'object',
              description:
                'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s posted balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
            },
            show_resulting_ledger_account_balances: {
              type: 'boolean',
              description:
                'If true, response will include the balance of the associated ledger account for the entry.',
            },
          },
          required: ['amount', 'direction', 'ledger_account_id'],
        },
      },
      description: {
        type: 'string',
        description: 'An optional description for internal use.',
      },
      effective_at: {
        type: 'string',
        description:
          'The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes.',
        format: 'date-time',
      },
      effective_date: {
        type: 'string',
        description: 'The date (YYYY-MM-DD) on which the ledger transaction happened for reporting purposes.',
        format: 'date',
      },
      external_id: {
        type: 'string',
        description:
          'A unique string to represent the ledger transaction. Only one pending or posted ledger transaction may have this ID in the ledger.',
      },
      ledgerable_id: {
        type: 'string',
        description:
          'If the ledger transaction can be reconciled to another object in Modern Treasury, the id will be populated here, otherwise null.',
      },
      ledgerable_type: {
        type: 'string',
        description:
          'If the ledger transaction can be reconciled to another object in Modern Treasury, the type will be populated here, otherwise null. This can be one of payment_order, incoming_payment_detail, expected_payment, return, paper_item, or reversal.',
        enum: [
          'expected_payment',
          'incoming_payment_detail',
          'paper_item',
          'payment_order',
          'return',
          'reversal',
        ],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      status: {
        type: 'string',
        description: 'To post a ledger transaction at creation, use `posted`.',
        enum: ['archived', 'pending', 'posted'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerTransactions.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledger_transactions',
  description: 'Get details on a single ledger transaction.',
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
    return client.ledgerTransactions.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_ledger_transactions',
  description: 'Update the details of a ledger transaction.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'An optional description for internal use.',
      },
      effective_at: {
        type: 'string',
        description:
          'The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes.',
        format: 'date-time',
      },
      ledger_entries: {
        type: 'array',
        description: 'An array of ledger entry objects.',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'integer',
              description:
                "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.",
            },
            direction: {
              type: 'string',
              enum: ['credit', 'debit'],
            },
            ledger_account_id: {
              type: 'string',
              description: 'The ledger account that this ledger entry is associated with.',
            },
            available_balance_amount: {
              type: 'object',
              description:
                'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s available balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
            },
            lock_version: {
              type: 'integer',
              description:
                'Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details.',
            },
            metadata: {
              type: 'object',
              description:
                'Additional data represented as key-value pairs. Both the key and value must be strings.',
            },
            pending_balance_amount: {
              type: 'object',
              description:
                'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s pending balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
            },
            posted_balance_amount: {
              type: 'object',
              description:
                'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s posted balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
            },
            show_resulting_ledger_account_balances: {
              type: 'boolean',
              description:
                'If true, response will include the balance of the associated ledger account for the entry.',
            },
          },
          required: ['amount', 'direction', 'ledger_account_id'],
        },
      },
      ledgerable_id: {
        type: 'string',
        description:
          'If the ledger transaction can be reconciled to another object in Modern Treasury, the id will be populated here, otherwise null.',
      },
      ledgerable_type: {
        type: 'string',
        description:
          'If the ledger transaction can be reconciled to another object in Modern Treasury, the type will be populated here, otherwise null. This can be one of payment_order, incoming_payment_detail, expected_payment, return, paper_item, or reversal.',
        enum: [
          'expected_payment',
          'incoming_payment_detail',
          'paper_item',
          'payment_order',
          'return',
          'reversal',
        ],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      status: {
        type: 'string',
        description: 'To post a ledger transaction at creation, use `posted`.',
        enum: ['archived', 'pending', 'posted'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerTransactions.update(id, body);
  },
});

registerApiMethod({
  name: 'list_ledger_transactions',
  description: 'Get a list of ledger transactions.',
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
      effective_at: {
        type: 'object',
        description:
          'Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by effective at. For example, for all transactions after Jan 1 2000, use effective_at%5Bgt%5D=2000-01-01T00:00:00:00.000Z.',
      },
      effective_date: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by effective date. For example, for all dates after Jan 1 2000, use effective_date%5Bgt%5D=2000-01-01.',
      },
      external_id: {
        type: 'string',
      },
      ledger_account_category_id: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
      },
      ledger_account_settlement_id: {
        type: 'string',
      },
      ledger_id: {
        type: 'string',
      },
      ledgerable_id: {
        type: 'string',
      },
      ledgerable_type: {
        type: 'string',
        enum: [
          'expected_payment',
          'incoming_payment_detail',
          'paper_item',
          'payment_order',
          'return',
          'reversal',
        ],
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      order_by: {
        type: 'object',
        description:
          'Order by `created_at` or `effective_at` in `asc` or `desc` order. For example, to order by `effective_at asc`, use `order_by%5Beffective_at%5D=asc`. Ordering by only one field at a time is supported.',
        properties: {
          created_at: {
            type: 'string',
            enum: ['asc', 'desc'],
          },
          effective_at: {
            type: 'string',
            enum: ['asc', 'desc'],
          },
        },
        required: [],
      },
      partially_posts_ledger_transaction_id: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      posted_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use posted_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
      reverses_ledger_transaction_id: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['pending', 'posted', 'archived'],
      },
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerTransactions.list(body);
  },
});

registerApiMethod({
  name: 'create_partial_post_ledger_transactions',
  description: 'Create a ledger transaction that partially posts another ledger transaction.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      posted_ledger_entries: {
        type: 'array',
        description:
          'An array of ledger entry objects to be set on the posted ledger transaction. There must be one entry for each of the existing entries with a lesser amount than the existing entry.',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'integer',
              description:
                "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.",
            },
            direction: {
              type: 'string',
              description:
                "One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`.",
              enum: ['credit', 'debit'],
            },
            ledger_account_id: {
              type: 'string',
              description: 'The ledger account that this ledger entry is associated with.',
            },
            metadata: {
              type: 'object',
              description:
                'Additional data represented as key-value pairs. Both the key and value must be strings.',
            },
          },
          required: ['amount', 'direction', 'ledger_account_id'],
        },
      },
      description: {
        type: 'string',
        description:
          'An optional free-form description for the posted ledger transaction. Maximum of 1000 characters allowed.',
      },
      effective_at: {
        type: 'string',
        description:
          'The timestamp (IS08601 format) at which the posted ledger transaction happened for reporting purposes.',
        format: 'date-time',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerTransactions.createPartialPost(id, body);
  },
});

registerApiMethod({
  name: 'create_reversal_ledger_transactions',
  description: 'Create a ledger transaction reversal.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description:
          'An optional free-form description for the reversal ledger transaction. Maximum of 1000 characters allowed.',
      },
      effective_at: {
        type: 'string',
        description:
          'The timestamp (ISO8601 format) at which the reversal ledger transaction happened for reporting purposes. It defaults to the `effective_at` of the original ledger transaction if not provided.',
        format: 'date-time',
      },
      external_id: {
        type: 'string',
        description: 'Must be unique within the ledger.',
      },
      ledgerable_id: {
        type: 'string',
        description:
          "Specify this if you'd like to link the reversal ledger transaction to a Payment object like Return or Reversal.",
      },
      ledgerable_type: {
        type: 'string',
        description:
          "Specify this if you'd like to link the reversal ledger transaction to a Payment object like Return or Reversal.",
        enum: [
          'expected_payment',
          'incoming_payment_detail',
          'paper_item',
          'payment_order',
          'return',
          'reversal',
        ],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data to be added to the reversal ledger transaction as key-value pairs. Both the key and value must be strings.',
      },
      status: {
        type: 'string',
        description: 'Status of the reversal ledger transaction. It defaults to `posted` if not provided.',
        enum: ['archived', 'pending', 'posted'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerTransactions.createReversal(id, body);
  },
});
