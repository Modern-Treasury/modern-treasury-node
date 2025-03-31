// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_ledger_account_statements',
  description: 'Create a ledger account statement.',
  inputSchema: {
    type: 'object',
    properties: {
      effective_at_lower_bound: {
        type: 'string',
        description:
          'The inclusive lower bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement.',
        format: 'date-time',
      },
      effective_at_upper_bound: {
        type: 'string',
        description:
          'The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement.',
        format: 'date-time',
      },
      ledger_account_id: {
        type: 'string',
        description:
          'The id of the ledger account whose ledger entries are queried against, and its balances are computed as a result.',
      },
      description: {
        type: 'string',
        description: 'The description of the ledger account statement.',
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
    return client.ledgerAccountStatements.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_ledger_account_statements',
  description: 'Get details on a single ledger account statement.',
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
    return client.ledgerAccountStatements.retrieve(id);
  },
});
