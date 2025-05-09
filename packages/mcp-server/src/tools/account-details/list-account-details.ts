// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'account_details',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_account_details',
  description: 'Get a list of account details for a single internal or external account.',
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

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { accounts_type, account_id, ...body } = args as any;
  return client.accountDetails.list(accounts_type, account_id, body);
};

export default { metadata, tool, handler };
