// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledger_account_balance_monitors',
  description: 'Create a ledger account balance monitor.',
  inputSchema: {
    type: 'object',
    properties: {
      alert_condition: {
        type: 'object',
        description: 'Describes the condition that must be satisfied for the monitor to be triggered.',
        properties: {
          field: {
            type: 'string',
            description:
              'One of `available_balance_amount`, `pending_balance_amount`, `posted_balance_amount`, `ledger_account_lock_version`.',
          },
          operator: {
            type: 'string',
            description:
              'A logical operator to compare the `field` against the `value`. One of `less_than`, `less_than_or_equals`, `equals`, `greater_than_or_equals`, `greater_than`.',
          },
          value: {
            type: 'integer',
            description:
              "The monitor's `current_ledger_account_balance_state.triggered` will be `true` when comparing the `field` to this integer value using the `operator` is logically true.",
          },
        },
        required: ['field', 'operator', 'value'],
      },
      ledger_account_id: {
        type: 'string',
        description: 'The ledger account associated with this balance monitor.',
      },
      description: {
        type: 'string',
        description: 'An optional, free-form description for internal use.',
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
    return client.ledgerAccountBalanceMonitors.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledger_account_balance_monitors',
  description: 'Get details on a single ledger account balance monitor.',
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
    return client.ledgerAccountBalanceMonitors.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_ledger_account_balance_monitors',
  description: 'Update a ledger account balance monitor.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'An optional, free-form description for internal use.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccountBalanceMonitors.update(id, body);
  },
});

registerApiMethod({
  name: 'list_ledger_account_balance_monitors',
  description: 'Get a list of ledger account balance monitors.',
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
      ledger_account_id: {
        type: 'string',
        description: 'Query the balance monitors for a single ledger account.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerAccountBalanceMonitors.list(body);
  },
});

registerApiMethod({
  name: 'delete_ledger_account_balance_monitors',
  description: 'Delete a ledger account balance monitor.',
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
    return client.ledgerAccountBalanceMonitors.del(id);
  },
});
