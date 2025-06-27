// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/invoices/{id}/payment_orders/{payment_order_id}',
  operationId: 'addPaymentOrderToInvoice',
};

export const tool: Tool = {
  name: 'add_payment_order_invoices',
  description: 'Add a payment order to an invoice.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      payment_order_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, payment_order_id, ...body } = args as any;
  const response = await client.invoices.addPaymentOrder(id, payment_order_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
