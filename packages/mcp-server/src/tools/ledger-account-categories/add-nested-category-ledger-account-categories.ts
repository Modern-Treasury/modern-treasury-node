// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}',
  operationId: 'addLedgerAccountCategoryToLedgerAccountCategory',
};

export const tool: Tool = {
  name: 'add_nested_category_ledger_account_categories',
  description: 'Add a ledger account category to a ledger account category.',
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

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, sub_category_id, ...body } = args as any;
  await client.ledgerAccountCategories.addNestedCategory(id, sub_category_id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
