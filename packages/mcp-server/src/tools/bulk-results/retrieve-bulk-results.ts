// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'bulk_results',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/bulk_results/{id}',
  operationId: 'getBulkResult',
};

export const tool: Tool = {
  name: 'retrieve_bulk_results',
  description: 'get bulk_result',
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
  return asTextContentResult(await client.bulkResults.retrieve(id));
};

export default { metadata, tool, handler };
