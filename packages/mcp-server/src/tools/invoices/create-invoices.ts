// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/invoices',
  operationId: 'createInvoice',
};

export const tool: Tool = {
  name: 'create_invoices',
  description: 'create invoice',
  inputSchema: {
    type: 'object',
    properties: {
      counterparty_id: {
        type: 'string',
        description: 'The ID of the counterparty receiving the invoice.',
      },
      due_date: {
        type: 'string',
        description: 'A future date by when the invoice needs to be paid.',
        format: 'date-time',
      },
      originating_account_id: {
        type: 'string',
        description: 'The ID of the internal account the invoice should be paid to.',
      },
      auto_advance: {
        type: 'boolean',
        description:
          'When true, the invoice will progress to unpaid automatically and cannot be edited after entering that state. If the invoice fails to progress to unpaid, the errors will be returned and the invoice will not be created.',
      },
      contact_details: {
        type: 'array',
        description: "The invoicer's contact details displayed at the top of the invoice.",
        items: {
          $ref: '#/$defs/contact_detail',
        },
      },
      counterparty_billing_address: {
        type: 'object',
        description: "The counterparty's billing address.",
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
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
          line2: {
            type: 'string',
          },
        },
        required: ['country', 'line1', 'locality', 'postal_code', 'region'],
      },
      counterparty_shipping_address: {
        type: 'object',
        description: "The counterparty's shipping address where physical goods should be delivered.",
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
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
          line2: {
            type: 'string',
          },
        },
        required: ['country', 'line1', 'locality', 'postal_code', 'region'],
      },
      currency: {
        $ref: '#/$defs/currency',
      },
      description: {
        type: 'string',
        description: 'A free-form description of the invoice.',
      },
      fallback_payment_method: {
        type: 'string',
        description:
          'When payment_method is automatic, the fallback payment method to use when an automatic payment fails. One of `manual` or `ui`.',
      },
      ingest_ledger_entries: {
        type: 'boolean',
        description:
          'Whether to ingest the ledger_entries to populate the invoice line items. If this is false, then a line item must be provided. If this is true, line_items must be empty. Ignored if ledger_account_settlement_id is empty.',
      },
      invoice_line_items: {
        type: 'array',
        description:
          'An array of invoice line items. The API supports a maximum of 50 invoice line items per invoice. If a greater number of invoice line items is required, please contact support.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the line item, typically a product or SKU name.',
            },
            unit_amount: {
              type: 'integer',
              description:
                "The cost per unit of the product or service that this line item is for,           specified in the invoice currency's smallest unit.",
            },
            description: {
              type: 'string',
              description: 'An optional free-form description of the line item.',
            },
            direction: {
              type: 'string',
              description:
                "Either `debit` or `credit`. `debit` indicates that a client owes the business money           and increases the invoice's `total_amount` due. `credit` has the opposite intention and effect.",
            },
            metadata: {
              type: 'object',
              description:
                'Additional data represented as key-value pairs. Both the key and value must be strings.',
            },
            quantity: {
              type: 'integer',
              description:
                'The number of units of a product or service that this line item is for.           Must be a whole number. Defaults to 1 if not provided.',
            },
            unit_amount_decimal: {
              type: 'string',
              description:
                "The cost per unit of the product or service that this line item is for,           specified in the invoice currency's smallest unit. Accepts decimal strings with up to 12 decimals",
            },
          },
          required: ['name', 'unit_amount'],
        },
      },
      invoicer_address: {
        type: 'object',
        description: "The invoice issuer's business address.",
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
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
          line2: {
            type: 'string',
          },
        },
        required: ['country', 'line1', 'locality', 'postal_code', 'region'],
      },
      ledger_account_settlement_id: {
        type: 'string',
        description: 'The ID of the virtual account the invoice should be paid to.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      notification_email_addresses: {
        type: 'array',
        description:
          "Emails in addition to the counterparty email to send invoice status notifications to. At least one email is required if notifications are enabled and the counterparty doesn't have an email.",
        items: {
          type: 'string',
        },
      },
      notifications_enabled: {
        type: 'boolean',
        description:
          'If true, the invoice will send email notifications to the invoice recipients about invoice status changes.',
      },
      payment_effective_date: {
        type: 'string',
        description:
          "Date transactions are to be posted to the participants' account. Defaults to the current business day or the next business day if the current day is a bank holiday or weekend. Format: yyyy-mm-dd.",
        format: 'date',
      },
      payment_method: {
        type: 'string',
        description:
          "The method by which the invoice can be paid. `ui` will show the embedded payment collection flow. `automatic` will automatically initiate payment based upon the account details of the receiving_account id.\\nIf the invoice amount is positive, the automatically initiated payment order's direction will be debit. If the invoice amount is negative, the automatically initiated payment order's direction will be credit. One of `manual`, `ui`, or `automatic`.",
        enum: ['ui', 'manual', 'automatic'],
      },
      payment_type: {
        $ref: '#/$defs/payment_order_type',
      },
      receiving_account_id: {
        type: 'string',
        description: 'The receiving account ID. Can be an `external_account`.',
      },
      recipient_email: {
        type: 'string',
        description:
          "The email of the recipient of the invoice. Leaving this value as null will fallback to using the counterparty's name.",
      },
      recipient_name: {
        type: 'string',
        description:
          "The name of the recipient of the invoice. Leaving this value as null will fallback to using the counterparty's name.",
      },
      remind_after_overdue_days: {
        type: 'array',
        description:
          'Number of days after due date when overdue reminder emails will be sent out to invoice recipients.',
        items: {
          type: 'integer',
        },
      },
      virtual_account_id: {
        type: 'string',
        description: 'The ID of the virtual account the invoice should be paid to.',
      },
    },
    required: ['counterparty_id', 'due_date', 'originating_account_id'],
    $defs: {
      contact_detail: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          contact_identifier: {
            type: 'string',
          },
          contact_identifier_type: {
            type: 'string',
            enum: ['email', 'phone_number', 'website'],
          },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          discarded_at: {
            type: 'string',
            format: 'date-time',
          },
          live_mode: {
            type: 'boolean',
            description:
              'This field will be true if this object exists in the live environment or false if it exists in the test environment.',
          },
          object: {
            type: 'string',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [
          'id',
          'contact_identifier',
          'contact_identifier_type',
          'created_at',
          'discarded_at',
          'live_mode',
          'object',
          'updated_at',
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
    },
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.invoices.create(body));
};

export default { metadata, tool, handler };
