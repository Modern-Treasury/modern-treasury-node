// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
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
      account_type: {
        type: 'string',
        description: 'Can be `checking`, `savings` or `other`.',
        enum: ['cash', 'checking', 'general_ledger', 'loan', 'non_resident', 'other', 'overdraft', 'savings'],
      },
      contact_details: {
        type: 'array',
        items: {
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
          required: [],
        },
      },
      ledger_account: {
        type: 'object',
        description:
          'Specifies a ledger account object that will be created with the external account. The resulting ledger account is linked to the external account for auto-ledgering Payment objects. See https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects for more details.',
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
      name: {
        type: 'string',
        description:
          "A nickname for the external account. This is only for internal usage and won't affect any payments",
      },
      party_address: {
        type: 'object',
        description: 'Required if receiving wire payments.',
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
        required: [],
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
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.externalAccounts.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_external_accounts',
  description: 'show external account',
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
    return client.externalAccounts.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_external_accounts',
  description: 'update external account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      account_type: {
        type: 'string',
        description: 'Can be `checking`, `savings` or `other`.',
        enum: ['cash', 'checking', 'general_ledger', 'loan', 'non_resident', 'other', 'overdraft', 'savings'],
      },
      counterparty_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value.',
      },
      name: {
        type: 'string',
        description:
          "A nickname for the external account. This is only for internal usage and won't affect any payments",
      },
      party_address: {
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
        required: [],
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
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.externalAccounts.update(id, body);
  },
});

registerApiMethod({
  name: 'list_external_accounts',
  description: 'list external accounts',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      party_name: {
        type: 'string',
        description: "Searches the ExternalAccount's party_name AND the Counterparty's party_name",
      },
      per_page: {
        type: 'integer',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.externalAccounts.list(body);
  },
});

registerApiMethod({
  name: 'delete_external_accounts',
  description: 'delete external account',
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
    return client.externalAccounts.del(id);
  },
});

registerApiMethod({
  name: 'complete_verification_external_accounts',
  description: 'complete verification of external account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      amounts: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.externalAccounts.completeVerification(id, body);
  },
});

registerApiMethod({
  name: 'verify_external_accounts',
  description: 'verify external account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      originating_account_id: {
        type: 'string',
        description:
          'The ID of the internal account where the micro-deposits originate from. Both credit and debit capabilities must be enabled.',
      },
      payment_type: {
        type: 'string',
        description: 'Can be `ach`, `eft`, or `rtp`.',
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
          'QAR',
          'RON',
          'RSD',
          'RUB',
          'RWF',
          'SAR',
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
      fallback_type: {
        type: 'string',
        description:
          'A payment type to fallback to if the original type is not valid for the receiving account. Currently, this only supports falling back from RTP to ACH (payment_type=rtp and fallback_type=ach)',
        enum: ['ach'],
      },
      priority: {
        type: 'string',
        description:
          'Either `normal` or `high`. For ACH payments, `high` represents a same-day ACH transfer. This will apply to both `payment_type` and `fallback_type`.',
        enum: ['high', 'normal'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.externalAccounts.verify(id, body);
  },
});
