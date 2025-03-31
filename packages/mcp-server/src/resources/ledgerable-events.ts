// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerableEvents.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledgerable_events',
  description: 'Get details on a single ledgerable event.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id } = args;
    return client.ledgerableEvents.retrieve(id);
  },
});
