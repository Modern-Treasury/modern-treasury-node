// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts.balance_reports',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/internal_accounts/{internal_account_id}/balance_reports/{id}',
  operationId: 'deleteBalanceReport',
};

export const tool: Tool = {
  name: 'delete_internal_accounts_balance_reports',
  description: 'Deletes a given balance report.',
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
    required: ['internal_account_id', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.internalAccounts.balanceReports.delete(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
