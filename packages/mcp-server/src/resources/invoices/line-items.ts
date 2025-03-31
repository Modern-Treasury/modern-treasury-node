// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { invoice_id, ...body } = args;
    return client.invoices.lineItems.create(invoice_id, body);
  },
});

registerApiMethod({
  name: 'retrieve_invoices_line_items',
  description: 'get invoice_line_item',
  inputSchema: {
    type: 'object',
    properties: {
      invoice_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { invoice_id, id } = args;
    return client.invoices.lineItems.retrieve(invoice_id, id);
  },
});

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { invoice_id, id, ...body } = args;
    return client.invoices.lineItems.update(invoice_id, id, body);
  },
});

registerApiMethod({
  name: 'list_invoices_line_items',
  description: 'list invoice_line_items',
  inputSchema: {
    type: 'object',
    properties: {
      invoice_id: {
        type: 'string',
      },
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { invoice_id, ...body } = args;
    return client.invoices.lineItems.list(invoice_id, body);
  },
});

registerApiMethod({
  name: 'delete_invoices_line_items',
  description: 'delete invoice_line_item',
  inputSchema: {
    type: 'object',
    properties: {
      invoice_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { invoice_id, id } = args;
    return client.invoices.lineItems.del(invoice_id, id);
  },
});
