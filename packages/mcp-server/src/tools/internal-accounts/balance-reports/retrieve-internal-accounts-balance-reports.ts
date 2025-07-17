// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts.balance_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/internal_accounts/{internal_account_id}/balance_reports/{id}',
  operationId: 'getBalanceReport',
};

export const tool: Tool = {
  name: 'retrieve_internal_accounts_balance_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single balance report for a given internal account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/balance_report',\n  $defs: {\n    balance_report: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        as_of_date: {\n          type: 'string',\n          description: 'The date of the balance report in local time.',\n          format: 'date'\n        },\n        as_of_time: {\n          type: 'string',\n          description: 'The time (24-hour clock) of the balance report in local time.',\n          format: 'time'\n        },\n        balance_report_type: {\n          type: 'string',\n          description: 'The specific type of balance report. One of `intraday`, `previous_day`, `real_time`, or `other`.',\n          enum: [            'intraday',\n            'other',\n            'previous_day',\n            'real_time'\n          ]\n        },\n        balances: {\n          type: 'array',\n          description: 'An array of `Balance` objects.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              amount: {\n                type: 'integer',\n                description: 'The balance amount.'\n              },\n              as_of_date: {\n                type: 'string',\n                description: 'The date on which the balance became true for the account.',\n                format: 'date'\n              },\n              as_of_time: {\n                type: 'string',\n                description: 'The time on which the balance became true for the account.',\n                format: 'time'\n              },\n              balance_type: {\n                type: 'string',\n                description: 'The specific type of balance reported. One of `opening_ledger`, `closing_ledger`, `current_ledger`, `opening_available`, `opening_available_next_business_day`, `closing_available`, `current_available`, \\'previously_closed_book\\', or `other`.',\n                enum: [                  'closing_available',\n                  'closing_ledger',\n                  'current_available',\n                  'current_ledger',\n                  'opening_available',\n                  'opening_available_next_business_day',\n                  'opening_ledger',\n                  'other',\n                  'previously_closed_book'\n                ]\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              currency: {\n                $ref: '#/$defs/currency'\n              },\n              live_mode: {\n                type: 'boolean',\n                description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n              },\n              object: {\n                type: 'string'\n              },\n              updated_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              value_date: {\n                type: 'string',\n                description: 'The date on which the balance becomes available.',\n                format: 'date'\n              },\n              vendor_code: {\n                type: 'string',\n                description: 'The code used by the bank when reporting this specific balance.'\n              },\n              vendor_code_type: {\n                type: 'string',\n                description: 'The type of `vendor_code` being reported. Can be one of `bai2`, `bankprov`, `bnk_dev`, `cleartouch`, `currencycloud`, `cross_river`, `dc_bank`, `dwolla`, `evolve`, `goldman_sachs`, `iso20022`, `jpmc`, `mx`, `signet`, `silvergate`, `swift`, or `us_bank`.'\n              }\n            },\n            required: [              'id',\n              'amount',\n              'as_of_date',\n              'as_of_time',\n              'balance_type',\n              'created_at',\n              'currency',\n              'live_mode',\n              'object',\n              'updated_at',\n              'value_date',\n              'vendor_code',\n              'vendor_code_type'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        internal_account_id: {\n          type: 'string',\n          description: 'The ID of one of your organization\\'s Internal Accounts.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'as_of_date',\n        'as_of_time',\n        'balance_report_type',\n        'balances',\n        'created_at',\n        'internal_account_id',\n        'live_mode',\n        'object',\n        'updated_at'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'Three-letter ISO currency code.',\n      enum: [        'AED',\n        'AFN',\n        'ALL',\n        'AMD',\n        'ANG',\n        'AOA',\n        'ARS',\n        'AUD',\n        'AWG',\n        'AZN',\n        'BAM',\n        'BBD',\n        'BCH',\n        'BDT',\n        'BGN',\n        'BHD',\n        'BIF',\n        'BMD',\n        'BND',\n        'BOB',\n        'BRL',\n        'BSD',\n        'BTC',\n        'BTN',\n        'BWP',\n        'BYN',\n        'BYR',\n        'BZD',\n        'CAD',\n        'CDF',\n        'CHF',\n        'CLF',\n        'CLP',\n        'CNH',\n        'CNY',\n        'COP',\n        'CRC',\n        'CUC',\n        'CUP',\n        'CVE',\n        'CZK',\n        'DJF',\n        'DKK',\n        'DOP',\n        'DZD',\n        'EEK',\n        'EGP',\n        'ERN',\n        'ETB',\n        'EUR',\n        'EURC',\n        'FJD',\n        'FKP',\n        'GBP',\n        'GBX',\n        'GEL',\n        'GGP',\n        'GHS',\n        'GIP',\n        'GMD',\n        'GNF',\n        'GTQ',\n        'GYD',\n        'HKD',\n        'HNL',\n        'HRK',\n        'HTG',\n        'HUF',\n        'IDR',\n        'ILS',\n        'IMP',\n        'INR',\n        'IQD',\n        'IRR',\n        'ISK',\n        'JEP',\n        'JMD',\n        'JOD',\n        'JPY',\n        'KES',\n        'KGS',\n        'KHR',\n        'KMF',\n        'KPW',\n        'KRW',\n        'KWD',\n        'KYD',\n        'KZT',\n        'LAK',\n        'LBP',\n        'LKR',\n        'LRD',\n        'LSL',\n        'LTL',\n        'LVL',\n        'LYD',\n        'MAD',\n        'MDL',\n        'MGA',\n        'MKD',\n        'MMK',\n        'MNT',\n        'MOP',\n        'MRO',\n        'MRU',\n        'MTL',\n        'MUR',\n        'MVR',\n        'MWK',\n        'MXN',\n        'MYR',\n        'MZN',\n        'NAD',\n        'NGN',\n        'NIO',\n        'NOK',\n        'NPR',\n        'NZD',\n        'OMR',\n        'PAB',\n        'PEN',\n        'PGK',\n        'PHP',\n        'PKR',\n        'PLN',\n        'PYG',\n        'PYUSD',\n        'QAR',\n        'RON',\n        'RSD',\n        'RUB',\n        'RWF',\n        'SAR',\n        'SBC',\n        'SBD',\n        'SCR',\n        'SDG',\n        'SEK',\n        'SGD',\n        'SHP',\n        'SKK',\n        'SLL',\n        'SOS',\n        'SRD',\n        'SSP',\n        'STD',\n        'SVC',\n        'SYP',\n        'SZL',\n        'THB',\n        'TJS',\n        'TMM',\n        'TMT',\n        'TND',\n        'TOP',\n        'TRY',\n        'TTD',\n        'TWD',\n        'TZS',\n        'UAH',\n        'UGX',\n        'USD',\n        'USDB',\n        'USDC',\n        'USDP',\n        'USDT',\n        'UYU',\n        'UZS',\n        'VEF',\n        'VES',\n        'VND',\n        'VUV',\n        'WST',\n        'XAF',\n        'XAG',\n        'XAU',\n        'XBA',\n        'XBB',\n        'XBC',\n        'XBD',\n        'XCD',\n        'XDR',\n        'XFU',\n        'XOF',\n        'XPD',\n        'XPF',\n        'XPT',\n        'XTS',\n        'YER',\n        'ZAR',\n        'ZMK',\n        'ZMW',\n        'ZWD',\n        'ZWL',\n        'ZWN',\n        'ZWR'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      id: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'string',
            enum: ['latest'],
          },
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['internal_account_id', 'id'],
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { internal_account_id, id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.internalAccounts.balanceReports.retrieve(internal_account_id, id)),
  );
};

export default { metadata, tool, handler };
