// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_transactions.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_transaction_versions',
  operationId: 'listLedgerTransactionVersions',
};

export const tool: Tool = {
  name: 'list_ledger_transactions_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of ledger transaction versions.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/ledger_transaction_version'\n  },\n  $defs: {\n    ledger_transaction_version: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional description for internal use.'\n        },\n        effective_at: {\n          type: 'string',\n          description: 'The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes.',\n          format: 'date-time'\n        },\n        effective_date: {\n          type: 'string',\n          description: 'The date (YYYY-MM-DD) on which the ledger transaction happened for reporting purposes.',\n          format: 'date'\n        },\n        external_id: {\n          type: 'string',\n          description: 'A unique string to represent the ledger transaction. Only one pending or posted ledger transaction may have this ID in the ledger.'\n        },\n        ledger_entries: {\n          type: 'array',\n          description: 'An array of ledger entry objects.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              amount: {\n                type: 'integer',\n                description: 'Value in specified currency\\'s smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              direction: {\n                $ref: '#/$defs/transaction_direction'\n              },\n              ledger_account_currency: {\n                type: 'string',\n                description: 'The currency of the ledger account.'\n              },\n              ledger_account_currency_exponent: {\n                type: 'integer',\n                description: 'The currency exponent of the ledger account.'\n              },\n              ledger_account_id: {\n                type: 'string',\n                description: 'The ledger account that this ledger entry is associated with.'\n              },\n              ledger_account_lock_version: {\n                type: 'integer',\n                description: 'Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details.'\n              },\n              ledger_transaction_id: {\n                type: 'string',\n                description: 'The ledger transaction that this ledger entry is associated with.'\n              },\n              live_mode: {\n                type: 'boolean',\n                description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n              },\n              metadata: {\n                type: 'object',\n                description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n              },\n              object: {\n                type: 'string'\n              },\n              resulting_ledger_account_balances: {\n                $ref: '#/$defs/ledger_balances'\n              },\n              status: {\n                type: 'string',\n                description: 'Equal to the state of the ledger transaction when the ledger entry was created. One of `pending`, `posted`, or `archived`.',\n                enum: [                  'archived',\n                  'pending',\n                  'posted'\n                ]\n              }\n            },\n            required: [              'id',\n              'amount',\n              'created_at',\n              'direction',\n              'ledger_account_currency',\n              'ledger_account_currency_exponent',\n              'ledger_account_id',\n              'ledger_account_lock_version',\n              'ledger_transaction_id',\n              'live_mode',\n              'metadata',\n              'object',\n              'resulting_ledger_account_balances',\n              'status'\n            ]\n          }\n        },\n        ledger_id: {\n          type: 'string',\n          description: 'The ID of the ledger this ledger transaction belongs to.'\n        },\n        ledger_transaction_id: {\n          type: 'string',\n          description: 'The ID of the ledger transaction'\n        },\n        ledgerable_id: {\n          type: 'string',\n          description: 'If the ledger transaction can be reconciled to another object in Modern Treasury, the id will be populated here, otherwise null.'\n        },\n        ledgerable_type: {\n          type: 'string',\n          description: 'If the ledger transaction can be reconciled to another object in Modern Treasury, the type will be populated here, otherwise null. This can be one of payment_order, incoming_payment_detail, expected_payment, return, or reversal.',\n          enum: [            'expected_payment',\n            'incoming_payment_detail',\n            'paper_item',\n            'payment_order',\n            'return',\n            'reversal'\n          ]\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        object: {\n          type: 'string'\n        },\n        partially_posts_ledger_transaction_id: {\n          type: 'string',\n          description: 'The ID of the ledger transaction that this ledger transaction partially posts.'\n        },\n        posted_at: {\n          type: 'string',\n          description: 'The time on which the ledger transaction posted. This is null if the ledger transaction is pending.',\n          format: 'date-time'\n        },\n        reversed_by_ledger_transaction_id: {\n          type: 'string',\n          description: 'The ID of the ledger transaction that reversed this ledger transaction.'\n        },\n        reverses_ledger_transaction_id: {\n          type: 'string',\n          description: 'The ID of the original ledger transaction. that this ledger transaction reverses.'\n        },\n        status: {\n          type: 'string',\n          description: 'One of `pending`, `posted`, or `archived`.',\n          enum: [            'archived',\n            'pending',\n            'posted'\n          ]\n        },\n        version: {\n          type: 'integer',\n          description: 'Version number of the ledger transaction.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'effective_at',\n        'effective_date',\n        'external_id',\n        'ledger_entries',\n        'ledger_id',\n        'ledger_transaction_id',\n        'ledgerable_id',\n        'ledgerable_type',\n        'live_mode',\n        'metadata',\n        'object',\n        'partially_posts_ledger_transaction_id',\n        'posted_at',\n        'reversed_by_ledger_transaction_id',\n        'reverses_ledger_transaction_id',\n        'status',\n        'version'\n      ]\n    },\n    transaction_direction: {\n      type: 'string',\n      enum: [        'credit',\n        'debit'\n      ]\n    },\n    ledger_balances: {\n      type: 'object',\n      properties: {\n        available_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        pending_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        posted_balance: {\n          $ref: '#/$defs/ledger_balance'\n        }\n      },\n      required: [        'available_balance',\n        'pending_balance',\n        'posted_balance'\n      ]\n    },\n    ledger_balance: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        credits: {\n          type: 'integer'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        debits: {\n          type: 'integer'\n        }\n      },\n      required: [        'amount',\n        'credits',\n        'currency',\n        'currency_exponent',\n        'debits'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      created_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created_at timestamp. For example, for all dates after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
      ledger_account_statement_id: {
        type: 'string',
        description: 'Get all ledger transaction versions that are included in the ledger account statement.',
      },
      ledger_transaction_id: {
        type: 'string',
        description:
          'Get all the ledger transaction versions corresponding to the ID of a ledger transaction.',
      },
      per_page: {
        type: 'integer',
      },
      version: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the version. For example, for all versions after 2, use version%5Bgt%5D=2.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.ledgerTransactions.versions.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
