// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_actions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_payment_actions',
  description: 'Update a single payment action.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'Optional. Set the status of the payment action to `cancelled` to cancel the payment action. This will only work if the payment action is in a `pending` state.',
        enum: ['pending', 'processable', 'processing', 'sent', 'failed', 'cancelled'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.paymentActions.update(id, body);
};

export default { metadata, tool, handler };
