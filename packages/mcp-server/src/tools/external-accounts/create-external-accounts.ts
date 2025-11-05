// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'external_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/external_accounts',
  operationId: 'createExternalAccount',
};

export const tool: Tool = {
  name: 'create_external_accounts',
  description: 'create external account',
  inputSchema: {
    type: 'object',
    properties: {
      counterparty_id: {
        type: 'string',
      },
      account_details: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            account_number: {
              type: 'string',
            },
            account_number_type: {
              type: 'string',
              enum: [
                'au_number',
                'base_address',
                'clabe',
                'ethereum_address',
                'hk_number',
                'iban',
                'id_number',
                'nz_number',
                'other',
                'pan',
                'polygon_address',
                'sg_number',
                'solana_address',
                'wallet_address',
              ],
            },
          },
          required: ['account_number'],
        },
      },
      account_type: {
        $ref: '#/$defs/external_account_type',
      },
      contact_details: {
        type: 'array',
        items: {
          $ref: '#/$defs/contact_detail_create_request',
        },
      },
      external_id: {
        type: 'string',
        description: 'An optional user-defined 180 character unique identifier.',
      },
      ledger_account: {
        $ref: '#/$defs/ledger_account_create_request',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
        additionalProperties: true,
      },
      name: {
        type: 'string',
        description:
          "A nickname for the external account. This is only for internal usage and won't affect any payments",
      },
      party_address: {
        $ref: '#/$defs/address_request',
      },
      party_identifier: {
        type: 'string',
      },
      party_name: {
        type: 'string',
        description: "If this value isn't provided, it will be inherited from the counterparty's name.",
      },
      party_type: {
        type: 'string',
        description: 'Either `individual` or `business`.',
        enum: ['business', 'individual'],
      },
      plaid_processor_token: {
        type: 'string',
        description:
          "If you've enabled the Modern Treasury + Plaid integration in your Plaid account, you can pass the processor token in this field.",
      },
      routing_details: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            routing_number: {
              type: 'string',
            },
            routing_number_type: {
              type: 'string',
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
                'il_bank_code',
                'in_ifsc',
                'jp_zengin_code',
                'my_branch_code',
                'mx_bank_identifier',
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
                'gb_fps',
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
          required: ['routing_number', 'routing_number_type'],
        },
      },
    },
    required: ['counterparty_id'],
    $defs: {
      external_account_type: {
        type: 'string',
        description: 'Can be `checking`, `savings` or `other`.',
        enum: [
          'base_wallet',
          'cash',
          'checking',
          'crypto_wallet',
          'ethereum_wallet',
          'general_ledger',
          'loan',
          'non_resident',
          'other',
          'overdraft',
          'polygon_wallet',
          'savings',
          'solana_wallet',
        ],
      },
      contact_detail_create_request: {
        type: 'object',
        properties: {
          contact_identifier: {
            type: 'string',
          },
          contact_identifier_type: {
            type: 'string',
            enum: ['email', 'phone_number', 'website'],
          },
        },
      },
      ledger_account_create_request: {
        type: 'object',
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
            $ref: '#/$defs/transaction_direction',
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
            additionalProperties: true,
          },
        },
        required: ['currency', 'ledger_id', 'name', 'normal_balance'],
      },
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
      address_request: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
            type: 'string',
          },
          line2: {
            type: 'string',
          },
          locality: {
            type: 'string',
            description: 'Locality or City.',
          },
          postal_code: {
            type: 'string',
            description: 'The postal code of the address.',
          },
          region: {
            type: 'string',
            description: 'Region or State.',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.externalAccounts.create(body));
};

export default { metadata, tool, handler };
