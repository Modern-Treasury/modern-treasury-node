// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_transactions.versions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ledger_transactions_versions',
  description: 'Get a list of ledger transaction versions.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      created_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created_at timestamp. For example, for all dates after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
      ledger_account_statement_id: {
        type: 'string',
        description: 'Get all ledger transaction versions that are included in the ledger account statement.',
      },
      ledger_transaction_id: {
        type: 'string',
        description:
          'Get all the ledger transaction versions corresponding to the ID of a ledger transaction.',
      },
      per_page: {
        type: 'integer',
      },
      version: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the version. For example, for all versions after 2, use version%5Bgt%5D=2.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ledgerTransactions.versions.list(body);
};

export default { metadata, tool, handler };
