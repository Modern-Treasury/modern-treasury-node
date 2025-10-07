// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_orders.reversals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_orders/{payment_order_id}/reversals/{reversal_id}',
  operationId: 'getReversal',
};

export const tool: Tool = {
  name: 'retrieve_payment_orders_reversals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details on a single reversal of a payment order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/reversal',\n  $defs: {\n    reversal: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        ledger_transaction_id: {\n          type: 'string',\n          description: 'The ID of the ledger transaction linked to the reversal.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.',\n          additionalProperties: true\n        },\n        object: {\n          type: 'string'\n        },\n        payment_order_id: {\n          type: 'string',\n          description: 'The ID of the relevant Payment Order.'\n        },\n        reason: {\n          type: 'string',\n          description: 'The reason for the reversal.',\n          enum: [            'duplicate',\n            'incorrect_amount',\n            'incorrect_receiving_account',\n            'date_earlier_than_intended',\n            'date_later_than_intended'\n          ]\n        },\n        reconciled: {\n          type: 'boolean',\n          description: 'True if the object is reconciled, false otherwise.'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the reversal.',\n          enum: [            'completed',\n            'failed',\n            'pending',\n            'processing',\n            'returned',\n            'sent'\n          ]\n        },\n        transaction_ids: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'The ID of the relevant Transaction or `null`.'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'ledger_transaction_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'payment_order_id',\n        'reason',\n        'reconciled',\n        'status',\n        'transaction_ids',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      payment_order_id: {
        type: 'string',
      },
      reversal_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['payment_order_id', 'reversal_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { reversal_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.paymentOrders.reversals.retrieve(reversal_id, body)),
  );
};

export default { metadata, tool, handler };
