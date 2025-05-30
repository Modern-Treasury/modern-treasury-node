// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'remove_nested_category_ledger_account_categories',
  description: 'Delete a ledger account category from a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      sub_category_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, sub_category_id, ...body } = args as any;
  return client.ledgerAccountCategories.removeNestedCategory(id, sub_category_id);
};

export default { metadata, tool, handler };
