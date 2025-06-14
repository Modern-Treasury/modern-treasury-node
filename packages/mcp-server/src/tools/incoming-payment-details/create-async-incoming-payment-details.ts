// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'incoming_payment_details',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/simulations/incoming_payment_details/create_async',
  operationId: 'createAsyncIncomingPaymentDetail',
};

export const tool: Tool = {
  name: 'create_async_incoming_payment_details',
  description: 'Simulate Incoming Payment Detail',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description: "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
      },
      as_of_date: {
        type: 'string',
        description: 'Defaults to today.',
        format: 'date',
      },
      currency: {
        $ref: '#/$defs/currency',
      },
      data: {
        type: 'object',
        description:
          'An object passed through to the simulated IPD that could reflect what a vendor would pass.',
      },
      description: {
        type: 'string',
        description: 'Defaults to a random description.',
      },
      direction: {
        type: 'string',
        description: 'One of `credit`, `debit`.',
        enum: ['credit', 'debit'],
      },
      internal_account_id: {
        type: 'string',
        description: 'The ID of one of your internal accounts.',
      },
      type: {
        type: 'string',
        description: 'One of `ach`, `wire`, `check`.',
        enum: [
          'ach',
          'au_becs',
          'bacs',
          'book',
          'check',
          'eft',
          'interac',
          'neft',
          'nz_becs',
          'rtp',
          'sepa',
          'signet',
          'wire',
        ],
      },
      virtual_account_id: {
        type: 'string',
        description: 'An optional parameter to associate the incoming payment detail to a virtual account.',
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
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.incomingPaymentDetails.createAsync(body));
};

export default { metadata, tool, handler };
