// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'transactions.line_items',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_transactions_line_items',
  description: 'create transaction line items',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description:
          "If a matching object exists in Modern Treasury, `amount` will be populated. Value in specified currency's smallest unit (taken from parent Transaction).",
      },
      expected_payment_id: {
        type: 'string',
        description: 'The ID of the reconciled Expected Payment, otherwise `null`.',
      },
      transaction_id: {
        type: 'string',
        description: 'The ID of the parent transaction.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.transactions.lineItems.create(body);
};

export default { metadata, tool, handler };
