// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'counterparties',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/counterparties/{id}',
  operationId: 'deleteCounterparty',
};

export const tool: Tool = {
  name: 'delete_counterparties',
  description: 'Deletes a given counterparty.',
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
  await client.counterparties.del(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
