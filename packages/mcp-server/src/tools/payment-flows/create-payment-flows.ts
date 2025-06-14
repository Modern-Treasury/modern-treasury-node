// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_flows',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/payment_flows',
  operationId: 'createPaymentFlow',
};

export const tool: Tool = {
  name: 'create_payment_flows',
  description: 'create payment_flow',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description:
          "Required. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.",
      },
      counterparty_id: {
        type: 'string',
        description:
          'Required. The ID of a counterparty associated with the payment. As part of the payment workflow an external account will be associated with this model.',
      },
      currency: {
        type: 'string',
        description: 'Required. The currency of the payment.',
      },
      direction: {
        type: 'string',
        description:
          "Required. Describes the direction money is flowing in the transaction. Can only be `debit`. A `debit` pulls money from someone else's account to your own.",
        enum: ['credit', 'debit'],
      },
      originating_account_id: {
        type: 'string',
        description: "Required. The ID of one of your organization's internal accounts.",
      },
      due_date: {
        type: 'string',
        description:
          'Optional. Can only be passed in when `effective_date_selection_enabled` is `true`. When set, the due date is shown to your end-user in the pre-built UI as they are selecting a payment `effective_date`.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.paymentFlows.create(body));
};

export default { metadata, tool, handler };
