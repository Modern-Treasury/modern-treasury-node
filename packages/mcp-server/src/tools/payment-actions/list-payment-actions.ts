// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_actions',
};

export const tool: Tool = {
  name: 'list_payment_actions',
  description: 'Get a list of all payment actions.',
  inputSchema: {
    type: 'object',
    properties: {
      actionable_id: {
        type: 'string',
        description: 'The ID of the associated actionable object.',
      },
      actionable_type: {
        type: 'string',
        description:
          'The type of the associated actionable object. One of `payment_order`, `expected_payment`.',
      },
      after_cursor: {
        type: 'string',
      },
      created_at: {
        type: 'object',
        description:
          'Filter by `created_at` using comparison operators like `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For example, `created_at[gte]=2024-01-01T00:00:00Z`',
        properties: {
          eq: {
            type: 'string',
            format: 'date-time',
          },
          gt: {
            type: 'string',
            format: 'date-time',
          },
          gte: {
            type: 'string',
            format: 'date-time',
          },
          lt: {
            type: 'string',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [],
      },
      internal_account_id: {
        type: 'string',
        description: 'The ID of one of your internal accounts.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        description: 'Filter by payment actions of a specific status.',
        enum: ['pending', 'processable', 'processing', 'sent', 'failed', 'cancelled'],
      },
      type: {
        type: 'string',
        description: 'The type of payment action.',
        enum: ['stop', 'issue'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.paymentActions.list(body);
};

export default { metadata, tool, handler };
