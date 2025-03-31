// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'list_invoices',
  description: 'list invoices',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      due_date_end: {
        type: 'string',
        description: 'An inclusive upper bound for searching due_date',
        format: 'date',
      },
      due_date_start: {
        type: 'string',
        description: 'An inclusive lower bound for searching due_date',
        format: 'date',
      },
      expected_payment_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      number: {
        type: 'string',
        description: 'A unique record number assigned to each invoice that is issued.',
      },
      originating_account_id: {
        type: 'string',
      },
      payment_order_id: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        enum: ['draft', 'paid', 'partially_paid', 'payment_pending', 'unpaid', 'voided'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.invoices.list(body);
};

export default { tool, handler };
