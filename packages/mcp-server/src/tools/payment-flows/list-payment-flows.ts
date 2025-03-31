// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
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
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.paymentFlows.list(body);
};

export default { tool, handler };
