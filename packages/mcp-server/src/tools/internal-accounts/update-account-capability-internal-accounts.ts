// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/internal_accounts/{internal_account_id}/account_capabilities/{id}',
  operationId: 'updateAccountCapability',
};

export const tool: Tool = {
  name: 'update_account_capability_internal_accounts',
  description: 'update account_capability',
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      identifier: {
        type: 'string',
        description:
          'A unique reference assigned by your bank for tracking and recognizing payment files. It is important this is formatted exactly how the bank assigned it.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { internal_account_id, id, ...body } = args as any;
  return asTextContentResult(
    await client.internalAccounts.updateAccountCapability(internal_account_id, id, body),
  );
};

export default { metadata, tool, handler };
