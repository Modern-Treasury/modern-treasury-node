// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'expected_payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/expected_payments',
  operationId: 'listExpectedPayments',
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
        $ref: '#/$defs/transaction_direction',
      },
      external_id: {
        type: 'string',
      },
      internal_account_id: {
        type: 'string',
        description: 'Specify internal_account_id to see expected_payments for a specific account.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
        additionalProperties: true,
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
      updated_at_lower_bound: {
        type: 'string',
        description: 'Used to return expected payments updated after some datetime',
        format: 'date-time',
      },
      updated_at_upper_bound: {
        type: 'string',
        description: 'Used to return expected payments updated before some datetime',
        format: 'date-time',
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
  const response = await client.expectedPayments.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
