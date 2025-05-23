// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'transactions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_transactions',
  description: 'create transaction',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description: "Value in specified currency's smallest unit. e.g. $10 would be represented as 1000.",
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
      vendor_description: {
        type: 'string',
        description:
          'The transaction detail text that often appears in on your bank statement and in your banking portal.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.transactions.create(body);
};

export default { metadata, tool, handler };
