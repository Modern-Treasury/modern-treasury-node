// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_internal_accounts',
  description: 'update internal account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
        description: 'The Counterparty associated to this account.',
      },
      ledger_account_id: {
        type: 'string',
        description: 'The Ledger Account associated to this account.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value.',
      },
      name: {
        type: 'string',
        description: 'The nickname for the internal account.',
      },
      parent_account_id: {
        type: 'string',
        description: 'The parent internal account for this account.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.internalAccounts.update(id, body);
};

export default { metadata, tool, handler };
