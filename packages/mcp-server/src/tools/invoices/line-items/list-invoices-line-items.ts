// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'invoices.line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/invoices/{invoice_id}/invoice_line_items',
  operationId: 'listInvoiceLineItems',
};

export const tool: Tool = {
  name: 'list_invoices_line_items',
  description: 'list invoice_line_items',
  inputSchema: {
    type: 'object',
    properties: {
      invoice_id: {
        type: 'string',
      },
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { invoice_id, ...body } = args as any;
  return asTextContentResult(await client.invoices.lineItems.list(invoice_id, body));
};

export default { metadata, tool, handler };
