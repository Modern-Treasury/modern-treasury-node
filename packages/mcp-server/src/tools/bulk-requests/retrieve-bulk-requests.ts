// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'bulk_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/bulk_requests/{id}',
  operationId: 'getBulkRequest',
};

export const tool: Tool = {
  name: 'retrieve_bulk_requests',
  description: 'get bulk_request',
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
  return asTextContentResult(await client.bulkRequests.retrieve(id));
};

export default { metadata, tool, handler };
