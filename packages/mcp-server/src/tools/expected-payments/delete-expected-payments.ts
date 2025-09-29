// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'expected_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/expected_payments/{id}',
  operationId: 'deleteExpectedPayment',
};

export const tool: Tool = {
  name: 'delete_expected_payments',
  description: 'delete expected payment',
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
  return asTextContentResult(await client.expectedPayments.delete(id));
};

export default { metadata, tool, handler };
