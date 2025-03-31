// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'list_foreign_exchange_quotes',
  description: 'list foreign_exchange_quotes',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      base_currency: {
        type: 'string',
        description: 'Currency to convert, often called the "sell" currency.',
      },
      effective_at_end: {
        type: 'string',
        description: 'An inclusive upper bound for searching effective_at',
        format: 'date',
      },
      effective_at_start: {
        type: 'string',
        description: 'An inclusive lower bound for searching effective_at',
        format: 'date',
      },
      expires_at: {
        type: 'string',
        description: 'The timestamp until which the quote must be booked by.',
        format: 'date-time',
      },
      internal_account_id: {
        type: 'string',
        description: 'The ID for the `InternalAccount` this quote is associated with.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
      target_currency: {
        type: 'string',
        description: 'Currency to convert the `base_currency` to, often called the "buy" currency.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.foreignExchangeQuotes.list(body);
};

export default { tool, handler };
