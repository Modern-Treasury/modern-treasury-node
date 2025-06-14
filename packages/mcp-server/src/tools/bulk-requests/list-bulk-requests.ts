// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'bulk_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/bulk_requests',
  operationId: 'listBulkRequests',
};

export const tool: Tool = {
  name: 'list_bulk_requests',
  description: 'list bulk_requests',
  inputSchema: {
    type: 'object',
    properties: {
      action_type: {
        type: 'string',
        description: 'One of create, or update.',
        enum: ['create', 'update', 'delete'],
      },
      after_cursor: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
      resource_type: {
        type: 'string',
        description: 'One of payment_order, expected_payment, or ledger_transaction.',
        enum: [
          'payment_order',
          'ledger_account',
          'ledger_transaction',
          'expected_payment',
          'transaction',
          'transaction_line_item',
          'entity_link',
        ],
      },
      status: {
        type: 'string',
        description: 'One of pending, processing, or completed.',
        enum: ['pending', 'processing', 'completed'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bulkRequests.list(body));
};

export default { metadata, tool, handler };
