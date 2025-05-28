// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'external_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/external_accounts',
  operationId: 'listExternalAccounts',
};

export const tool: Tool = {
  name: 'list_external_accounts',
  description: 'list external accounts',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      party_name: {
        type: 'string',
        description: "Searches the ExternalAccount's party_name AND the Counterparty's party_name",
      },
      per_page: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.externalAccounts.list(body);
};

export default { metadata, tool, handler };
