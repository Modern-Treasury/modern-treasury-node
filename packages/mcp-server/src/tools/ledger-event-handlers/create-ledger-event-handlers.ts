// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_event_handlers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ledgerEventHandlers.create(body);
};

export default { metadata, tool, handler };
