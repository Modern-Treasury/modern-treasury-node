// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'account_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/{accounts_type}/{account_id}/account_details/{id}',
  operationId: 'getAccountDetail',
};

export const tool: Tool = {
  name: 'retrieve_account_details',
  description: 'Get a single account detail for a single internal or external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        $ref: '#/$defs/accounts_type',
      },
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
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
  const { accounts_type, account_id, id, ...body } = args as any;
  return asTextContentResult(await client.accountDetails.retrieve(accounts_type, account_id, id));
};

export default { metadata, tool, handler };
