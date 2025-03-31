// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_transactions_line_items',
  description: 'create transaction line items',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description:
          "If a matching object exists in Modern Treasury, `amount` will be populated. Value in specified currency's smallest unit (taken from parent Transaction).",
      },
      expected_payment_id: {
        type: 'string',
        description: 'The ID of the reconciled Expected Payment, otherwise `null`.',
      },
      transaction_id: {
        type: 'string',
        description: 'The ID of the parent transaction.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.transactions.lineItems.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_transactions_line_items',
  description: 'get transaction line item',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id } = args;
    return client.transactions.lineItems.retrieve(id);
  },
});

registerApiMethod({
  name: 'list_transactions_line_items',
  description: 'list transaction_line_items',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'object',
      },
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      transaction_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['originating', 'receiving'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.transactions.lineItems.list(body);
  },
});

registerApiMethod({
  name: 'delete_transactions_line_items',
  description: 'delete transaction line item',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id } = args;
    return client.transactions.lineItems.del(id);
  },
});
