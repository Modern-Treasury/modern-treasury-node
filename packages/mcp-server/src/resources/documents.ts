// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_documents',
  description: 'Create a document.',
  inputSchema: {
    type: 'object',
    properties: {
      documentable_id: {
        type: 'string',
        description: 'The unique identifier for the associated object.',
      },
      documentable_type: {
        type: 'string',
        enum: [
          'cases',
          'counterparties',
          'expected_payments',
          'external_accounts',
          'incoming_payment_details',
          'internal_accounts',
          'organizations',
          'paper_items',
          'payment_orders',
          'transactions',
          'decisions',
          'connections',
        ],
      },
      file: {
        type: 'string',
      },
      document_type: {
        type: 'string',
        description: 'A category given to the document, can be `null`.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.documents.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_documents',
  description: 'Get an existing document.',
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
    return client.documents.retrieve(id);
  },
});

registerApiMethod({
  name: 'list_documents',
  description: 'Get a list of documents.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      documentable_id: {
        type: 'string',
        description: 'The unique identifier for the associated object.',
      },
      documentable_type: {
        type: 'string',
        description:
          'The type of the associated object. Currently can be one of `payment_order`, `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`.',
        enum: [
          'cases',
          'counterparties',
          'expected_payments',
          'external_accounts',
          'incoming_payment_details',
          'internal_accounts',
          'organizations',
          'paper_items',
          'payment_orders',
          'transactions',
          'decisions',
          'connections',
        ],
      },
      per_page: {
        type: 'integer',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.documents.list(body);
  },
});
