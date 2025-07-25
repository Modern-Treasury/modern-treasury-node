// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}',
  operationId: 'deleteLedgerAccountCategoryFromLedgerAccountCategory',
};

export const tool: Tool = {
  name: 'remove_nested_category_ledger_account_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a ledger account category from a ledger account category.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      sub_category_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'sub_category_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, sub_category_id, ...body } = args as any;
  const response = await client.ledgerAccountCategories
    .removeNestedCategory(id, sub_category_id)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
