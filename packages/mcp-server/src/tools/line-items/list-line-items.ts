// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/{itemizable_type}/{itemizable_id}/line_items',
  operationId: 'listLineItems',
};

export const tool: Tool = {
  name: 'list_line_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of line items\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/line_item'\n  },\n  $defs: {\n    line_item: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        accounting_category_id: {\n          type: 'string',\n          description: 'The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected.'\n        },\n        amount: {\n          type: 'integer',\n          description: 'Value in specified currency\\'s smallest unit. e.g. $10 would be represented as 1000.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'A free-form description of the line item.'\n        },\n        itemizable_id: {\n          type: 'string',\n          description: 'The ID of the payment order or expected payment.'\n        },\n        itemizable_type: {\n          type: 'string',\n          description: 'One of `payment_orders` or `expected_payments`.',\n          enum: [            'ExpectedPayment',\n            'PaymentOrder'\n          ]\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.',\n          additionalProperties: true\n        },\n        object: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'accounting_category_id',\n        'amount',\n        'created_at',\n        'description',\n        'itemizable_id',\n        'itemizable_type',\n        'live_mode',\n        'metadata',\n        'object',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      itemizable_type: {
        type: 'string',
        enum: ['expected_payments', 'payment_orders'],
      },
      itemizable_id: {
        type: 'string',
      },
      after_cursor: {
        type: 'string',
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
    required: ['itemizable_type', 'itemizable_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { itemizable_type, itemizable_id, jq_filter, ...body } = args as any;
  const response = await client.lineItems.list(itemizable_type, itemizable_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
