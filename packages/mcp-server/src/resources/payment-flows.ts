// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.paymentFlows.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_payment_flows',
  description: 'get payment_flow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id } = args;
    return client.paymentFlows.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_payment_flows',
  description: 'update payment_flow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'Required. The updated status of the payment flow. Can only be used to mark a flow as `cancelled`.',
        enum: ['cancelled'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.paymentFlows.update(id, body);
  },
});

registerApiMethod({
  name: 'list_payment_flows',
  description: 'list payment_flows',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      client_token: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
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
      receiving_account_id: {
        type: 'string',
      },
      status: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.paymentFlows.list(body);
  },
});
