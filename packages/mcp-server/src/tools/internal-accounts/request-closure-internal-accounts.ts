// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/internal_accounts/{id}/request_closure',
  operationId: 'requestInternalAccountClosure',
};

export const tool: Tool = {
  name: 'request_closure_internal_accounts',
  description: 'request closure of internal account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.internalAccounts.requestClosure(id));
  } catch (error) {
    if (error instanceof ModernTreasury.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
