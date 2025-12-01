// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/ledger_accounts/{id}',
  operationId: 'updateLedgerAccount',
};

export const tool: Tool = {
  name: 'update_ledger_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the details of a ledger account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ledger_account',\n  $defs: {\n    ledger_account: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        balances: {\n          type: 'object',\n          description: 'The pending, posted, and available balances for this ledger account. The posted balance is the sum of all posted entries on the account. The pending balance is the sum of all pending and posted entries on the account. The available balance is the posted incoming entries minus the sum of the pending and posted outgoing amounts.',\n          properties: {\n            available_balance: {\n              $ref: '#/$defs/ledger_balance'\n            },\n            effective_at_lower_bound: {\n              type: 'string',\n              description: 'The inclusive lower bound of the effective_at timestamp for the returned balances.',\n              format: 'date-time'\n            },\n            effective_at_upper_bound: {\n              type: 'string',\n              description: 'The exclusive upper bound of the effective_at timestamp for the returned balances.',\n              format: 'date-time'\n            },\n            pending_balance: {\n              $ref: '#/$defs/ledger_balance'\n            },\n            posted_balance: {\n              $ref: '#/$defs/ledger_balance'\n            }\n          },\n          required: [            'available_balance',\n            'effective_at_lower_bound',\n            'effective_at_upper_bound',\n            'pending_balance',\n            'posted_balance'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the ledger account.'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        external_id: {\n          type: 'string',\n          description: 'An optional user-defined 180 character unique identifier.'\n        },\n        ledger_id: {\n          type: 'string',\n          description: 'The id of the ledger that this account belongs to.'\n        },\n        ledgerable_id: {\n          type: 'string',\n          description: 'If the ledger account links to another object in Modern Treasury, the id will be populated here, otherwise null.'\n        },\n        ledgerable_type: {\n          type: 'string',\n          description: 'If the ledger account links to another object in Modern Treasury, the type will be populated here, otherwise null. The value is one of internal_account or external_account.',\n          enum: [            'counterparty',\n            'external_account',\n            'internal_account',\n            'virtual_account'\n          ]\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        lock_version: {\n          type: 'integer',\n          description: 'Lock version of the ledger account.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.',\n          additionalProperties: true\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the ledger account.'\n        },\n        normal_balance: {\n          $ref: '#/$defs/transaction_direction'\n        },\n        object: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'balances',\n        'created_at',\n        'description',\n        'discarded_at',\n        'external_id',\n        'ledger_id',\n        'ledgerable_id',\n        'ledgerable_type',\n        'live_mode',\n        'lock_version',\n        'metadata',\n        'name',\n        'normal_balance',\n        'object',\n        'updated_at'\n      ]\n    },\n    ledger_balance: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        credits: {\n          type: 'integer'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        debits: {\n          type: 'integer'\n        }\n      },\n      required: [        'amount',\n        'credits',\n        'currency',\n        'currency_exponent',\n        'debits'\n      ]\n    },\n    transaction_direction: {\n      type: 'string',\n      enum: [        'credit',\n        'debit'\n      ]\n    }\n  }\n}\n```",
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
        additionalProperties: true,
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account.',
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ledgerAccounts.update(id, body)));
  } catch (error) {
    if (error instanceof ModernTreasury.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
