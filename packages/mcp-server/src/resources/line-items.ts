// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'retrieve_line_items',
  description: 'Get a single line item',
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
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { itemizable_type, itemizable_id, id } = args;
    return client.lineItems.retrieve(itemizable_type, itemizable_id, id);
  },
});

registerApiMethod({
  name: 'update_line_items',
  description: 'update line item',
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
      id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { itemizable_type, itemizable_id, id, ...body } = args;
    return client.lineItems.update(itemizable_type, itemizable_id, id, body);
  },
});

registerApiMethod({
  name: 'list_line_items',
  description: 'Get a list of line items',
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
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { itemizable_type, itemizable_id, ...body } = args;
    return client.lineItems.list(itemizable_type, itemizable_id, body);
  },
});
