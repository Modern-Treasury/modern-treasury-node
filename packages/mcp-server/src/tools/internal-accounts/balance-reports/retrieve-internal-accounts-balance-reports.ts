// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts.balance_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/internal_accounts/{internal_account_id}/balance_reports/{id}',
  operationId: 'getBalanceReport',
};

export const tool: Tool = {
  name: 'retrieve_internal_accounts_balance_reports',
  description: 'Get a single balance report for a given internal account.',
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { internal_account_id, id, ...body } = args as any;
  return asTextContentResult(await client.internalAccounts.balanceReports.retrieve(internal_account_id, id));
};

export default { metadata, tool, handler };
