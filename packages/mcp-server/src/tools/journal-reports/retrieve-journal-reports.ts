// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'journal_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/journal_reports/{id}',
  operationId: 'getJournalReport',
};

export const tool: Tool = {
  name: 'retrieve_journal_reports',
  description: 'Retrieve a specific journal report',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.journalReports.retrieve(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
