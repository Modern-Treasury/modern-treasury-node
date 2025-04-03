// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'ping_client',
  description: 'A test endpoint often used to confirm credentials and headers are being passed in correctly.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const {} = args;
  return client.ping();
};

export default { metadata, tool, handler };
