// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'expected_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/expected_payments',
  operationId: 'createExpectedPayment',
};

export const tool: Tool = {
  name: 'create_expected_payments',
  description: 'create expected payment',
  inputSchema: {
    type: 'object',
    properties: {
      amount_lower_bound: {
        type: 'integer',
        description:
          "The lowest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
      },
      amount_upper_bound: {
        type: 'integer',
        description:
          "The highest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
      },
      counterparty_id: {
        type: 'string',
        description: 'The ID of the counterparty you expect for this payment.',
      },
      currency: {
        $ref: '#/$defs/currency',
      },
      date_lower_bound: {
        type: 'string',
        description: 'The earliest date the payment may come in. Format: yyyy-mm-dd',
        format: 'date',
      },
      date_upper_bound: {
        type: 'string',
        description: 'The latest date the payment may come in. Format: yyyy-mm-dd',
        format: 'date',
      },
      description: {
        type: 'string',
        description: 'An optional description for internal use.',
      },
      direction: {
        type: 'string',
        description:
          'One of credit or debit. When you are receiving money, use credit. When you are being charged, use debit.',
        enum: ['credit', 'debit'],
      },
      internal_account_id: {
        type: 'string',
        description: 'The ID of the Internal Account for the expected payment.',
      },
      ledger_transaction: {
        type: 'object',
        description:
          'Specifies a ledger transaction object that will be created with the expected payment. If the ledger transaction cannot be created, then the expected payment creation will fail. The resulting ledger transaction will mirror the status of the expected payment.',
        properties: {
          ledger_entries: {
            type: 'array',
            description: 'An array of ledger entry objects.',
            items: {
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
            description:
              'The date (YYYY-MM-DD) on which the ledger transaction happened for reporting purposes.',
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
        required: ['ledger_entries'],
      },
      ledger_transaction_id: {
        type: 'string',
        description:
          'Either ledger_transaction or ledger_transaction_id can be provided. Only a pending ledger transaction can be attached upon expected payment creation. Once the expected payment is created, the status of the ledger transaction tracks the expected payment automatically.',
      },
      line_items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'integer',
              description:
                "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
            },
            accounting_category_id: {
              type: 'string',
              description:
                'The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected.',
            },
            description: {
              type: 'string',
              description: 'A free-form description of the line item.',
            },
            metadata: {
              type: 'object',
              description:
                'Additional data represented as key-value pairs. Both the key and value must be strings.',
            },
          },
          required: ['amount'],
        },
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      reconciliation_filters: {
        type: 'object',
        description: 'The reconciliation filters you have for this payment.',
      },
      reconciliation_groups: {
        type: 'object',
        description: 'The reconciliation groups you have for this payment.',
      },
      reconciliation_rule_variables: {
        type: 'array',
        description: 'An array of reconciliation rule variables for this payment.',
        items: {
          $ref: '#/$defs/reconciliation_rule',
        },
      },
      remittance_information: {
        type: 'string',
        description:
          'For `ach`, this field will be passed through on an addenda record. For `wire` payments the field will be passed through as the "Originator to Beneficiary Information", also known as OBI or Fedwire tag 6000.',
      },
      statement_descriptor: {
        type: 'string',
        description:
          'The statement description you expect to see on the transaction. For ACH payments, this will be the full line item passed from the bank. For wire payments, this will be the OBI field on the wire. For check payments, this will be the memo field.',
      },
      type: {
        $ref: '#/$defs/expected_payment_type',
      },
    },
    $defs: {
      currency: {
        type: 'string',
        description: 'Three-letter ISO currency code.',
        enum: [
          'AED',
          'AFN',
          'ALL',
          'AMD',
          'ANG',
          'AOA',
          'ARS',
          'AUD',
          'AWG',
          'AZN',
          'BAM',
          'BBD',
          'BCH',
          'BDT',
          'BGN',
          'BHD',
          'BIF',
          'BMD',
          'BND',
          'BOB',
          'BRL',
          'BSD',
          'BTC',
          'BTN',
          'BWP',
          'BYN',
          'BYR',
          'BZD',
          'CAD',
          'CDF',
          'CHF',
          'CLF',
          'CLP',
          'CNH',
          'CNY',
          'COP',
          'CRC',
          'CUC',
          'CUP',
          'CVE',
          'CZK',
          'DJF',
          'DKK',
          'DOP',
          'DZD',
          'EEK',
          'EGP',
          'ERN',
          'ETB',
          'EUR',
          'EURC',
          'FJD',
          'FKP',
          'GBP',
          'GBX',
          'GEL',
          'GGP',
          'GHS',
          'GIP',
          'GMD',
          'GNF',
          'GTQ',
          'GYD',
          'HKD',
          'HNL',
          'HRK',
          'HTG',
          'HUF',
          'IDR',
          'ILS',
          'IMP',
          'INR',
          'IQD',
          'IRR',
          'ISK',
          'JEP',
          'JMD',
          'JOD',
          'JPY',
          'KES',
          'KGS',
          'KHR',
          'KMF',
          'KPW',
          'KRW',
          'KWD',
          'KYD',
          'KZT',
          'LAK',
          'LBP',
          'LKR',
          'LRD',
          'LSL',
          'LTL',
          'LVL',
          'LYD',
          'MAD',
          'MDL',
          'MGA',
          'MKD',
          'MMK',
          'MNT',
          'MOP',
          'MRO',
          'MRU',
          'MTL',
          'MUR',
          'MVR',
          'MWK',
          'MXN',
          'MYR',
          'MZN',
          'NAD',
          'NGN',
          'NIO',
          'NOK',
          'NPR',
          'NZD',
          'OMR',
          'PAB',
          'PEN',
          'PGK',
          'PHP',
          'PKR',
          'PLN',
          'PYG',
          'PYUSD',
          'QAR',
          'RON',
          'RSD',
          'RUB',
          'RWF',
          'SAR',
          'SBC',
          'SBD',
          'SCR',
          'SDG',
          'SEK',
          'SGD',
          'SHP',
          'SKK',
          'SLL',
          'SOS',
          'SRD',
          'SSP',
          'STD',
          'SVC',
          'SYP',
          'SZL',
          'THB',
          'TJS',
          'TMM',
          'TMT',
          'TND',
          'TOP',
          'TRY',
          'TTD',
          'TWD',
          'TZS',
          'UAH',
          'UGX',
          'USD',
          'USDB',
          'USDC',
          'USDP',
          'USDT',
          'UYU',
          'UZS',
          'VEF',
          'VES',
          'VND',
          'VUV',
          'WST',
          'XAF',
          'XAG',
          'XAU',
          'XBA',
          'XBB',
          'XBC',
          'XBD',
          'XCD',
          'XDR',
          'XFU',
          'XOF',
          'XPD',
          'XPF',
          'XPT',
          'XTS',
          'YER',
          'ZAR',
          'ZMK',
          'ZMW',
          'ZWD',
          'ZWL',
          'ZWN',
          'ZWR',
        ],
      },
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
      reconciliation_rule: {
        type: 'object',
        properties: {
          amount_lower_bound: {
            type: 'integer',
            description:
              "The lowest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
          },
          amount_upper_bound: {
            type: 'integer',
            description:
              "The highest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
          },
          direction: {
            type: 'string',
            description:
              'One of credit or debit. When you are receiving money, use credit. When you are being charged, use debit.',
            enum: ['credit', 'debit'],
          },
          internal_account_id: {
            type: 'string',
            description: 'The ID of the Internal Account for the expected payment',
          },
          counterparty_id: {
            type: 'string',
            description: 'The ID of the counterparty you expect for this payment',
          },
          currency: {
            $ref: '#/$defs/currency',
          },
          custom_identifiers: {
            type: 'object',
            description: 'A hash of custom identifiers for this payment',
          },
          date_lower_bound: {
            type: 'string',
            description: 'The earliest date the payment may come in. Format is yyyy-mm-dd',
            format: 'date',
          },
          date_upper_bound: {
            type: 'string',
            description: 'The latest date the payment may come in. Format is yyyy-mm-dd',
            format: 'date',
          },
          type: {
            type: 'string',
            description:
              'One of ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen, sepa, signet wire',
            enum: [
              'ach',
              'au_becs',
              'bacs',
              'base',
              'book',
              'card',
              'chats',
              'check',
              'cross_border',
              'dk_nets',
              'eft',
              'ethereum',
              'hu_ics',
              'interac',
              'masav',
              'mx_ccen',
              'neft',
              'nics',
              'nz_becs',
              'pl_elixir',
              'polygon',
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
              'solana',
              'wire',
              'zengin',
            ],
          },
        },
        required: ['amount_lower_bound', 'amount_upper_bound', 'direction', 'internal_account_id'],
      },
      expected_payment_type: {
        type: 'string',
        description:
          'One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen, sepa, signet, wire.',
        enum: [
          'ach',
          'au_becs',
          'bacs',
          'base',
          'book',
          'card',
          'chats',
          'check',
          'cross_border',
          'dk_nets',
          'eft',
          'ethereum',
          'hu_ics',
          'interac',
          'masav',
          'mx_ccen',
          'neft',
          'nics',
          'nz_becs',
          'pl_elixir',
          'polygon',
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
          'solana',
          'wire',
          'zengin',
        ],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.expectedPayments.create(body));
};

export default { metadata, tool, handler };
