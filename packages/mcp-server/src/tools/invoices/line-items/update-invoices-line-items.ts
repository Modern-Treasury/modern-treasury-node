// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'invoices.line_items',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_invoices_line_items',
  description: 'update invoice_line_item',
  inputSchema: {
    type: 'object',
    properties: {
      invoice_id: {
        type: 'string',
      },
      id: {
        type: 'string',
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
      name: {
        type: 'string',
        description: 'The name of the line item, typically a product or SKU name.',
      },
      quantity: {
        type: 'integer',
        description:
          'The number of units of a product or service that this line item is for.           Must be a whole number. Defaults to 1 if not provided.',
      },
      unit_amount: {
        type: 'integer',
        description:
          "The cost per unit of the product or service that this line item is for,           specified in the invoice currency's smallest unit.",
      },
      unit_amount_decimal: {
        type: 'string',
        description:
          "The cost per unit of the product or service that this line item is for,           specified in the invoice currency's smallest unit. Accepts decimal strings with up to 12 decimals",
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { invoice_id, id, ...body } = args as any;
  return client.invoices.lineItems.update(invoice_id, id, body);
};

export default { metadata, tool, handler };
