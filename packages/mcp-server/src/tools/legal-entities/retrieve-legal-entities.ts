// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'legal_entities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/legal_entities/{id}',
  operationId: 'getLegalEntity',
};

export const tool: Tool = {
  name: 'retrieve_legal_entities',
  description: 'Get details on a single legal entity.',
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
  return asTextContentResult(await client.legalEntities.retrieve(id));
};

export default { metadata, tool, handler };
