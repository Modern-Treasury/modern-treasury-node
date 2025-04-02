// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
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

export const handler = (client: ModernTreasury, args: any) => {
  const { id, payment_order_id } = args;
  return client.invoices.addPaymentOrder(id, payment_order_id);
};

export default { metadata, tool, handler };
