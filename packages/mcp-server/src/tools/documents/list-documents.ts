// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
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
          'counterparties',
          'expected_payments',
          'external_accounts',
          'identifications',
          'incoming_payment_details',
          'internal_accounts',
          'organizations',
          'paper_items',
          'payment_orders',
          'transactions',
          'connections',
          'conversations',
        ],
      },
      per_page: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.documents.list(body);
};

export default { metadata, tool, handler };
