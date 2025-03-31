// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.transactions.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_transactions',
  description: 'Get details on a single transaction.',
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
    return client.transactions.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_transactions',
  description: 'Update a single transaction.',
  inputSchema: {
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
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.transactions.update(id, body);
  },
});

registerApiMethod({
  name: 'list_transactions',
  description: 'Get a list of all transactions.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      as_of_date_end: {
        type: 'string',
        description:
          'Filters transactions with an `as_of_date` starting on or before the specified date (YYYY-MM-DD).',
        format: 'date',
      },
      as_of_date_start: {
        type: 'string',
        description:
          'Filters transactions with an `as_of_date` starting on or after the specified date (YYYY-MM-DD).',
        format: 'date',
      },
      counterparty_id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Filters for transactions including the queried string in the description.',
      },
      direction: {
        type: 'string',
      },
      internal_account_id: {
        type: 'string',
        description:
          'Specify `internal_account_id` if you wish to see transactions to/from a specific account.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      payment_type: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      posted: {
        type: 'boolean',
        description: 'Either `true` or `false`.',
      },
      transactable_type: {
        type: 'string',
      },
      vendor_id: {
        type: 'string',
        description:
          'Filters for transactions including the queried vendor id (an identifier given to transactions by the bank).',
      },
      virtual_account_id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.transactions.list(body);
  },
});

registerApiMethod({
  name: 'delete_transactions',
  description: 'delete transaction',
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
    return client.transactions.del(id);
  },
});
