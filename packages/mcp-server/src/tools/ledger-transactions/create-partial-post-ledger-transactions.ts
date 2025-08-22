// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_transactions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledger_transactions/{id}/partial_post',
  operationId: 'CreateLedgerTransactionPartialPost',
};

export const tool: Tool = {
  name: 'create_partial_post_ledger_transactions',
  description: 'Create a ledger transaction that partially posts another ledger transaction.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      posted_ledger_entries: {
        type: 'array',
        description:
          'An array of ledger entry objects to be set on the posted ledger transaction. There must be one entry for each of the existing entries with a lesser amount than the existing entry.',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'integer',
              description:
                "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.",
            },
            direction: {
              type: 'string',
              description:
                "One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`.",
              enum: ['credit', 'debit'],
            },
            ledger_account_id: {
              type: 'string',
              description: 'The ledger account that this ledger entry is associated with.',
            },
            metadata: {
              type: 'object',
              description:
                'Additional data represented as key-value pairs. Both the key and value must be strings.',
              additionalProperties: true,
            },
          },
          required: ['amount', 'direction', 'ledger_account_id'],
        },
      },
      description: {
        type: 'string',
        description:
          'An optional free-form description for the posted ledger transaction. Maximum of 1000 characters allowed.',
      },
      effective_at: {
        type: 'string',
        description:
          'The timestamp (IS08601 format) at which the posted ledger transaction happened for reporting purposes.',
        format: 'date-time',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
        additionalProperties: true,
      },
    },
    required: ['id', 'posted_ledger_entries'],
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ledgerTransactions.createPartialPost(id, body));
};

export default { metadata, tool, handler };
