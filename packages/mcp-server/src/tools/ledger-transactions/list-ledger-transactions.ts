// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_transactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_transactions',
  operationId: 'listLedgerTransactions',
};

export const tool: Tool = {
  name: 'list_ledger_transactions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of ledger transactions.",
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
        anyOf: [
          {
            type: 'string',
            enum: ['pending', 'posted', 'archived'],
          },
          {
            type: 'array',
            items: {
              type: 'string',
              enum: ['pending', 'posted', 'archived'],
            },
          },
        ],
      },
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.ledgerTransactions.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
