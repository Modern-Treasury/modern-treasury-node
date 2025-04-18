// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'legal_entities',
  operation: 'read',
  tags: [],
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

export const handler = (client: ModernTreasury, args: any) => {
  const { id } = args;
  return client.legalEntities.retrieve(id);
};

export default { metadata, tool, handler };
