// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ledger_account_categories',
  operationId: 'listLedgerAccountCategories',
};

export const tool: Tool = {
  name: 'list_ledger_account_categories',
  description: 'Get a list of ledger account categories.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'array',
        description:
          'If you have specific IDs to retrieve in bulk, you can pass them as query parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.',
        items: {
          type: 'string',
        },
      },
      after_cursor: {
        type: 'string',
      },
      balances: {
        type: 'object',
        description:
          'For example, if you want the balances as of a particular time (ISO8601), the encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`. The balances as of a time are inclusive of entries with that exact time, but with respect to the ledger accounts that are currently present in the category.',
        properties: {
          effective_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [],
      },
      currency: {
        type: 'string',
      },
      external_id: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
        description: 'Query categories which contain a ledger account directly or through child categories.',
      },
      ledger_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      name: {
        type: 'string',
      },
      parent_ledger_account_category_id: {
        type: 'string',
        description: 'Query categories that are nested underneath a parent category',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.ledgerAccountCategories.list(body));
};

export default { metadata, tool, handler };
