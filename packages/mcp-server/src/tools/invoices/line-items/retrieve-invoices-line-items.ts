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
  httpPath: '/api/invoices/{invoice_id}/invoice_line_items/{id}',
  operationId: 'getInvoiceLineItem',
};

export const tool: Tool = {
  name: 'retrieve_invoices_line_items',
  description: 'get invoice_line_item',
  inputSchema: {
    type: 'object',
    properties: {
      invoice_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { invoice_id, id, ...body } = args as any;
  return asTextContentResult(await client.invoices.lineItems.retrieve(invoice_id, id));
};

export default { metadata, tool, handler };
