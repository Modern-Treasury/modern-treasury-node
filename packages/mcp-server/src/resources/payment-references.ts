// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'retrieve_payment_references',
  description: 'get payment_reference',
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
    return client.paymentReferences.retrieve(id);
  },
});

registerApiMethod({
  name: 'list_payment_references',
  description: 'list payment_references',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      reference_number: {
        type: 'string',
        description: 'The actual reference number assigned by the bank.',
      },
      referenceable_id: {
        type: 'string',
        description:
          'The id of the referenceable to search for. Must be accompanied by the referenceable_type or will return an error.',
      },
      referenceable_type: {
        type: 'string',
        description:
          'One of the referenceable types. This must be accompanied by the id of the referenceable or will return an error.',
        enum: ['payment_order', 'return', 'reversal'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.paymentReferences.list(body);
  },
});

registerApiMethod({
  name: 'retireve_payment_references',
  description: 'get payment_reference',
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
    return client.paymentReferences.retireve(id);
  },
});
