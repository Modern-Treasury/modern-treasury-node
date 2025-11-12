// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_settlements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_account_settlements',
  operationId: 'listLedgerAccountSettlements',
};

export const tool: Tool = {
  name: 'list_ledger_account_settlements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of ledger account settlements.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/ledger_account_settlement'\n  },\n  $defs: {\n    ledger_account_settlement: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer',\n          description: 'The amount of the ledger account settlement.'\n        },\n        contra_ledger_account_id: {\n          type: 'string',\n          description: 'The id of the contra ledger account that sends to or receives funds from the settled ledger account.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account settlement.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account settlement.'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the ledger account settlement.'\n        },\n        effective_at_upper_bound: {\n          type: 'string',\n          description: 'The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account settlement. The default value is the created_at timestamp of the ledger account settlement.',\n          format: 'date-time'\n        },\n        ledger_id: {\n          type: 'string',\n          description: 'The id of the ledger that this ledger account settlement belongs to.'\n        },\n        ledger_transaction_id: {\n          type: 'string',\n          description: 'The id of the ledger transaction that this settlement is associated with.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.',\n          additionalProperties: true\n        },\n        object: {\n          type: 'string'\n        },\n        settled_ledger_account_id: {\n          type: 'string',\n          description: 'The id of the settled ledger account whose ledger entries are queried against, and its balance is reduced as a result.'\n        },\n        settlement_entry_direction: {\n          type: 'string',\n          description: 'The direction of the ledger entry with the settlement_ledger_account.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the ledger account settlement. One of `processing`, `pending`, `posted`, `archiving` or `archived`.',\n          enum: [            'archived',\n            'archiving',\n            'drafting',\n            'pending',\n            'posted',\n            'processing'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'contra_ledger_account_id',\n        'created_at',\n        'currency',\n        'currency_exponent',\n        'description',\n        'effective_at_upper_bound',\n        'ledger_id',\n        'ledger_transaction_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'settled_ledger_account_id',\n        'settlement_entry_direction',\n        'status',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
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
      created_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z.',
        additionalProperties: true,
      },
      ledger_id: {
        type: 'string',
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
      per_page: {
        type: 'integer',
      },
      settled_ledger_account_id: {
        type: 'string',
      },
      settlement_entry_direction: {
        type: 'string',
      },
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the updated at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
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
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.ledgerAccountSettlements.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
