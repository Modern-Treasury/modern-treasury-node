// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Remove ledger entries from a draft ledger account settlement.',
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
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.ledgerAccountSettlements.accountEntries.del(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
