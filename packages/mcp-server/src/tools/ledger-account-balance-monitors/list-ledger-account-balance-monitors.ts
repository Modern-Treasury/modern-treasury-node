// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_balance_monitors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_account_balance_monitors',
  operationId: 'listLedgerAccountBalanceMonitors',
};

export const tool: Tool = {
  name: 'list_ledger_account_balance_monitors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of ledger account balance monitors.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/ledger_account_balance_monitor'\n  },\n  $defs: {\n    ledger_account_balance_monitor: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        alert_condition: {\n          type: 'object',\n          description: 'Describes the condition that must be satisfied for the monitor to be triggered.',\n          properties: {\n            field: {\n              type: 'string',\n              description: 'One of `available_balance_amount`, `pending_balance_amount`, `posted_balance_amount`, `ledger_account_lock_version`.'\n            },\n            operator: {\n              type: 'string',\n              description: 'A logical operator to compare the `field` against the `value`. One of `less_than`, `less_than_or_equals`, `equals`, `greater_than_or_equals`, `greater_than`.'\n            },\n            value: {\n              type: 'integer',\n              description: 'The monitor\\'s `current_ledger_account_balance_state.triggered` will be `true` when comparing the `field` to this integer value using the `operator` is logically true.'\n            }\n          },\n          required: [            'field',\n            'operator',\n            'value'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        current_ledger_account_balance_state: {\n          type: 'object',\n          description: 'The ledger account\\'s balances and the monitor state as of the current ledger account lock version.',\n          properties: {\n            balances: {\n              $ref: '#/$defs/ledger_balances'\n            },\n            ledger_account_lock_version: {\n              type: 'integer',\n              description: 'The current lock version of the ledger account.'\n            },\n            triggered: {\n              type: 'boolean',\n              description: 'If `true`, the ledger account\\'s balances satisfy the `alert_condition` at this lock version.'\n            }\n          },\n          required: [            'balances',\n            'ledger_account_lock_version',\n            'triggered'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'An optional, free-form description for internal use.'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        ledger_account_id: {\n          type: 'string',\n          description: 'The ledger account associated with this balance monitor.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        object: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'alert_condition',\n        'created_at',\n        'current_ledger_account_balance_state',\n        'description',\n        'discarded_at',\n        'ledger_account_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'updated_at'\n      ]\n    },\n    ledger_balances: {\n      type: 'object',\n      properties: {\n        available_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        pending_balance: {\n          $ref: '#/$defs/ledger_balance'\n        },\n        posted_balance: {\n          $ref: '#/$defs/ledger_balance'\n        }\n      },\n      required: [        'available_balance',\n        'pending_balance',\n        'posted_balance'\n      ]\n    },\n    ledger_balance: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'integer'\n        },\n        credits: {\n          type: 'integer'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the ledger account.'\n        },\n        currency_exponent: {\n          type: 'integer',\n          description: 'The currency exponent of the ledger account.'\n        },\n        debits: {\n          type: 'integer'\n        }\n      },\n      required: [        'amount',\n        'credits',\n        'currency',\n        'currency_exponent',\n        'debits'\n      ]\n    }\n  }\n}\n```",
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
      ledger_account_id: {
        type: 'string',
        description: 'Query the balance monitors for a single ledger account.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
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
  const response = await client.ledgerAccountBalanceMonitors.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
