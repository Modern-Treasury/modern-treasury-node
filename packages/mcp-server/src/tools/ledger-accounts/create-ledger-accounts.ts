// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_ledger_accounts',
  description: 'Create a ledger account.',
  inputSchema: {
    type: 'object',
    properties: {
      currency: {
        type: 'string',
        description: 'The currency of the ledger account.',
      },
      ledger_id: {
        type: 'string',
        description: 'The id of the ledger that this account belongs to.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account.',
      },
      normal_balance: {
        $ref: '#/$defs/transaction_direction',
      },
      currency_exponent: {
        type: 'integer',
        description: 'The currency exponent of the ledger account.',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account.',
      },
      ledger_account_category_ids: {
        type: 'array',
        description:
          'The array of ledger account category ids that this ledger account should be a child of.',
        items: {
          type: 'string',
        },
      },
      ledgerable_id: {
        type: 'string',
        description:
          'If the ledger account links to another object in Modern Treasury, the id will be populated here, otherwise null.',
      },
      ledgerable_type: {
        type: 'string',
        description:
          'If the ledger account links to another object in Modern Treasury, the type will be populated here, otherwise null. The value is one of internal_account or external_account.',
        enum: ['counterparty', 'external_account', 'internal_account', 'virtual_account'],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
    $defs: {
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ledgerAccounts.create(body);
};

export default { metadata, tool, handler };
