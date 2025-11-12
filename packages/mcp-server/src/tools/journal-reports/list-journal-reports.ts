// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'journal_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/journal_reports',
  operationId: 'listJournalReports',
};

export const tool: Tool = {
  name: 'list_journal_reports',
  description: 'Retrieve a list of journal reports',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const response = await client.journalReports.list().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
