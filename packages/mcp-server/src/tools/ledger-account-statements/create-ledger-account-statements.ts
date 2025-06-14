// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_statements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledger_account_statements',
  operationId: 'createLedgerAccountStatement',
};

export const tool: Tool = {
  name: 'create_ledger_account_statements',
  description: 'Create a ledger account statement.',
  inputSchema: {
    type: 'object',
    properties: {
      effective_at_lower_bound: {
        type: 'string',
        description:
          'The inclusive lower bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement.',
        format: 'date-time',
      },
      effective_at_upper_bound: {
        type: 'string',
        description:
          'The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement.',
        format: 'date-time',
      },
      ledger_account_id: {
        type: 'string',
        description:
          'The id of the ledger account whose ledger entries are queried against, and its balances are computed as a result.',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account statement.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.ledgerAccountStatements.create(body));
};

export default { metadata, tool, handler };
