// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/events/{id}',
  operationId: 'getEvent',
};

export const tool: Tool = {
  name: 'retrieve_events',
  description: 'get event',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.events.retrieve(id);
};

export default { metadata, tool, handler };
