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
  name: 'list_legal_entities',
  description: 'Get a list of all legal entities.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      legal_entity_type: {
        type: 'string',
        enum: ['business', 'individual'],
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
      show_deleted: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.legalEntities.list(body);
};

export default { metadata, tool, handler };
