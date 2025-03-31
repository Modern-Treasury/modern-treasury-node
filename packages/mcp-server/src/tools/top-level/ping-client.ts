// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'ping_$client',
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

export default { tool, handler };
