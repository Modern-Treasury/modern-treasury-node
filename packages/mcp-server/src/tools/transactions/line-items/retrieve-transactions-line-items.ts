// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'transactions.line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/transaction_line_items/{id}',
  operationId: 'listTransactionLineItem',
};

export const tool: Tool = {
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
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.transactions.lineItems.retrieve(id));
};

export default { metadata, tool, handler };
