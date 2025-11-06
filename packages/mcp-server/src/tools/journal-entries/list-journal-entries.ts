// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'journal_entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/journal_entries',
  operationId: 'listJournalEntries',
};

export const tool: Tool = {
  name: 'list_journal_entries',
  description: 'Retrieve a list of journal entries',
  inputSchema: {
    type: 'object',
    properties: {
      journal_report_id: {
        type: 'string',
        description: 'The ID of the journal report',
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination',
      },
      per_page: {
        type: 'integer',
        description: 'Number of items per page',
      },
    },
    required: ['journal_report_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.journalEntries.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
