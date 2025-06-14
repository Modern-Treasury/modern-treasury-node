// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'paper_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/paper_items',
  operationId: 'listPaperItems',
};

export const tool: Tool = {
  name: 'list_paper_items',
  description: 'Get a list of all paper items.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      deposit_date_end: {
        type: 'string',
        description: 'Specify an inclusive end date (YYYY-MM-DD) when filtering by deposit_date',
        format: 'date',
      },
      deposit_date_start: {
        type: 'string',
        description: 'Specify an inclusive start date (YYYY-MM-DD) when filtering by deposit_date',
        format: 'date',
      },
      lockbox_number: {
        type: 'string',
        description:
          'Specify `lockbox_number` if you wish to see paper items that are associated with a specific lockbox number.',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.paperItems.list(body));
};

export default { metadata, tool, handler };
