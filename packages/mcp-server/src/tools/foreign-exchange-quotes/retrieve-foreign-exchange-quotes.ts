// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'foreign_exchange_quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/foreign_exchange_quotes/{id}',
  operationId: 'getQuote',
};

export const tool: Tool = {
  name: 'retrieve_foreign_exchange_quotes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nget foreign_exchange_quote\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/foreign_exchange_quote',\n  $defs: {\n    foreign_exchange_quote: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        effective_at: {\n          type: 'string',\n          description: 'The timestamp until when the quoted rate is valid.',\n          format: 'date-time'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'The timestamp until which the quote must be booked by.',\n          format: 'date-time'\n        },\n        foreign_exchange_indicator: {\n          type: 'string',\n          description: 'Either `fixed_to_variable` if the `base_amount` was specified, or `variable_to_fixed` if the `target_amount` was specified when requesting the quote.'\n        },\n        foreign_exchange_rate: {\n          $ref: '#/$defs/foreign_exchange_rate'\n        },\n        internal_account_id: {\n          type: 'string',\n          description: 'The ID for the `InternalAccount` this quote is associated with.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        object: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        vendor_id: {\n          type: 'string',\n          description: 'This vendor assigned ID for this quote.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'effective_at',\n        'expires_at',\n        'foreign_exchange_indicator',\n        'foreign_exchange_rate',\n        'internal_account_id',\n        'live_mode',\n        'metadata',\n        'object',\n        'updated_at'\n      ]\n    },\n    foreign_exchange_rate: {\n      type: 'object',\n      properties: {\n        base_amount: {\n          type: 'integer',\n          description: 'Amount in the lowest denomination of the `base_currency` to convert, often called the \"sell\" amount.'\n        },\n        base_currency: {\n          $ref: '#/$defs/currency'\n        },\n        exponent: {\n          type: 'integer',\n          description: 'The exponent component of the rate. The decimal is calculated as `value` / (10 ^ `exponent`).'\n        },\n        rate_string: {\n          type: 'string',\n          description: 'A string representation of the rate.'\n        },\n        target_amount: {\n          type: 'integer',\n          description: 'Amount in the lowest denomination of the `target_currency`, often called the \"buy\" amount.'\n        },\n        target_currency: {\n          $ref: '#/$defs/currency'\n        },\n        value: {\n          type: 'integer',\n          description: 'The whole number component of the rate. The decimal is calculated as `value` / (10 ^ `exponent`).'\n        }\n      },\n      required: [        'base_amount',\n        'base_currency',\n        'exponent',\n        'rate_string',\n        'target_amount',\n        'target_currency',\n        'value'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'Three-letter ISO currency code.',\n      enum: [        'AED',\n        'AFN',\n        'ALL',\n        'AMD',\n        'ANG',\n        'AOA',\n        'ARS',\n        'AUD',\n        'AWG',\n        'AZN',\n        'BAM',\n        'BBD',\n        'BCH',\n        'BDT',\n        'BGN',\n        'BHD',\n        'BIF',\n        'BMD',\n        'BND',\n        'BOB',\n        'BRL',\n        'BSD',\n        'BTC',\n        'BTN',\n        'BWP',\n        'BYN',\n        'BYR',\n        'BZD',\n        'CAD',\n        'CDF',\n        'CHF',\n        'CLF',\n        'CLP',\n        'CNH',\n        'CNY',\n        'COP',\n        'CRC',\n        'CUC',\n        'CUP',\n        'CVE',\n        'CZK',\n        'DJF',\n        'DKK',\n        'DOP',\n        'DZD',\n        'EEK',\n        'EGP',\n        'ERN',\n        'ETB',\n        'EUR',\n        'EURC',\n        'FJD',\n        'FKP',\n        'GBP',\n        'GBX',\n        'GEL',\n        'GGP',\n        'GHS',\n        'GIP',\n        'GMD',\n        'GNF',\n        'GTQ',\n        'GYD',\n        'HKD',\n        'HNL',\n        'HRK',\n        'HTG',\n        'HUF',\n        'IDR',\n        'ILS',\n        'IMP',\n        'INR',\n        'IQD',\n        'IRR',\n        'ISK',\n        'JEP',\n        'JMD',\n        'JOD',\n        'JPY',\n        'KES',\n        'KGS',\n        'KHR',\n        'KMF',\n        'KPW',\n        'KRW',\n        'KWD',\n        'KYD',\n        'KZT',\n        'LAK',\n        'LBP',\n        'LKR',\n        'LRD',\n        'LSL',\n        'LTL',\n        'LVL',\n        'LYD',\n        'MAD',\n        'MDL',\n        'MGA',\n        'MKD',\n        'MMK',\n        'MNT',\n        'MOP',\n        'MRO',\n        'MRU',\n        'MTL',\n        'MUR',\n        'MVR',\n        'MWK',\n        'MXN',\n        'MYR',\n        'MZN',\n        'NAD',\n        'NGN',\n        'NIO',\n        'NOK',\n        'NPR',\n        'NZD',\n        'OMR',\n        'PAB',\n        'PEN',\n        'PGK',\n        'PHP',\n        'PKR',\n        'PLN',\n        'PYG',\n        'PYUSD',\n        'QAR',\n        'RON',\n        'RSD',\n        'RUB',\n        'RWF',\n        'SAR',\n        'SBC',\n        'SBD',\n        'SCR',\n        'SDG',\n        'SEK',\n        'SGD',\n        'SHP',\n        'SKK',\n        'SLL',\n        'SOS',\n        'SRD',\n        'SSP',\n        'STD',\n        'SVC',\n        'SYP',\n        'SZL',\n        'THB',\n        'TJS',\n        'TMM',\n        'TMT',\n        'TND',\n        'TOP',\n        'TRY',\n        'TTD',\n        'TWD',\n        'TZS',\n        'UAH',\n        'UGX',\n        'USD',\n        'USDB',\n        'USDC',\n        'USDP',\n        'USDT',\n        'UYU',\n        'UZS',\n        'VEF',\n        'VES',\n        'VND',\n        'VUV',\n        'WST',\n        'XAF',\n        'XAG',\n        'XAU',\n        'XBA',\n        'XBB',\n        'XBC',\n        'XBD',\n        'XCD',\n        'XDR',\n        'XFU',\n        'XOF',\n        'XPD',\n        'XPF',\n        'XPT',\n        'XTS',\n        'YER',\n        'ZAR',\n        'ZMK',\n        'ZMW',\n        'ZWD',\n        'ZWL',\n        'ZWN',\n        'ZWR'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.foreignExchangeQuotes.retrieve(id)));
};

export default { metadata, tool, handler };
