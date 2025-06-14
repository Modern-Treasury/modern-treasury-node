// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledgers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledgers',
  operationId: 'createLedger',
};

export const tool: Tool = {
  name: 'create_ledgers',
  description: 'Create a ledger.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the ledger.',
      },
      description: {
        type: 'string',
        description: 'An optional free-form description for internal use.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.ledgers.create(body));
};

export default { metadata, tool, handler };
