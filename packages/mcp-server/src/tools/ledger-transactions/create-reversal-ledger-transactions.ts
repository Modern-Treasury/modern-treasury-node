// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_transactions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledger_transactions/{id}/reversal',
  operationId: 'CreateLedgerTransactionReversal',
};

export const tool: Tool = {
  name: 'create_reversal_ledger_transactions',
  description: 'Create a ledger transaction reversal.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description:
          'An optional free-form description for the reversal ledger transaction. Maximum of 1000 characters allowed.',
      },
      effective_at: {
        type: 'string',
        description:
          'The timestamp (ISO8601 format) at which the reversal ledger transaction happened for reporting purposes. It defaults to the `effective_at` of the original ledger transaction if not provided.',
        format: 'date-time',
      },
      external_id: {
        type: 'string',
        description: 'Must be unique within the ledger.',
      },
      ledgerable_id: {
        type: 'string',
        description:
          "Specify this if you'd like to link the reversal ledger transaction to a Payment object like Return or Reversal.",
      },
      ledgerable_type: {
        type: 'string',
        description:
          "Specify this if you'd like to link the reversal ledger transaction to a Payment object like Return or Reversal.",
        enum: ['expected_payment', 'incoming_payment_detail', 'payment_order', 'return', 'reversal'],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data to be added to the reversal ledger transaction as key-value pairs. Both the key and value must be strings.',
      },
      status: {
        type: 'string',
        description: 'Status of the reversal ledger transaction. It defaults to `posted` if not provided.',
        enum: ['archived', 'pending', 'posted'],
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ledgerTransactions.createReversal(id, body));
};

export default { metadata, tool, handler };
