// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.counterparties.del(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
