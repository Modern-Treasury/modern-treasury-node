// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'foreign_exchange_quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/foreign_exchange_quotes/{id}',
  operationId: 'getQuote',
};

export const tool: Tool = {
  name: 'retrieve_foreign_exchange_quotes',
  description: 'get foreign_exchange_quote',
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
  return asTextContentResult(await client.foreignExchangeQuotes.retrieve(id));
};

export default { metadata, tool, handler };
