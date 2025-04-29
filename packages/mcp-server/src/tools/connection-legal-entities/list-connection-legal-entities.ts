// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'connection_legal_entities',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_connection_legal_entities',
  description: 'Get a list of all connection legal entities.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      connection_id: {
        type: 'string',
      },
      legal_entity_id: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        enum: ['completed', 'denied', 'failed', 'processing'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.connectionLegalEntities.list(body);
};

export default { metadata, tool, handler };
