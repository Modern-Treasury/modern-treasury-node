// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'connection_legal_entities',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/connection_legal_entities/{id}',
  operationId: 'updateConnectionLegalEntity',
};

export const tool: Tool = {
  name: 'update_connection_legal_entities',
  description: 'Update a connection legal entity.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description: 'The status of the connection legal entity.',
        enum: ['processing'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.connectionLegalEntities.update(id, body);
};

export default { metadata, tool, handler };
