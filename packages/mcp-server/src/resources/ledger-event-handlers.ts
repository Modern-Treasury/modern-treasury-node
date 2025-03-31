// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledger_event_handlers',
  description: 'create ledger_event_handler',
  inputSchema: {
    type: 'object',
    properties: {
      ledger_transaction_template: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'An optional description for internal use.',
          },
          effective_at: {
            type: 'string',
            description:
              'The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes.',
          },
          ledger_entries: {
            type: 'array',
            description: 'An array of ledger entry objects.',
            items: {
              type: 'object',
              properties: {
                amount: {
                  type: 'string',
                  description: 'The LHS of the conditional.',
                },
                direction: {
                  type: 'string',
                  description: 'What the operator between the `field` and `value` is.',
                },
                ledger_account_id: {
                  type: 'string',
                  description: 'The RHS of the conditional.',
                },
              },
              required: ['amount', 'direction', 'ledger_account_id'],
            },
          },
          status: {
            type: 'string',
            description: 'To post a ledger transaction at creation, use `posted`.',
          },
        },
        required: ['description', 'effective_at', 'ledger_entries', 'status'],
      },
      name: {
        type: 'string',
        description: 'Name of the ledger event handler.',
      },
      conditions: {
        type: 'object',
        properties: {
          field: {
            type: 'string',
            description: 'The LHS of the conditional.',
          },
          operator: {
            type: 'string',
            description: 'What the operator between the `field` and `value` is.',
          },
          value: {
            type: 'string',
            description: 'The RHS of the conditional.',
          },
        },
        required: ['field', 'operator', 'value'],
      },
      description: {
        type: 'string',
        description: 'An optional description.',
      },
      ledger_id: {
        type: 'string',
        description: 'The id of the ledger that this account belongs to.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      variables: {
        type: 'object',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerEventHandlers.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledger_event_handlers',
  description: 'Get details on a single ledger event handler.',
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
    return client.ledgerEventHandlers.retrieve(id);
  },
});

registerApiMethod({
  name: 'list_ledger_event_handlers',
  description: 'Get a list of ledger event handlers.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      created_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      name: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerEventHandlers.list(body);
  },
});

registerApiMethod({
  name: 'delete_ledger_event_handlers',
  description: 'Archive a ledger event handler.',
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
    return client.ledgerEventHandlers.del(id);
  },
});
