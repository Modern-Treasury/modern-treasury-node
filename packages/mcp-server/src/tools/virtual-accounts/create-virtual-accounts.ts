// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'virtual_accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_virtual_accounts',
  description: 'create virtual_account',
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
        description: 'The ID of the internal account that this virtual account is associated with.',
      },
      name: {
        type: 'string',
        description: 'The name of the virtual account.',
      },
      account_details: {
        type: 'array',
        description: 'An array of account detail objects.',
        items: {
          type: 'object',
          properties: {
            account_number: {
              type: 'string',
              description: 'The account number for the bank account.',
            },
            account_number_type: {
              type: 'string',
              description:
                'One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank account number is in a generic format.',
              enum: [
                'au_number',
                'clabe',
                'hk_number',
                'iban',
                'id_number',
                'nz_number',
                'other',
                'pan',
                'sg_number',
                'wallet_address',
              ],
            },
          },
          required: ['account_number'],
        },
      },
      counterparty_id: {
        type: 'string',
        description: 'The ID of the counterparty that the virtual account belongs to.',
      },
      credit_ledger_account_id: {
        type: 'string',
        description:
          'The ID of a credit normal ledger account. When money leaves the virtual account, this ledger account will be credited. Must be accompanied by a debit_ledger_account_id if present.',
      },
      debit_ledger_account_id: {
        type: 'string',
        description:
          'The ID of a debit normal ledger account. When money enters the virtual account, this ledger account will be debited. Must be accompanied by a credit_ledger_account_id if present.',
      },
      description: {
        type: 'string',
        description: 'An optional description for internal use.',
      },
      ledger_account: {
        type: 'object',
        description:
          'Specifies a ledger account object that will be created with the virtual account. The resulting ledger account is linked to the virtual account for auto-ledgering IPDs.',
        properties: {
          currency: {
            type: 'string',
            description: 'The currency of the ledger account.',
          },
          ledger_id: {
            type: 'string',
            description: 'The id of the ledger that this account belongs to.',
          },
          name: {
            type: 'string',
            description: 'The name of the ledger account.',
          },
          normal_balance: {
            type: 'string',
            enum: ['credit', 'debit'],
          },
          currency_exponent: {
            type: 'integer',
            description: 'The currency exponent of the ledger account.',
          },
          description: {
            type: 'string',
            description: 'The description of the ledger account.',
          },
          ledger_account_category_ids: {
            type: 'array',
            description:
              'The array of ledger account category ids that this ledger account should be a child of.',
            items: {
              type: 'string',
            },
          },
          ledgerable_id: {
            type: 'string',
            description:
              'If the ledger account links to another object in Modern Treasury, the id will be populated here, otherwise null.',
          },
          ledgerable_type: {
            type: 'string',
            description:
              'If the ledger account links to another object in Modern Treasury, the type will be populated here, otherwise null. The value is one of internal_account or external_account.',
            enum: ['counterparty', 'external_account', 'internal_account', 'virtual_account'],
          },
          metadata: {
            type: 'object',
            description:
              'Additional data represented as key-value pairs. Both the key and value must be strings.',
          },
        },
        required: ['currency', 'ledger_id', 'name', 'normal_balance'],
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      routing_details: {
        type: 'array',
        description: 'An array of routing detail objects.',
        items: {
          type: 'object',
          properties: {
            routing_number: {
              type: 'string',
              description: 'The routing number of the bank.',
            },
            routing_number_type: {
              type: 'string',
              description:
                'The type of routing number. See https://docs.moderntreasury.com/platform/reference/routing-detail-object for more details.',
              enum: [
                'aba',
                'au_bsb',
                'br_codigo',
                'ca_cpa',
                'chips',
                'cnaps',
                'dk_interbank_clearing_code',
                'gb_sort_code',
                'hk_interbank_clearing_code',
                'hu_interbank_clearing_code',
                'id_sknbi_code',
                'in_ifsc',
                'jp_zengin_code',
                'mx_bank_identifier',
                'my_branch_code',
                'nz_national_clearing_code',
                'pl_national_clearing_code',
                'se_bankgiro_clearing_code',
                'sg_interbank_clearing_code',
                'swift',
                'za_national_clearing_code',
              ],
            },
            payment_type: {
              type: 'string',
              description:
                'If the routing detail is to be used for a specific payment type this field will be populated, otherwise null.',
              enum: [
                'ach',
                'au_becs',
                'bacs',
                'book',
                'card',
                'chats',
                'check',
                'cross_border',
                'dk_nets',
                'eft',
                'hu_ics',
                'interac',
                'masav',
                'mx_ccen',
                'neft',
                'nics',
                'nz_becs',
                'pl_elixir',
                'provxchange',
                'ro_sent',
                'rtp',
                'se_bankgirot',
                'sen',
                'sepa',
                'sg_giro',
                'sic',
                'signet',
                'sknbi',
                'wire',
                'zengin',
              ],
            },
          },
          required: ['routing_number', 'routing_number_type'],
        },
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.virtualAccounts.create(body);
};

export default { metadata, tool, handler };
