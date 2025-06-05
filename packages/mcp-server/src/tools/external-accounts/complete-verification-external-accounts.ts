// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'external_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/external_accounts/{id}/complete_verification',
  operationId: 'completeVerificationExternalAccount',
};

export const tool: Tool = {
  name: 'complete_verification_external_accounts',
  description: 'complete verification of external account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      amounts: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.externalAccounts.completeVerification(id, body));
};

export default { metadata, tool, handler };
