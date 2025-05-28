// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledgerable_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledgerable_events',
  operationId: 'createLedgerableEvent',
};

export const tool: Tool = {
  name: 'create_ledgerable_events',
  description: 'Create a ledgerable event.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the ledgerable event.',
      },
      custom_data: {
        type: 'object',
        description: 'Additionally data to be used by the Ledger Event Handler.',
      },
      description: {
        type: 'string',
        description: 'Description of the ledgerable event.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ledgerableEvents.create(body);
};

export default { metadata, tool, handler };
