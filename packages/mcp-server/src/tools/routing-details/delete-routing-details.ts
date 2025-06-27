// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'routing_details',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/{accounts_type}/{account_id}/routing_details/{id}',
  operationId: 'deleteRoutingDetail',
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

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { accounts_type, account_id, id, ...body } = args as any;
  const response = await client.routingDetails.del(accounts_type, account_id, id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
