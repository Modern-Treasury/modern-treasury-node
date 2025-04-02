// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'external_accounts',
  operation: 'write',
  tags: [],
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

export const handler = (client: ModernTreasury, args: any) => {
  const { id, ...body } = args;
  return client.externalAccounts.completeVerification(id, body);
};

export default { metadata, tool, handler };
