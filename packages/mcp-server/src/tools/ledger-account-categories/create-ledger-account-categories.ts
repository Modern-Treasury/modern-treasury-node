// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledger_account_categories',
  operationId: 'createLedgerAccountCategory',
};

export const tool: Tool = {
  name: 'create_ledger_account_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a ledger account category.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ledger_account_category',\n  $defs: {\n    ledger_account_category: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        balances: {\n          $ref: '#/$defs/ledger_balances'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the ledger account category.'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        external_id: {\n          type: 'string',\n          description: 'An optional user-defined 180 character unique identifier.'\n        },\n        ledger_id: {\n          type: 'string',\n          description: 'The id of the ledger that this account category belongs to.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the ledger account category.'\n        },\n        normal_balance: {\n          $ref: '#/$defs/transaction_direction'\n        },\n        object: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'balances',\n        'created_at',\n        'description',\n        'discarded_at',\n        'external_id',\n        'ledger_id',\n        'live_mode',\n        'metadata',\n        'name',\n        'normal_balance',\n        'object',\n        'updated_at'\n      ]\n    },\n    ledger_balances: {\n      type: 'object',\n      properties: {\n        available_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        pending_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        posted_balance: {\n          $ref: '#/$defs/ledger_balance'\n        }\n      },\n      required: [        'available_balance',\n        'pending_balance',\n        'posted_balance'\n      ]\n    },\n    ledger_balance: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        credits: {\n          type: 'integer'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        debits: {\n          type: 'integer'\n        }\n      },\n      required: [        'amount',\n        'credits',\n        'currency',\n        'currency_exponent',\n        'debits'\n      ]\n    },\n    transaction_direction: {\n      type: 'string',\n      enum: [        'credit',\n        'debit'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      currency: {
        type: 'string',
        description: 'The currency of the ledger account category.',
      },
      ledger_id: {
        type: 'string',
        description: 'The id of the ledger that this account category belongs to.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account category.',
      },
      normal_balance: {
        $ref: '#/$defs/transaction_direction',
      },
      currency_exponent: {
        type: 'integer',
        description: 'The currency exponent of the ledger account category.',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account category.',
      },
      ledger_account_category_ids: {
        type: 'array',
        description:
          'The array of ledger account category ids that this ledger account category should be a child of.',
        items: {
          type: 'string',
        },
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
    $defs: {
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.ledgerAccountCategories.create(body)));
};

export default { metadata, tool, handler };
