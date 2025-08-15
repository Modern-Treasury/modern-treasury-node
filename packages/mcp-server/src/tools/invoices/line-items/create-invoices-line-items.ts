// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'invoices.line_items',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/invoices/{invoice_id}/invoice_line_items',
  operationId: 'createInvoiceLineItem',
};

export const tool: Tool = {
  name: 'create_invoices_line_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\ncreate invoice_line_item\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_line_item',\n  $defs: {\n    invoice_line_item: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer',\n          description: 'The total amount for this line item specified in the invoice currency\\'s smallest unit.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional free-form description of the line item.'\n        },\n        direction: {\n          type: 'string',\n          description: 'Either `debit` or `credit`. `debit` indicates that a client owes the business money           and increases the invoice\\'s `total_amount` due. `credit` has the opposite intention and effect.'\n        },\n        invoice_id: {\n          type: 'string',\n          description: 'The ID of the invoice for this line item.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.',\n          additionalProperties: true\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the line item, typically a product or SKU name.'\n        },\n        object: {\n          type: 'string'\n        },\n        quantity: {\n          type: 'integer',\n          description: 'The number of units of a product or service that this line item is for.           Must be a whole number. Defaults to 1 if not provided.'\n        },\n        unit_amount: {\n          type: 'integer',\n          description: 'The cost per unit of the product or service that this line item is for,           specified in the invoice currency\\'s smallest unit.'\n        },\n        unit_amount_decimal: {\n          type: 'string',\n          description: 'The cost per unit of the product or service that this line item is for,           specified in the invoice currency\\'s smallest unit. Accepts decimal strings with up to 12 decimals'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created_at',\n        'description',\n        'direction',\n        'invoice_id',\n        'live_mode',\n        'metadata',\n        'name',\n        'object',\n        'quantity',\n        'unit_amount',\n        'unit_amount_decimal',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invoice_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'The name of the line item, typically a product or SKU name.',
      },
      unit_amount: {
        type: 'integer',
        description:
          "The cost per unit of the product or service that this line item is for,           specified in the invoice currency's smallest unit.",
      },
      description: {
        type: 'string',
        description: 'An optional free-form description of the line item.',
      },
      direction: {
        type: 'string',
        description:
          "Either `debit` or `credit`. `debit` indicates that a client owes the business money           and increases the invoice's `total_amount` due. `credit` has the opposite intention and effect.",
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
        additionalProperties: true,
      },
      quantity: {
        type: 'integer',
        description:
          'The number of units of a product or service that this line item is for.           Must be a whole number. Defaults to 1 if not provided.',
      },
      unit_amount_decimal: {
        type: 'string',
        description:
          "The cost per unit of the product or service that this line item is for,           specified in the invoice currency's smallest unit. Accepts decimal strings with up to 12 decimals",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['invoice_id', 'name', 'unit_amount'],
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { invoice_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.invoices.lineItems.create(invoice_id, body)),
  );
};

export default { metadata, tool, handler };
