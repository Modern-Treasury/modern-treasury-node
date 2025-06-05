// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ping',
  operationId: 'pingAPI',
};

export const tool: Tool = {
  name: 'ping_client',
  description: 'A test endpoint often used to confirm credentials and headers are being passed in correctly.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.ping());
};

export default { metadata, tool, handler };
