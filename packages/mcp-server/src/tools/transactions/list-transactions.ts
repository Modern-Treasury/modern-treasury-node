// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'transactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/transactions',
  operationId: 'listTransactions',
};

export const tool: Tool = {
  name: 'list_transactions',
  description: 'Get a list of all transactions.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      as_of_date_end: {
        type: 'string',
        description:
          'Filters transactions with an `as_of_date` starting on or before the specified date (YYYY-MM-DD).',
        format: 'date',
      },
      as_of_date_start: {
        type: 'string',
        description:
          'Filters transactions with an `as_of_date` starting on or after the specified date (YYYY-MM-DD).',
        format: 'date',
      },
      counterparty_id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Filters for transactions including the queried string in the description.',
      },
      direction: {
        type: 'string',
      },
      internal_account_id: {
        type: 'string',
        description:
          'Specify `internal_account_id` if you wish to see transactions to/from a specific account.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      payment_type: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      posted: {
        type: 'boolean',
        description: 'Either `true` or `false`.',
      },
      transactable_type: {
        type: 'string',
      },
      vendor_id: {
        type: 'string',
        description:
          'Filters for transactions including the queried vendor id (an identifier given to transactions by the bank).',
      },
      virtual_account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.transactions.list(body);
};

export default { metadata, tool, handler };
