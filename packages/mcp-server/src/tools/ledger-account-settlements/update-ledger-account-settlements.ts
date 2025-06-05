// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_settlements',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/ledger_account_settlements/{id}',
  operationId: 'updateLedgerAccountSettlement',
};

export const tool: Tool = {
  name: 'update_ledger_account_settlements',
  description: 'Update the details of a ledger account settlement.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account settlement.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      status: {
        type: 'string',
        description:
          'To post a pending ledger account settlement, use `posted`. To archive a pending ledger transaction, use `archived`.',
        enum: ['posted', 'archived'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ledgerAccountSettlements.update(id, body));
};

export default { metadata, tool, handler };
