// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_entries',
  operationId: 'listLedgerEntries',
};

export const tool: Tool = {
  name: 'list_ledger_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of all ledger entries.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/ledger_entry'\n  },\n  $defs: {\n    ledger_entry: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer',\n          description: 'Value in specified currency\\'s smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        direction: {\n          $ref: '#/$defs/transaction_direction'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        ledger_account_currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        ledger_account_currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        ledger_account_id: {\n          type: 'string',\n          description: 'The ledger account that this ledger entry is associated with.'\n        },\n        ledger_account_lock_version: {\n          type: 'integer',\n          description: 'Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details.'\n        },\n        ledger_transaction_id: {\n          type: 'string',\n          description: 'The ledger transaction that this ledger entry is associated with.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.',\n          additionalProperties: true\n        },\n        object: {\n          type: 'string'\n        },\n        resulting_ledger_account_balances: {\n          $ref: '#/$defs/ledger_balances'\n        },\n        status: {\n          type: 'string',\n          description: 'Equal to the state of the ledger transaction when the ledger entry was created. One of `pending`, `posted`, or `archived`.',\n          enum: [            'archived',\n            'pending',\n            'posted'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created_at',\n        'direction',\n        'discarded_at',\n        'ledger_account_currency',\n        'ledger_account_currency_exponent',\n        'ledger_account_id',\n        'ledger_account_lock_version',\n        'ledger_transaction_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'resulting_ledger_account_balances',\n        'status',\n        'updated_at'\n      ]\n    },\n    transaction_direction: {\n      type: 'string',\n      enum: [        'credit',\n        'debit'\n      ]\n    },\n    ledger_balances: {\n      type: 'object',\n      properties: {\n        available_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        pending_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        posted_balance: {\n          $ref: '#/$defs/ledger_balance'\n        }\n      },\n      required: [        'available_balance',\n        'pending_balance',\n        'posted_balance'\n      ]\n    },\n    ledger_balance: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        credits: {\n          type: 'integer'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        debits: {\n          type: 'integer'\n        }\n      },\n      required: [        'amount',\n        'credits',\n        'currency',\n        'currency_exponent',\n        'debits'\n      ]\n    }\n  }\n}\n```",
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
      amount: {
        type: 'object',
        description: 'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by amount.',
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
        },
      },
      as_of_lock_version: {
        type: 'integer',
        description:
          'Shows all ledger entries that were present on a ledger account at a particular `lock_version`. You must also specify `ledger_account_id`.',
      },
      direction: {
        $ref: '#/$defs/transaction_direction',
      },
      effective_at: {
        type: 'object',
        description:
          "Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the transaction's effective time. Format ISO8601",
        additionalProperties: true,
      },
      effective_date: {
        type: 'object',
        description:
          "Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the transaction's effective date. Format YYYY-MM-DD",
        additionalProperties: true,
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
        additionalProperties: true,
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
        additionalProperties: true,
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
        type: 'array',
        description:
          'Get all ledger entries that match the status specified. One of `pending`, `posted`, or `archived`. For multiple statuses, use `status[]=pending&status[]=posted`.',
        items: {
          type: 'string',
          enum: ['pending', 'posted', 'archived'],
        },
      },
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.ledgerEntries.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof ModernTreasury.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
