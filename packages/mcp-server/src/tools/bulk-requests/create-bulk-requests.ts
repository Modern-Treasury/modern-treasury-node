// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'bulk_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/bulk_requests',
  operationId: 'createBulkRequest',
};

export const tool: Tool = {
  name: 'create_bulk_requests',
  description: 'create bulk_request',
  inputSchema: {
    type: 'object',
    properties: {
      action_type: {
        type: 'string',
        description: 'One of create, or update.',
        enum: ['create', 'update', 'delete'],
      },
      resource_type: {
        type: 'string',
        description: 'One of payment_order, expected_payment, or ledger_transaction.',
        enum: [
          'payment_order',
          'ledger_account',
          'ledger_transaction',
          'expected_payment',
          'transaction',
          'transaction_line_item',
          'entity_link',
        ],
      },
      resources: {
        type: 'array',
        description:
          'An array of objects where each object contains the input params for a single `action_type` request on a `resource_type` resource',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                amount: {
                  type: 'integer',
                  description:
                    "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.",
                },
                direction: {
                  type: 'string',
                  description:
                    "One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`.",
                  enum: ['credit', 'debit'],
                },
                originating_account_id: {
                  type: 'string',
                  description: "The ID of one of your organization's internal accounts.",
                },
                type: {
                  $ref: '#/$defs/payment_order_type',
                },
                accounting: {
                  $ref: '#/$defs/accounting',
                },
                accounting_category_id: {
                  type: 'string',
                  description:
                    'The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected.',
                },
                accounting_ledger_class_id: {
                  type: 'string',
                  description:
                    'The ID of one of your accounting ledger classes. Note that these will only be accessible if your accounting system has been connected.',
                },
                charge_bearer: {
                  type: 'string',
                  description:
                    'The party that will pay the fees for the payment order. See https://docs.moderntreasury.com/payments/docs/charge-bearer to understand the differences between the options.',
                  enum: ['shared', 'sender', 'receiver'],
                },
                currency: {
                  $ref: '#/$defs/currency',
                },
                description: {
                  type: 'string',
                  description: 'An optional description for internal use.',
                },
                effective_date: {
                  type: 'string',
                  description:
                    "Date transactions are to be posted to the participants' account. Defaults to the current business day or the next business day if the current day is a bank holiday or weekend. Format: yyyy-mm-dd.",
                  format: 'date',
                },
                expires_at: {
                  type: 'string',
                  description:
                    'RFP payments require an expires_at. This value must be past the effective_date.',
                  format: 'date-time',
                },
                fallback_type: {
                  type: 'string',
                  description:
                    'A payment type to fallback to if the original type is not valid for the receiving account. Currently, this only supports falling back from RTP to ACH (type=rtp and fallback_type=ach)',
                  enum: ['ach'],
                },
                foreign_exchange_contract: {
                  type: 'string',
                  description:
                    'If present, indicates a specific foreign exchange contract number that has been generated by your financial institution.',
                },
                foreign_exchange_indicator: {
                  type: 'string',
                  description:
                    'Indicates the type of FX transfer to initiate, can be either `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order currency matches the originating account currency.',
                  enum: ['fixed_to_variable', 'variable_to_fixed'],
                },
                ledger_transaction: {
                  $ref: '#/$defs/ledger_transaction_create_request',
                },
                ledger_transaction_id: {
                  type: 'string',
                  description:
                    'Either ledger_transaction or ledger_transaction_id can be provided. Only a pending ledger transaction can be attached upon payment order creation. Once the payment order is created, the status of the ledger transaction tracks the payment order automatically.',
                },
                line_items: {
                  type: 'array',
                  description: 'An array of line items that must sum up to the amount of the payment order.',
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
                nsf_protected: {
                  type: 'boolean',
                  description:
                    'A boolean to determine if NSF Protection is enabled for this payment order. Note that this setting must also be turned on in your organization settings page.',
                },
                originating_party_name: {
                  type: 'string',
                  description:
                    "If present, this will replace your default company name on receiver's bank statement. This field can only be used for ACH payments currently. For ACH, only the first 16 characters of this string will be used. Any additional characters will be truncated.",
                },
                priority: {
                  type: 'string',
                  description:
                    'Either `normal` or `high`. For ACH and EFT payments, `high` represents a same-day ACH or EFT transfer, respectively. For check payments, `high` can mean an overnight check rather than standard mail.',
                  enum: ['high', 'normal'],
                },
                process_after: {
                  type: 'string',
                  description:
                    'If present, Modern Treasury will not process the payment until after this time. If `process_after` is past the cutoff for `effective_date`, `process_after` will take precedence and `effective_date` will automatically update to reflect the earliest possible sending date after `process_after`. Format is ISO8601 timestamp.',
                  format: 'date-time',
                },
                purpose: {
                  type: 'string',
                  description:
                    'For `wire`, this is usually the purpose which is transmitted via the "InstrForDbtrAgt" field in the ISO20022 file. For `eft`, this field is the 3 digit CPA Code that will be attached to the payment.',
                },
                receiving_account: {
                  type: 'object',
                  description:
                    'Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account.',
                  properties: {
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
                    ledger_account: {
                      $ref: '#/$defs/ledger_account_create_request',
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
                      $ref: '#/$defs/address_request',
                    },
                    party_identifier: {
                      type: 'string',
                    },
                    party_name: {
                      type: 'string',
                      description:
                        "If this value isn't provided, it will be inherited from the counterparty's name.",
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
                  required: [],
                },
                receiving_account_id: {
                  type: 'string',
                  description:
                    'Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account.',
                },
                remittance_information: {
                  type: 'string',
                  description:
                    'For `ach`, this field will be passed through on an addenda record. For `wire` payments the field will be passed through as the "Originator to Beneficiary Information", also known as OBI or Fedwire tag 6000.',
                },
                send_remittance_advice: {
                  type: 'boolean',
                  description:
                    'Send an email to the counterparty when the payment order is sent to the bank. If `null`, `send_remittance_advice` on the Counterparty is used.',
                },
                statement_descriptor: {
                  type: 'string',
                  description:
                    "An optional descriptor which will appear in the receiver's statement. For `check` payments this field will be used as the memo line. For `ach` the maximum length is 10 characters. Note that for ACH payments, the name on your bank account will be included automatically by the bank, so you can use the characters for other useful information. For `eft` the maximum length is 15 characters.",
                },
                subtype: {
                  $ref: '#/$defs/payment_order_subtype',
                },
                transaction_monitoring_enabled: {
                  type: 'boolean',
                  description:
                    'A flag that determines whether a payment order should go through transaction monitoring.',
                },
                ultimate_originating_party_identifier: {
                  type: 'string',
                  description: 'Identifier of the ultimate originator of the payment order.',
                },
                ultimate_originating_party_name: {
                  type: 'string',
                  description: 'Name of the ultimate originator of the payment order.',
                },
                ultimate_receiving_party_identifier: {
                  type: 'string',
                  description: 'Identifier of the ultimate funds recipient.',
                },
                ultimate_receiving_party_name: {
                  type: 'string',
                  description: 'Name of the ultimate funds recipient.',
                },
              },
              required: ['amount', 'direction', 'originating_account_id', 'type'],
            },
            {
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
                  $ref: '#/$defs/ledger_transaction_create_request',
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
              required: [],
            },
            {
              $ref: '#/$defs/ledger_transaction_create_request',
            },
            {
              $ref: '#/$defs/ledger_account_create_request',
            },
            {
              type: 'object',
              properties: {
                amount: {
                  type: 'integer',
                  description:
                    "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
                },
                as_of_date: {
                  type: 'string',
                  description: 'The date on which the transaction occurred.',
                  format: 'date',
                },
                direction: {
                  type: 'string',
                  description: 'Either `credit` or `debit`.',
                },
                internal_account_id: {
                  type: 'string',
                  description: 'The ID of the relevant Internal Account.',
                },
                vendor_code: {
                  type: 'string',
                  description:
                    "When applicable, the bank-given code that determines the transaction's category. For most banks this is the BAI2/BTRS transaction code.",
                },
                vendor_code_type: {
                  type: 'string',
                  description:
                    'The type of `vendor_code` being reported. Can be one of `bai2`, `bankprov`, `bnk_dev`, `cleartouch`, `currencycloud`, `cross_river`, `dc_bank`, `dwolla`, `evolve`, `goldman_sachs`, `iso20022`, `jpmc`, `mx`, `signet`, `silvergate`, `swift`, `us_bank`, or others.',
                },
                metadata: {
                  type: 'object',
                  description:
                    'Additional data represented as key-value pairs. Both the key and value must be strings.',
                },
                posted: {
                  type: 'boolean',
                  description: 'This field will be `true` if the transaction has posted to the account.',
                },
                type: {
                  type: 'string',
                  description:
                    'The type of the transaction. Examples could be `card, `ach`, `wire`, `check`, `rtp`, `book`, or `sen`.',
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
                    'other',
                  ],
                },
                vendor_customer_id: {
                  type: 'string',
                  description: 'An identifier given to this transaction by the bank, often `null`.',
                },
                vendor_description: {
                  type: 'string',
                  description:
                    'The transaction detail text that often appears in on your bank statement and in your banking portal.',
                },
              },
              required: [
                'amount',
                'as_of_date',
                'direction',
                'internal_account_id',
                'vendor_code',
                'vendor_code_type',
              ],
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
              },
              required: [],
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                accounting: {
                  $ref: '#/$defs/accounting',
                },
                accounting_category_id: {
                  type: 'string',
                  description:
                    'The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected.',
                },
                accounting_ledger_class_id: {
                  type: 'string',
                  description:
                    'The ID of one of your accounting ledger classes. Note that these will only be accessible if your accounting system has been connected.',
                },
                amount: {
                  type: 'integer',
                  description:
                    "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.",
                },
                charge_bearer: {
                  type: 'string',
                  description:
                    'The party that will pay the fees for the payment order. See https://docs.moderntreasury.com/payments/docs/charge-bearer to understand the differences between the options.',
                  enum: ['shared', 'sender', 'receiver'],
                },
                counterparty_id: {
                  type: 'string',
                  description: 'Required when receiving_account_id is passed the ID of an external account.',
                },
                currency: {
                  $ref: '#/$defs/currency',
                },
                description: {
                  type: 'string',
                  description: 'An optional description for internal use.',
                },
                direction: {
                  type: 'string',
                  description:
                    "One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`.",
                  enum: ['credit', 'debit'],
                },
                effective_date: {
                  type: 'string',
                  description:
                    "Date transactions are to be posted to the participants' account. Defaults to the current business day or the next business day if the current day is a bank holiday or weekend. Format: yyyy-mm-dd.",
                  format: 'date',
                },
                expires_at: {
                  type: 'string',
                  description:
                    'RFP payments require an expires_at. This value must be past the effective_date.',
                  format: 'date-time',
                },
                fallback_type: {
                  type: 'string',
                  description:
                    'A payment type to fallback to if the original type is not valid for the receiving account. Currently, this only supports falling back from RTP to ACH (type=rtp and fallback_type=ach)',
                  enum: ['ach'],
                },
                foreign_exchange_contract: {
                  type: 'string',
                  description:
                    'If present, indicates a specific foreign exchange contract number that has been generated by your financial institution.',
                },
                foreign_exchange_indicator: {
                  type: 'string',
                  description:
                    'Indicates the type of FX transfer to initiate, can be either `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order currency matches the originating account currency.',
                  enum: ['fixed_to_variable', 'variable_to_fixed'],
                },
                line_items: {
                  type: 'array',
                  description: 'An array of line items that must sum up to the amount of the payment order.',
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
                nsf_protected: {
                  type: 'boolean',
                  description:
                    'A boolean to determine if NSF Protection is enabled for this payment order. Note that this setting must also be turned on in your organization settings page.',
                },
                originating_account_id: {
                  type: 'string',
                  description: "The ID of one of your organization's internal accounts.",
                },
                originating_party_name: {
                  type: 'string',
                  description:
                    "If present, this will replace your default company name on receiver's bank statement. This field can only be used for ACH payments currently. For ACH, only the first 16 characters of this string will be used. Any additional characters will be truncated.",
                },
                priority: {
                  type: 'string',
                  description:
                    'Either `normal` or `high`. For ACH and EFT payments, `high` represents a same-day ACH or EFT transfer, respectively. For check payments, `high` can mean an overnight check rather than standard mail.',
                  enum: ['high', 'normal'],
                },
                process_after: {
                  type: 'string',
                  description:
                    'If present, Modern Treasury will not process the payment until after this time. If `process_after` is past the cutoff for `effective_date`, `process_after` will take precedence and `effective_date` will automatically update to reflect the earliest possible sending date after `process_after`. Format is ISO8601 timestamp.',
                  format: 'date-time',
                },
                purpose: {
                  type: 'string',
                  description:
                    'For `wire`, this is usually the purpose which is transmitted via the "InstrForDbtrAgt" field in the ISO20022 file. For `eft`, this field is the 3 digit CPA Code that will be attached to the payment.',
                },
                receiving_account: {
                  type: 'object',
                  description:
                    'Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account.',
                  properties: {
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
                    ledger_account: {
                      $ref: '#/$defs/ledger_account_create_request',
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
                      $ref: '#/$defs/address_request',
                    },
                    party_identifier: {
                      type: 'string',
                    },
                    party_name: {
                      type: 'string',
                      description:
                        "If this value isn't provided, it will be inherited from the counterparty's name.",
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
                  required: [],
                },
                receiving_account_id: {
                  type: 'string',
                  description:
                    'Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account.',
                },
                remittance_information: {
                  type: 'string',
                  description:
                    'For `ach`, this field will be passed through on an addenda record. For `wire` payments the field will be passed through as the "Originator to Beneficiary Information", also known as OBI or Fedwire tag 6000.',
                },
                send_remittance_advice: {
                  type: 'boolean',
                  description:
                    'Send an email to the counterparty when the payment order is sent to the bank. If `null`, `send_remittance_advice` on the Counterparty is used.',
                },
                statement_descriptor: {
                  type: 'string',
                  description:
                    "An optional descriptor which will appear in the receiver's statement. For `check` payments this field will be used as the memo line. For `ach` the maximum length is 10 characters. Note that for ACH payments, the name on your bank account will be included automatically by the bank, so you can use the characters for other useful information. For `eft` the maximum length is 15 characters.",
                },
                status: {
                  type: 'string',
                  description:
                    'To cancel a payment order, use `cancelled`. To redraft a returned payment order, use `approved`. To undo approval on a denied or approved payment order, use `needs_approval`.',
                  enum: [
                    'approved',
                    'cancelled',
                    'completed',
                    'denied',
                    'failed',
                    'needs_approval',
                    'pending',
                    'processing',
                    'returned',
                    'reversed',
                    'sent',
                    'stopped',
                  ],
                },
                subtype: {
                  $ref: '#/$defs/payment_order_subtype',
                },
                type: {
                  $ref: '#/$defs/payment_order_type',
                },
                ultimate_originating_party_identifier: {
                  type: 'string',
                  description:
                    'This represents the identifier by which the person is known to the receiver when using the CIE subtype for ACH payments. Only the first 22 characters of this string will be used. Any additional characters will be truncated.',
                },
                ultimate_originating_party_name: {
                  type: 'string',
                  description:
                    'This represents the name of the person that the payment is on behalf of when using the CIE subtype for ACH payments. Only the first 15 characters of this string will be used. Any additional characters will be truncated.',
                },
                ultimate_receiving_party_identifier: {
                  type: 'string',
                  description:
                    'This represents the name of the merchant that the payment is being sent to when using the CIE subtype for ACH payments. Only the first 22 characters of this string will be used. Any additional characters will be truncated.',
                },
                ultimate_receiving_party_name: {
                  type: 'string',
                  description:
                    'This represents the identifier by which the merchant is known to the person initiating an ACH payment with CIE subtype. Only the first 15 characters of this string will be used. Any additional characters will be truncated.',
                },
              },
              required: [],
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
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
                status: {
                  type: 'string',
                  description:
                    "The Expected Payment's status can be updated from partially_reconciled to reconciled.",
                  enum: ['reconciled'],
                },
                type: {
                  $ref: '#/$defs/expected_payment_type',
                },
              },
              required: [],
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                metadata: {
                  type: 'object',
                  description:
                    'Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value.',
                },
              },
              required: [],
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
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
                ledger_entries: {
                  type: 'array',
                  description: 'An array of ledger entry objects.',
                  items: {
                    $ref: '#/$defs/ledger_entry_create_request',
                  },
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
              required: [],
            },
          ],
        },
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
    },
    $defs: {
      payment_order_type: {
        type: 'string',
        description:
          'One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.',
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
      accounting: {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description:
              'The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected.',
          },
          class_id: {
            type: 'string',
            description:
              'The ID of one of the class objects in your accounting system. Class objects track segments of your business independent of client or project. Note that these will only be accessible if your accounting system has been connected.',
          },
        },
        required: [],
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
      ledger_transaction_create_request: {
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
        required: [],
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
          },
        },
        required: ['currency', 'ledger_id', 'name', 'normal_balance'],
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
        required: [],
      },
      payment_order_subtype: {
        type: 'string',
        description:
          'An additional layer of classification for the type of payment order you are doing. This field is only used for `ach` payment orders currently. For `ach`  payment orders, the `subtype`  represents the SEC code. We currently support `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`.',
        enum: [
          '0C',
          '0N',
          '0S',
          'CCD',
          'CIE',
          'CTX',
          'IAT',
          'PPD',
          'TEL',
          'WEB',
          'au_becs',
          'bacs',
          'chats',
          'dk_nets',
          'eft',
          'hu_ics',
          'masav',
          'mx_ccen',
          'neft',
          'nics',
          'nz_becs',
          'pl_elixir',
          'ro_sent',
          'se_bankgirot',
          'sepa',
          'sg_giro',
          'sic',
          'sknbi',
          'zengin',
        ],
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
  return asTextContentResult(await client.bulkRequests.create(body));
};

export default { metadata, tool, handler };
