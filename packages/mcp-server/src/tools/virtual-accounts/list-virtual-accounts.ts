// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'virtual_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/virtual_accounts',
  operationId: 'listVirtualAccounts',
};

export const tool: Tool = {
  name: 'list_virtual_accounts',
  description: 'Get a list of virtual accounts.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      internal_account_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
        additionalProperties: true,
      },
      per_page: {
        type: 'integer',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.virtualAccounts.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
