// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'paper_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/paper_items/{id}',
  operationId: 'getPaperItem',
};

export const tool: Tool = {
  name: 'retrieve_paper_items',
  description: 'Get details on a single paper item.',
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
  return asTextContentResult(await client.paperItems.retrieve(id));
};

export default { metadata, tool, handler };
