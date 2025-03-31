// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'list_ledger_entries',
  description: 'Get a list of all ledger entries.',
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
      as_of_lock_version: {
        type: 'integer',
        description:
          'Shows all ledger entries that were present on a ledger account at a particular `lock_version`. You must also specify `ledger_account_id`.',
      },
      direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
      effective_at: {
        type: 'object',
        description:
          "Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the transaction's effective time. Format ISO8601",
      },
      effective_date: {
        type: 'object',
        description:
          "Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the transaction's effective date. Format YYYY-MM-DD",
      },
      ledger_account_category_id: {
        type: 'string',
        description: 'Get all ledger entries that match the direction specified. One of `credit`, `debit`.',
      },
      ledger_account_id: {
        type: 'string',
      },
      ledger_account_lock_version: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the lock_version of a ledger account. For example, for all entries created at or before before lock_version 1000 of a ledger account, use `ledger_account_lock_version%5Blte%5D=1000`.',
      },
      ledger_account_payout_id: {
        type: 'string',
      },
      ledger_account_settlement_id: {
        type: 'string',
      },
      ledger_account_statement_id: {
        type: 'string',
        description: 'Get all ledger entries that are included in the ledger account statement.',
      },
      ledger_transaction_id: {
        type: 'string',
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
      per_page: {
        type: 'integer',
      },
      show_balances: {
        type: 'boolean',
        description:
          'If true, response will include the balances attached to the ledger entry. If there is no balance available, null will be returned instead.',
      },
      show_deleted: {
        type: 'boolean',
        description:
          'If true, response will include ledger entries that were deleted. When you update a ledger transaction to specify a new set of entries, the previous entries are deleted.',
      },
      status: {
        type: 'string',
        description:
          'Get all ledger entries that match the status specified. One of `pending`, `posted`, or `archived`.',
        enum: ['pending', 'posted', 'archived'],
      },
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.ledgerEntries.list(body);
};

export default { tool, handler };
