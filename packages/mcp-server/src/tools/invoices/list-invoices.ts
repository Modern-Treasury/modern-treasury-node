// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/invoices',
  operationId: 'listInvoices',
};

export const tool: Tool = {
  name: 'list_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist invoices",
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

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.invoices.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
