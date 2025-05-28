// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledger_account_categories',
  operationId: 'createLedgerAccountCategory',
};

export const tool: Tool = {
  name: 'create_ledger_account_categories',
  description: 'Create a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      currency: {
        type: 'string',
        description: 'The currency of the ledger account category.',
      },
      ledger_id: {
        type: 'string',
        description: 'The id of the ledger that this account category belongs to.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account category.',
      },
      normal_balance: {
        $ref: '#/$defs/transaction_direction',
      },
      currency_exponent: {
        type: 'integer',
        description: 'The currency exponent of the ledger account category.',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account category.',
      },
      ledger_account_category_ids: {
        type: 'array',
        description:
          'The array of ledger account category ids that this ledger account category should be a child of.',
        items: {
          type: 'string',
        },
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
  return client.ledgerAccountCategories.create(body);
};

export default { metadata, tool, handler };
