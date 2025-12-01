// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_statements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_account_statements/{id}',
  operationId: 'getLedgerAccountStatement',
};

export const tool: Tool = {
  name: 'retrieve_ledger_account_statements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details on a single ledger account statement.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ledger_account_statement_retrieve_response',\n  $defs: {\n    ledger_account_statement_retrieve_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the ledger account statement.'\n        },\n        effective_at_lower_bound: {\n          type: 'string',\n          description: 'The inclusive lower bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement.',\n          format: 'date-time'\n        },\n        effective_at_upper_bound: {\n          type: 'string',\n          description: 'The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement.',\n          format: 'date-time'\n        },\n        ending_balance: {\n          $ref: '#/$defs/ledger_balances'\n        },\n        ledger_account_id: {\n          type: 'string',\n          description: 'The id of the ledger account whose ledger entries are queried against, and its balances are computed as a result.'\n        },\n        ledger_account_lock_version: {\n          type: 'integer',\n          description: 'Lock version of the ledger account at the time of statement generation.'\n        },\n        ledger_account_normal_balance: {\n          $ref: '#/$defs/transaction_direction'\n        },\n        ledger_id: {\n          type: 'string',\n          description: 'The id of the ledger that this ledger account statement belongs to.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.',\n          additionalProperties: true\n        },\n        object: {\n          type: 'string'\n        },\n        starting_balance: {\n          $ref: '#/$defs/ledger_balances'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'effective_at_lower_bound',\n        'effective_at_upper_bound',\n        'ending_balance',\n        'ledger_account_id',\n        'ledger_account_lock_version',\n        'ledger_account_normal_balance',\n        'ledger_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'starting_balance',\n        'updated_at'\n      ]\n    },\n    ledger_balances: {\n      type: 'object',\n      properties: {\n        available_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        pending_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        posted_balance: {\n          $ref: '#/$defs/ledger_balance'\n        }\n      },\n      required: [        'available_balance',\n        'pending_balance',\n        'posted_balance'\n      ]\n    },\n    ledger_balance: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        credits: {\n          type: 'integer'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        debits: {\n          type: 'integer'\n        }\n      },\n      required: [        'amount',\n        'credits',\n        'currency',\n        'currency_exponent',\n        'debits'\n      ]\n    },\n    transaction_direction: {\n      type: 'string',\n      enum: [        'credit',\n        'debit'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ledgerAccountStatements.retrieve(id)),
    );
  } catch (error) {
    if (error instanceof ModernTreasury.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
