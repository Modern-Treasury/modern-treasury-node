// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/payment_actions',
};

export const tool: Tool = {
  name: 'create_payment_actions',
  description: 'Create a payment action.',
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'Required. The type of the payment action. Determines the action to be taken.',
      },
      actionable_id: {
        type: 'string',
        description: 'Optional. The ID of the associated actionable object.',
      },
      actionable_type: {
        type: 'string',
        description:
          'Optional. The type of the associated actionable object. One of `payment_order`, `expected_payment`. Required if `actionable_id` is passed.',
      },
      details: {
        type: 'object',
        description: 'Optional. The specifc details of the payment action based on type.',
      },
      internal_account_id: {
        type: 'string',
        description:
          "Optional. The ID of one of your organization's internal accounts. Required if `actionable_id` is not passed.",
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.paymentActions.create(body));
};

export default { metadata, tool, handler };
