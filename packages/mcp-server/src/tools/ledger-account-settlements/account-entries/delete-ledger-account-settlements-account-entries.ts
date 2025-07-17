// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_settlements.account_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/ledger_account_settlements/{id}/ledger_entries',
  operationId: 'deleteLedgerAccountSettlementEntries',
};

export const tool: Tool = {
  name: 'delete_ledger_account_settlements_account_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove ledger entries from a draft ledger account settlement.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      ledger_entry_ids: {
        type: 'array',
        description:
          'The ids of the ledger entries that are to be added or removed from the ledger account settlement.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'ledger_entry_ids'],
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.ledgerAccountSettlements.accountEntries.del(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
