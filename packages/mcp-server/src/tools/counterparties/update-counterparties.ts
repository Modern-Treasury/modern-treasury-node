// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'counterparties',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/counterparties/{id}',
  operationId: 'updateCounterparty',
};

export const tool: Tool = {
  name: 'update_counterparties',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a given counterparty with new information.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'A new email for the counterparty.',
      },
      legal_entity_id: {
        type: 'string',
        description: 'The id of the legal entity.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value.',
      },
      name: {
        type: 'string',
        description: 'A new name for the counterparty. Will only update if passed.',
      },
      send_remittance_advice: {
        type: 'boolean',
        description:
          'If this is `true`, Modern Treasury will send an email to the counterparty whenever an associated payment order is sent to the bank.',
      },
      taxpayer_identifier: {
        type: 'string',
        description: 'Either a valid SSN or EIN.',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.counterparties.update(id, body));
};

export default { metadata, tool, handler };
