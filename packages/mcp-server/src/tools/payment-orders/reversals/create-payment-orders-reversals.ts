// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_orders.reversals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/payment_orders/{payment_order_id}/reversals',
  operationId: 'createReversal',
};

export const tool: Tool = {
  name: 'create_payment_orders_reversals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a reversal for a payment order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/reversal',\n  $defs: {\n    reversal: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        ledger_transaction_id: {\n          type: 'string',\n          description: 'The ID of the ledger transaction linked to the reversal.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        object: {\n          type: 'string'\n        },\n        payment_order_id: {\n          type: 'string',\n          description: 'The ID of the relevant Payment Order.'\n        },\n        reason: {\n          type: 'string',\n          description: 'The reason for the reversal.',\n          enum: [            'duplicate',\n            'incorrect_amount',\n            'incorrect_receiving_account',\n            'date_earlier_than_intended',\n            'date_later_than_intended'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the reversal.',\n          enum: [            'completed',\n            'failed',\n            'pending',\n            'processing',\n            'returned',\n            'sent'\n          ]\n        },\n        transaction_ids: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'The ID of the relevant Transaction or `null`.'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'ledger_transaction_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'payment_order_id',\n        'reason',\n        'status',\n        'transaction_ids',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      payment_order_id: {
        type: 'string',
        description: 'The id of the payment order being reversed.',
      },
      reason: {
        type: 'string',
        description:
          'The reason for the reversal. Must be one of `duplicate`, `incorrect_amount`, `incorrect_receiving_account`, `date_earlier_than_intended`, `date_later_than_intended`.',
        enum: [
          'duplicate',
          'incorrect_amount',
          'incorrect_receiving_account',
          'date_earlier_than_intended',
          'date_later_than_intended',
        ],
      },
      ledger_transaction: {
        $ref: '#/$defs/ledger_transaction_create_request',
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
    required: ['payment_order_id', 'reason'],
    $defs: {
      ledger_transaction_create_request: {
        type: 'object',
        properties: {
          ledger_entries: {
            type: 'array',
            description: 'An array of ledger entry objects.',
            items: {
              $ref: '#/$defs/ledger_entry_create_request',
            },
          },
          description: {
            type: 'string',
            description: 'An optional description for internal use.',
          },
          effective_at: {
            type: 'string',
            description:
              'The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes.',
            format: 'date-time',
          },
          effective_date: {
            type: 'string',
            description:
              'The date (YYYY-MM-DD) on which the ledger transaction happened for reporting purposes.',
            format: 'date',
          },
          external_id: {
            type: 'string',
            description:
              'A unique string to represent the ledger transaction. Only one pending or posted ledger transaction may have this ID in the ledger.',
          },
          ledgerable_id: {
            type: 'string',
            description:
              'If the ledger transaction can be reconciled to another object in Modern Treasury, the id will be populated here, otherwise null.',
          },
          ledgerable_type: {
            type: 'string',
            description:
              'If the ledger transaction can be reconciled to another object in Modern Treasury, the type will be populated here, otherwise null. This can be one of payment_order, incoming_payment_detail, expected_payment, return, paper_item, or reversal.',
            enum: ['expected_payment', 'incoming_payment_detail', 'payment_order', 'return', 'reversal'],
          },
          metadata: {
            type: 'object',
            description:
              'Additional data represented as key-value pairs. Both the key and value must be strings.',
          },
          status: {
            type: 'string',
            description: 'To post a ledger transaction at creation, use `posted`.',
            enum: ['archived', 'pending', 'posted'],
          },
        },
        required: ['ledger_entries'],
      },
      ledger_entry_create_request: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
            description:
              "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.",
          },
          direction: {
            $ref: '#/$defs/transaction_direction',
          },
          ledger_account_id: {
            type: 'string',
            description: 'The ledger account that this ledger entry is associated with.',
          },
          available_balance_amount: {
            type: 'object',
            description:
              'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s available balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
          },
          lock_version: {
            type: 'integer',
            description:
              'Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details.',
          },
          metadata: {
            type: 'object',
            description:
              'Additional data represented as key-value pairs. Both the key and value must be strings.',
          },
          pending_balance_amount: {
            type: 'object',
            description:
              'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s pending balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
          },
          posted_balance_amount: {
            type: 'object',
            description:
              'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s posted balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
          },
          show_resulting_ledger_account_balances: {
            type: 'boolean',
            description:
              'If true, response will include the balance of the associated ledger account for the entry.',
          },
        },
        required: ['amount', 'direction', 'ledger_account_id'],
      },
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { payment_order_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.paymentOrders.reversals.create(payment_order_id, body)),
  );
};

export default { metadata, tool, handler };
