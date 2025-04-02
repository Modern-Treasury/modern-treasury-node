// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.documents.create(body);
};

export default { metadata, tool, handler };
