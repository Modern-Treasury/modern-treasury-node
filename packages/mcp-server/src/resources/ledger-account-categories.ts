// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledger_account_categories',
  description: 'Create a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      currency: {
        type: 'string',
        description: 'The currency of the ledger account category.',
      },
      ledger_id: {
        type: 'string',
        description: 'The id of the ledger that this account category belongs to.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account category.',
      },
      normal_balance: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
      currency_exponent: {
        type: 'integer',
        description: 'The currency exponent of the ledger account category.',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account category.',
      },
      ledger_account_category_ids: {
        type: 'array',
        description:
          'The array of ledger account category ids that this ledger account category should be a child of.',
        items: {
          type: 'string',
        },
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
    return client.ledgerAccountCategories.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledger_account_categories',
  description: 'Get the details on a single ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      balances: {
        type: 'object',
        description:
          'For example, if you want the balances as of a particular time (ISO8601), the encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`. The balances as of a time are inclusive of entries with that exact time.',
        properties: {
          as_of_date: {
            type: 'string',
            format: 'date',
          },
          effective_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccountCategories.retrieve(id, body);
  },
});

registerApiMethod({
  name: 'update_ledger_account_categories',
  description: 'Update the details of a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account category.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      name: {
        type: 'string',
        description: 'The name of the ledger account category.',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.ledgerAccountCategories.update(id, body);
  },
});

registerApiMethod({
  name: 'list_ledger_account_categories',
  description: 'Get a list of ledger account categories.',
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
      balances: {
        type: 'object',
        description:
          'For example, if you want the balances as of a particular time (ISO8601), the encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`. The balances as of a time are inclusive of entries with that exact time.',
        properties: {
          effective_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [],
      },
      currency: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
        description: 'Query categories which contain a ledger account directly or through child categories.',
      },
      ledger_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      name: {
        type: 'string',
      },
      parent_ledger_account_category_id: {
        type: 'string',
        description: 'Query categories that are nested underneath a parent category',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.ledgerAccountCategories.list(body);
  },
});

registerApiMethod({
  name: 'delete_ledger_account_categories',
  description: 'Delete a ledger account category.',
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
    return client.ledgerAccountCategories.del(id);
  },
});

registerApiMethod({
  name: 'add_ledger_account_ledger_account_categories',
  description: 'Add a ledger account to a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ledger_account_id } = args;
    return client.ledgerAccountCategories.addLedgerAccount(id, ledger_account_id);
  },
});

registerApiMethod({
  name: 'add_nested_category_ledger_account_categories',
  description: 'Add a ledger account category to a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      sub_category_id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, sub_category_id } = args;
    return client.ledgerAccountCategories.addNestedCategory(id, sub_category_id);
  },
});

registerApiMethod({
  name: 'remove_ledger_account_ledger_account_categories',
  description: 'Remove a ledger account from a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      ledger_account_id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ledger_account_id } = args;
    return client.ledgerAccountCategories.removeLedgerAccount(id, ledger_account_id);
  },
});

registerApiMethod({
  name: 'remove_nested_category_ledger_account_categories',
  description: 'Delete a ledger account category from a ledger account category.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      sub_category_id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, sub_category_id } = args;
    return client.ledgerAccountCategories.removeNestedCategory(id, sub_category_id);
  },
});
