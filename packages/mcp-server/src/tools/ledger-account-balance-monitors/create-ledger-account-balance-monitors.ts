// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_account_balance_monitors',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ledgerAccountBalanceMonitors.create(body);
};

export default { metadata, tool, handler };
