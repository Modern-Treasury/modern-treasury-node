// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'paper_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/paper_items/{id}',
  operationId: 'getPaperItem',
};

export const tool: Tool = {
  name: 'retrieve_paper_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details on a single paper item.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/paper_item',\n  $defs: {\n    paper_item: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        account_number: {\n          type: 'string',\n          description: 'The account number on the paper item.'\n        },\n        account_number_safe: {\n          type: 'string',\n          description: 'The last 4 digits of the account_number.'\n        },\n        amount: {\n          type: 'integer',\n          description: 'The amount of the paper item.'\n        },\n        check_number: {\n          type: 'string',\n          description: 'The check number on the paper item.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        deposit_date: {\n          type: 'string',\n          description: 'The date the paper item was deposited into your organization\\'s bank account.',\n          format: 'date'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        lockbox_number: {\n          type: 'string',\n          description: 'The identifier for the lockbox assigned by the bank.'\n        },\n        memo_field: {\n          type: 'string',\n          description: 'The memo field on the paper item.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        object: {\n          type: 'string'\n        },\n        remitter_name: {\n          type: 'string',\n          description: 'The name of the remitter on the paper item.'\n        },\n        routing_number: {\n          type: 'string',\n          description: 'The routing number on the paper item.'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the paper item. One of `pending`, `completed`, or `returned`.',\n          enum: [            'completed',\n            'pending',\n            'returned'\n          ]\n        },\n        transaction_id: {\n          type: 'string',\n          description: 'The ID of the reconciled Transaction or `null`.'\n        },\n        transaction_line_item_id: {\n          type: 'string',\n          description: 'The ID of the reconciled Transaction Line Item or `null`.'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'account_number',\n        'account_number_safe',\n        'amount',\n        'check_number',\n        'created_at',\n        'currency',\n        'deposit_date',\n        'live_mode',\n        'lockbox_number',\n        'memo_field',\n        'metadata',\n        'object',\n        'remitter_name',\n        'routing_number',\n        'status',\n        'transaction_id',\n        'transaction_line_item_id',\n        'updated_at'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'Three-letter ISO currency code.',\n      enum: [        'AED',\n        'AFN',\n        'ALL',\n        'AMD',\n        'ANG',\n        'AOA',\n        'ARS',\n        'AUD',\n        'AWG',\n        'AZN',\n        'BAM',\n        'BBD',\n        'BCH',\n        'BDT',\n        'BGN',\n        'BHD',\n        'BIF',\n        'BMD',\n        'BND',\n        'BOB',\n        'BRL',\n        'BSD',\n        'BTC',\n        'BTN',\n        'BWP',\n        'BYN',\n        'BYR',\n        'BZD',\n        'CAD',\n        'CDF',\n        'CHF',\n        'CLF',\n        'CLP',\n        'CNH',\n        'CNY',\n        'COP',\n        'CRC',\n        'CUC',\n        'CUP',\n        'CVE',\n        'CZK',\n        'DJF',\n        'DKK',\n        'DOP',\n        'DZD',\n        'EEK',\n        'EGP',\n        'ERN',\n        'ETB',\n        'EUR',\n        'EURC',\n        'FJD',\n        'FKP',\n        'GBP',\n        'GBX',\n        'GEL',\n        'GGP',\n        'GHS',\n        'GIP',\n        'GMD',\n        'GNF',\n        'GTQ',\n        'GYD',\n        'HKD',\n        'HNL',\n        'HRK',\n        'HTG',\n        'HUF',\n        'IDR',\n        'ILS',\n        'IMP',\n        'INR',\n        'IQD',\n        'IRR',\n        'ISK',\n        'JEP',\n        'JMD',\n        'JOD',\n        'JPY',\n        'KES',\n        'KGS',\n        'KHR',\n        'KMF',\n        'KPW',\n        'KRW',\n        'KWD',\n        'KYD',\n        'KZT',\n        'LAK',\n        'LBP',\n        'LKR',\n        'LRD',\n        'LSL',\n        'LTL',\n        'LVL',\n        'LYD',\n        'MAD',\n        'MDL',\n        'MGA',\n        'MKD',\n        'MMK',\n        'MNT',\n        'MOP',\n        'MRO',\n        'MRU',\n        'MTL',\n        'MUR',\n        'MVR',\n        'MWK',\n        'MXN',\n        'MYR',\n        'MZN',\n        'NAD',\n        'NGN',\n        'NIO',\n        'NOK',\n        'NPR',\n        'NZD',\n        'OMR',\n        'PAB',\n        'PEN',\n        'PGK',\n        'PHP',\n        'PKR',\n        'PLN',\n        'PYG',\n        'PYUSD',\n        'QAR',\n        'RON',\n        'RSD',\n        'RUB',\n        'RWF',\n        'SAR',\n        'SBC',\n        'SBD',\n        'SCR',\n        'SDG',\n        'SEK',\n        'SGD',\n        'SHP',\n        'SKK',\n        'SLL',\n        'SOS',\n        'SRD',\n        'SSP',\n        'STD',\n        'SVC',\n        'SYP',\n        'SZL',\n        'THB',\n        'TJS',\n        'TMM',\n        'TMT',\n        'TND',\n        'TOP',\n        'TRY',\n        'TTD',\n        'TWD',\n        'TZS',\n        'UAH',\n        'UGX',\n        'USD',\n        'USDB',\n        'USDC',\n        'USDP',\n        'USDT',\n        'UYU',\n        'UZS',\n        'VEF',\n        'VES',\n        'VND',\n        'VUV',\n        'WST',\n        'XAF',\n        'XAG',\n        'XAU',\n        'XBA',\n        'XBB',\n        'XBC',\n        'XBD',\n        'XCD',\n        'XDR',\n        'XFU',\n        'XOF',\n        'XPD',\n        'XPF',\n        'XPT',\n        'XTS',\n        'YER',\n        'ZAR',\n        'ZMK',\n        'ZMW',\n        'ZWD',\n        'ZWL',\n        'ZWN',\n        'ZWR'\n      ]\n    }\n  }\n}\n```",
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
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.paperItems.retrieve(id)));
};

export default { metadata, tool, handler };
