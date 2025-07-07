// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_transactions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/ledger_transactions',
  operationId: 'createLedgerTransaction',
};

export const tool: Tool = {
  name: 'create_ledger_transactions',
  description: 'Create a ledger transaction.',
  inputSchema: {
    type: 'object',
    properties: {
      ledger_entries: {
        type: 'array',
        description: 'An array of ledger entry objects.',
        items: {
          $ref: '#/$defs/ledger_entry_create_request',
        },
      },
      description: {
        type: 'string',
        description: 'An optional description for internal use.',
      },
      effective_at: {
        type: 'string',
        description:
          'The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes.',
        format: 'date-time',
      },
      effective_date: {
        type: 'string',
        description: 'The date (YYYY-MM-DD) on which the ledger transaction happened for reporting purposes.',
        format: 'date',
      },
      external_id: {
        type: 'string',
        description:
          'A unique string to represent the ledger transaction. Only one pending or posted ledger transaction may have this ID in the ledger.',
      },
      ledgerable_id: {
        type: 'string',
        description:
          'If the ledger transaction can be reconciled to another object in Modern Treasury, the id will be populated here, otherwise null.',
      },
      ledgerable_type: {
        type: 'string',
        description:
          'If the ledger transaction can be reconciled to another object in Modern Treasury, the type will be populated here, otherwise null. This can be one of payment_order, incoming_payment_detail, expected_payment, return, paper_item, or reversal.',
        enum: [
          'expected_payment',
          'incoming_payment_detail',
          'paper_item',
          'payment_order',
          'return',
          'reversal',
        ],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      status: {
        type: 'string',
        description: 'To post a ledger transaction at creation, use `posted`.',
        enum: ['archived', 'pending', 'posted'],
      },
    },
    $defs: {
      ledger_entry_create_request: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
            description:
              "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.",
          },
          direction: {
            $ref: '#/$defs/transaction_direction',
          },
          ledger_account_id: {
            type: 'string',
            description: 'The ledger account that this ledger entry is associated with.',
          },
          available_balance_amount: {
            type: 'object',
            description:
              'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s available balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
          },
          lock_version: {
            type: 'integer',
            description:
              'Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details.',
          },
          metadata: {
            type: 'object',
            description:
              'Additional data represented as key-value pairs. Both the key and value must be strings.',
          },
          pending_balance_amount: {
            type: 'object',
            description:
              'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s pending balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
          },
          posted_balance_amount: {
            type: 'object',
            description:
              'Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s posted balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422.',
          },
          show_resulting_ledger_account_balances: {
            type: 'boolean',
            description:
              'If true, response will include the balance of the associated ledger account for the entry.',
          },
        },
        required: ['amount', 'direction', 'ledger_account_id'],
      },
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.ledgerTransactions.create(body));
};

export default { metadata, tool, handler };
