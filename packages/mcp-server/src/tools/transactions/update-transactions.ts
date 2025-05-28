// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'transactions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/transactions/{id}',
  operationId: 'updateTransaction',
};

export const tool: Tool = {
  name: 'update_transactions',
  description: 'Update a single transaction.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.transactions.update(id, body);
};

export default { metadata, tool, handler };
