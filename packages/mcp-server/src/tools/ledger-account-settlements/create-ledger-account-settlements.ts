// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_settlements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledger_account_settlements',
  operationId: 'createLedgerAccountSettlement',
};

export const tool: Tool = {
  name: 'create_ledger_account_settlements',
  description: 'Create a ledger account settlement.',
  inputSchema: {
    type: 'object',
    properties: {
      contra_ledger_account_id: {
        type: 'string',
        description:
          'The id of the contra ledger account that sends to or receives funds from the settled ledger account.',
      },
      settled_ledger_account_id: {
        type: 'string',
        description:
          'The id of the settled ledger account whose ledger entries are queried against, and its balance is reduced as a result.',
      },
      allow_either_direction: {
        type: 'boolean',
        description:
          "If true, the settlement amount and settlement_entry_direction will bring the settlement ledger account's balance closer to zero, even if the balance is negative.",
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account settlement.',
      },
      effective_at_upper_bound: {
        type: 'string',
        description:
          'The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account settlement. The default value is the created_at timestamp of the ledger account settlement.',
        format: 'date-time',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      skip_settlement_ledger_transaction: {
        type: 'boolean',
        description:
          'It is set to `false` by default. It should be set to `true` when migrating existing settlements.',
      },
      status: {
        type: 'string',
        description:
          'The status of the ledger account settlement. It is set to `pending` by default. To post a ledger account settlement at creation, use `posted`.',
        enum: ['pending', 'posted'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ledgerAccountSettlements.create(body);
};

export default { metadata, tool, handler };
