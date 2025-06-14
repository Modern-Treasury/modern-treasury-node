// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'create invoice_line_item',
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
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { invoice_id, ...body } = args as any;
  return asTextContentResult(await client.invoices.lineItems.create(invoice_id, body));
};

export default { metadata, tool, handler };
