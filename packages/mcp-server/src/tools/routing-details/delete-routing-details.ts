// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'routing_details',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_routing_details',
  description: 'Delete a routing detail for a single external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts'],
      },
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { accounts_type, account_id, id, ...body } = args as any;
  return client.routingDetails.del(accounts_type, account_id, id);
};

export default { metadata, tool, handler };
