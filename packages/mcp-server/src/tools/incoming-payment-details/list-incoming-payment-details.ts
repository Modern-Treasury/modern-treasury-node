// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'incoming_payment_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/incoming_payment_details',
  operationId: 'listIncomingPaymentDetails',
};

export const tool: Tool = {
  name: 'list_incoming_payment_details',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of Incoming Payment Details.",
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      as_of_date_end: {
        type: 'string',
        description:
          'Filters incoming payment details with an as_of_date starting on or before the specified date (YYYY-MM-DD).',
        format: 'date',
      },
      as_of_date_start: {
        type: 'string',
        description:
          'Filters incoming payment details with an as_of_date starting on or after the specified date (YYYY-MM-DD).',
        format: 'date',
      },
      direction: {
        $ref: '#/$defs/transaction_direction',
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
        description:
          'The current status of the incoming payment order. One of `pending`, `completed`, or `returned`.',
        enum: ['completed', 'pending', 'returned'],
      },
      type: {
        type: 'string',
        description: 'One of: `ach`, `book`, `check`, `eft`, `interac`, `rtp`, `sepa`, `signet`, or `wire`.',
        enum: [
          'ach',
          'au_becs',
          'bacs',
          'book',
          'check',
          'eft',
          'interac',
          'neft',
          'nz_becs',
          'rtp',
          'sepa',
          'signet',
          'wire',
        ],
      },
      virtual_account_id: {
        type: 'string',
        description: 'If the incoming payment detail is in a virtual account, the ID of the Virtual Account.',
      },
    },
    required: [],
    $defs: {
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.incomingPaymentDetails.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
