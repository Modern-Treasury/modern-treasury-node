// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledgers',
  description: 'Create a ledger.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the ledger.',
      },
      description: {
        type: 'string',
        description: 'An optional free-form description for internal use.',
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
    return client.ledgers.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledgers',
  description: 'Get details on a single ledger.',
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
    return client.ledgers.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_ledgers',
  description: 'Update the details of a ledger.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'An optional free-form description for internal use.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgers.update(id, body);
  },
});

registerApiMethod({
  name: 'list_ledgers',
  description: 'Get a list of ledgers.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'array',
        description:
          'If you have specific IDs to retrieve in bulk, you can pass them as query parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.',
        items: {
          type: 'string',
        },
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
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgers.list(body);
  },
});

registerApiMethod({
  name: 'delete_ledgers',
  description: 'Delete a ledger.',
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
    return client.ledgers.del(id);
  },
});
