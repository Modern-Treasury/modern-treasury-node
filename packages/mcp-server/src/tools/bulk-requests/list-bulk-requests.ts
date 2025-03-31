// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'list_bulk_requests',
  description: 'list bulk_requests',
  inputSchema: {
    type: 'object',
    properties: {
      action_type: {
        type: 'string',
        description: 'One of create, or update.',
        enum: ['create', 'update', 'delete'],
      },
      after_cursor: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
      resource_type: {
        type: 'string',
        description: 'One of payment_order, expected_payment, or ledger_transaction.',
        enum: [
          'payment_order',
          'ledger_account',
          'ledger_transaction',
          'expected_payment',
          'transaction',
          'entity_link',
        ],
      },
      status: {
        type: 'string',
        description: 'One of pending, processing, or completed.',
        enum: ['pending', 'processing', 'completed'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.bulkRequests.list(body);
};

export default { tool, handler };
