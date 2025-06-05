// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'routing_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/{accounts_type}/{account_id}/routing_details',
  operationId: 'listRoutingDetails',
};

export const tool: Tool = {
  name: 'list_routing_details',
  description: 'Get a list of routing details for a single internal or external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        $ref: '#/$defs/accounts_type',
      },
      account_id: {
        type: 'string',
      },
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
    },
    $defs: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts', 'internal_accounts'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { accounts_type, account_id, ...body } = args as any;
  return asTextContentResult(await client.routingDetails.list(accounts_type, account_id, body));
};

export default { metadata, tool, handler };
