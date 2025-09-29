// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    required: ['id', 'payment_order_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { payment_order_id, ...body } = args as any;
  const response = await client.invoices.addPaymentOrder(payment_order_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
