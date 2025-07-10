// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'transactions.line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/transaction_line_items/{id}',
  operationId: 'listTransactionLineItem',
};

export const tool: Tool = {
  name: 'retrieve_transactions_line_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nget transaction line item\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/transaction_line_item',\n  $defs: {\n    transaction_line_item: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer',\n          description: 'If a matching object exists in Modern Treasury, `amount` will be populated. Value in specified currency\\'s smallest unit (taken from parent Transaction).'\n        },\n        counterparty_id: {\n          type: 'string',\n          description: 'The ID for the counterparty for this transaction line item.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'If no matching object is found, `description` will be a free-form text field describing the line item. This field may contain personally identifiable information (PII) and is not included in API responses by default. Learn more about changing your settings at https://docs.moderntreasury.com/reference/personally-identifiable-information.'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        expected_payment_id: {\n          type: 'string',\n          description: 'The ID of the reconciled Expected Payment, otherwise `null`.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment, or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        reconcilable: {\n          type: 'boolean',\n          description: 'Describes whether this line item should be counted towards the corresponding transaction’s reconciliation.'\n        },\n        reconciliation_group_id: {\n          type: 'string',\n          description: 'The ID of the reconciliation group this line item belongs to, otherwise `null`.'\n        },\n        transactable_id: {\n          type: 'string',\n          description: 'If a matching object exists in Modern Treasury, the ID will be populated here, otherwise `null`.'\n        },\n        transactable_type: {\n          type: 'string',\n          description: 'If a matching object exists in Modern Treasury, the type will be populated here, otherwise `null`.',\n          enum: [            'incoming_payment_detail',\n            'paper_item',\n            'payment_order',\n            'payment_order_attempt',\n            'return',\n            'reversal'\n          ]\n        },\n        transaction_id: {\n          type: 'string',\n          description: 'The ID of the parent transaction.'\n        },\n        type: {\n          type: 'string',\n          description: 'Indicates whether the line item is `originating` or `receiving` (see https://www.moderntreasury.com/journal/beginners-guide-to-ach for more).',\n          enum: [            'originating',\n            'receiving'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'counterparty_id',\n        'created_at',\n        'description',\n        'discarded_at',\n        'expected_payment_id',\n        'live_mode',\n        'object',\n        'reconcilable',\n        'reconciliation_group_id',\n        'transactable_id',\n        'transactable_type',\n        'transaction_id',\n        'type',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.transactions.lineItems.retrieve(id)));
};

export default { metadata, tool, handler };
