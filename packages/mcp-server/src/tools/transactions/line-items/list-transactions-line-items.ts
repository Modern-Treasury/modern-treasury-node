// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'transactions.line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/transaction_line_items',
  operationId: 'listTransactionLineItems',
};

export const tool: Tool = {
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
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.transactions.lineItems.list(body);
};

export default { metadata, tool, handler };
