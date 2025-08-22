// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_orders',
  operationId: 'listPaymentOrders',
};

export const tool: Tool = {
  name: 'list_payment_orders',
  description: 'Get a list of all payment orders',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      created_at_end: {
        type: 'string',
        description: 'An inclusive upper bound for searching created_at',
        format: 'date',
      },
      created_at_start: {
        type: 'string',
        description: 'An inclusive lower bound for searching created_at',
        format: 'date',
      },
      direction: {
        $ref: '#/$defs/transaction_direction',
      },
      effective_date_end: {
        type: 'string',
        description: 'An inclusive upper bound for searching effective_date',
        format: 'date',
      },
      effective_date_start: {
        type: 'string',
        description: 'An inclusive lower bound for searching effective_date',
        format: 'date',
      },
      external_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
        additionalProperties: true,
      },
      originating_account_id: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      priority: {
        type: 'string',
        description:
          'Either `normal` or `high`. For ACH and EFT payments, `high` represents a same-day ACH or EFT transfer, respectively. For check payments, `high` can mean an overnight check rather than standard mail.',
        enum: ['high', 'normal'],
      },
      process_after_end: {
        type: 'string',
        description: 'An inclusive upper bound for searching process_after',
        format: 'date-time',
      },
      process_after_start: {
        type: 'string',
        description: 'An inclusive lower bound for searching process_after',
        format: 'date-time',
      },
      reference_number: {
        type: 'string',
        description: 'Query for records with the provided reference number',
      },
      status: {
        type: 'string',
        enum: [
          'approved',
          'cancelled',
          'completed',
          'denied',
          'failed',
          'needs_approval',
          'pending',
          'processing',
          'returned',
          'reversed',
          'sent',
          'stopped',
        ],
      },
      transaction_id: {
        type: 'string',
        description: 'The ID of a transaction that the payment order has been reconciled to.',
      },
      type: {
        type: 'string',
        enum: [
          'ach',
          'au_becs',
          'bacs',
          'base',
          'book',
          'card',
          'chats',
          'check',
          'cross_border',
          'dk_nets',
          'eft',
          'ethereum',
          'hu_ics',
          'interac',
          'masav',
          'mx_ccen',
          'neft',
          'nics',
          'nz_becs',
          'pl_elixir',
          'polygon',
          'provxchange',
          'ro_sent',
          'rtp',
          'se_bankgirot',
          'sen',
          'sepa',
          'sg_giro',
          'sic',
          'signet',
          'sknbi',
          'solana',
          'wire',
          'zengin',
        ],
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
  const response = await client.paymentOrders.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
