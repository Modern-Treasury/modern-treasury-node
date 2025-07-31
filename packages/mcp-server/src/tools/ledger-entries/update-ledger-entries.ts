// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/ledger_entries/{id}',
  operationId: 'updateLedgerEntry',
};

export const tool: Tool = {
  name: 'update_ledger_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the details of a ledger entry.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ledger_entry',\n  $defs: {\n    ledger_entry: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer',\n          description: 'Value in specified currency\\'s smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        direction: {\n          $ref: '#/$defs/transaction_direction'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        ledger_account_currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        ledger_account_currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        ledger_account_id: {\n          type: 'string',\n          description: 'The ledger account that this ledger entry is associated with.'\n        },\n        ledger_account_lock_version: {\n          type: 'integer',\n          description: 'Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details.'\n        },\n        ledger_transaction_id: {\n          type: 'string',\n          description: 'The ledger transaction that this ledger entry is associated with.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        object: {\n          type: 'string'\n        },\n        resulting_ledger_account_balances: {\n          $ref: '#/$defs/ledger_balances'\n        },\n        status: {\n          type: 'string',\n          description: 'Equal to the state of the ledger transaction when the ledger entry was created. One of `pending`, `posted`, or `archived`.',\n          enum: [            'archived',\n            'pending',\n            'posted'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created_at',\n        'direction',\n        'discarded_at',\n        'ledger_account_currency',\n        'ledger_account_currency_exponent',\n        'ledger_account_id',\n        'ledger_account_lock_version',\n        'ledger_transaction_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'resulting_ledger_account_balances',\n        'status',\n        'updated_at'\n      ]\n    },\n    transaction_direction: {\n      type: 'string',\n      enum: [        'credit',\n        'debit'\n      ]\n    },\n    ledger_balances: {\n      type: 'object',\n      properties: {\n        available_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        pending_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        posted_balance: {\n          $ref: '#/$defs/ledger_balance'\n        }\n      },\n      required: [        'available_balance',\n        'pending_balance',\n        'posted_balance'\n      ]\n    },\n    ledger_balance: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        credits: {\n          type: 'integer'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        debits: {\n          type: 'integer'\n        }\n      },\n      required: [        'amount',\n        'credits',\n        'currency',\n        'currency_exponent',\n        'debits'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ledgerEntries.update(id, body)));
};

export default { metadata, tool, handler };
