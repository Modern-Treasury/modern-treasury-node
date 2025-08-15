// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'counterparties',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/counterparties',
  operationId: 'listCounterparties',
};

export const tool: Tool = {
  name: 'list_counterparties',
  description: 'Get a paginated list of all counterparties.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      created_at_lower_bound: {
        type: 'string',
        description: 'Used to return counterparties created after some datetime.',
        format: 'date-time',
      },
      created_at_upper_bound: {
        type: 'string',
        description: 'Used to return counterparties created before some datetime.',
        format: 'date-time',
      },
      email: {
        type: 'string',
        description: 'Performs a partial string match of the email field. This is also case insensitive.',
      },
      external_id: {
        type: 'string',
        description: 'An optional user-defined 180 character unique identifier.',
      },
      legal_entity_id: {
        type: 'string',
        description: 'Filters for counterparties with the given legal entity ID.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
        additionalProperties: true,
      },
      name: {
        type: 'string',
        description: 'Performs a partial string match of the name field. This is also case insensitive.',
      },
      per_page: {
        type: 'integer',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.counterparties.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
