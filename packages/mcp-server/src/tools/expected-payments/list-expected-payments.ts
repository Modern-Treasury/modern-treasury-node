// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'expected_payments',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_expected_payments',
  description: 'list expected_payments',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
        description: 'Specify counterparty_id to see expected_payments for a specific account.',
      },
      created_at_lower_bound: {
        type: 'string',
        description: 'Used to return expected payments created after some datetime',
        format: 'date-time',
      },
      created_at_upper_bound: {
        type: 'string',
        description: 'Used to return expected payments created before some datetime',
        format: 'date-time',
      },
      direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
      internal_account_id: {
        type: 'string',
        description: 'Specify internal_account_id to see expected_payments for a specific account.',
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
        description: 'One of unreconciled, reconciled, or archived.',
        enum: ['archived', 'partially_reconciled', 'reconciled', 'unreconciled'],
      },
      type: {
        type: 'string',
        description:
          'One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp,sen, sepa, signet, wire',
        enum: [
          'ach',
          'au_becs',
          'bacs',
          'book',
          'card',
          'chats',
          'check',
          'cross_border',
          'dk_nets',
          'eft',
          'hu_ics',
          'interac',
          'masav',
          'mx_ccen',
          'neft',
          'nics',
          'nz_becs',
          'pl_elixir',
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
          'wire',
          'zengin',
        ],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.expectedPayments.list(body);
};

export default { metadata, tool, handler };
