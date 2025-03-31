// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledger_account_settlements',
  description: 'Create a ledger account settlement.',
  inputSchema: {
    type: 'object',
    properties: {
      contra_ledger_account_id: {
        type: 'string',
        description:
          'The id of the contra ledger account that sends to or receives funds from the settled ledger account.',
      },
      settled_ledger_account_id: {
        type: 'string',
        description:
          'The id of the settled ledger account whose ledger entries are queried against, and its balance is reduced as a result.',
      },
      allow_either_direction: {
        type: 'boolean',
        description:
          "If true, the settlement amount and settlement_entry_direction will bring the settlement ledger account's balance closer to zero, even if the balance is negative.",
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account settlement.',
      },
      effective_at_upper_bound: {
        type: 'string',
        description:
          'The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account settlement. The default value is the created_at timestamp of the ledger account settlement.',
        format: 'date-time',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      skip_settlement_ledger_transaction: {
        type: 'boolean',
        description:
          'It is set to `false` by default. It should be set to `true` when migrating existing settlements.',
      },
      status: {
        type: 'string',
        description:
          'The status of the ledger account settlement. It is set to `pending` by default. To post a ledger account settlement at creation, use `posted`.',
        enum: ['pending', 'posted'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerAccountSettlements.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledger_account_settlements',
  description: 'Get details on a single ledger account settlement.',
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
    return client.ledgerAccountSettlements.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_ledger_account_settlements',
  description: 'Update the details of a ledger account settlement.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account settlement.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      status: {
        type: 'string',
        description:
          'To post a pending ledger account settlement, use `posted`. To archive a pending ledger transaction, use `archived`.',
        enum: ['posted', 'archived'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccountSettlements.update(id, body);
  },
});

registerApiMethod({
  name: 'list_ledger_account_settlements',
  description: 'Get a list of ledger account settlements.',
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
      created_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
      ledger_id: {
        type: 'string',
      },
      ledger_transaction_id: {
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
      settled_ledger_account_id: {
        type: 'string',
      },
      settlement_entry_direction: {
        type: 'string',
      },
      updated_at: {
        type: 'object',
        description:
          'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the updated at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerAccountSettlements.list(body);
  },
});
