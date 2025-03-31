// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_internal_accounts_balance_reports',
  description: 'create balance reports',
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      as_of_date: {
        type: 'string',
        description: 'The date of the balance report in local time.',
        format: 'date',
      },
      as_of_time: {
        type: 'string',
        description: 'The time (24-hour clock) of the balance report in local time.',
      },
      balance_report_type: {
        type: 'string',
        description:
          'The specific type of balance report. One of `intraday`, `previous_day`, `real_time`, or `other`.',
        enum: ['intraday', 'other', 'previous_day', 'real_time'],
      },
      balances: {
        type: 'array',
        description: 'An array of `Balance` objects.',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'integer',
              description: 'The balance amount.',
            },
            balance_type: {
              type: 'string',
              description:
                "The specific type of balance reported. One of `opening_ledger`, `closing_ledger`, `current_ledger`, `opening_available`, `opening_available_next_business_day`, `closing_available`, `current_available`, 'previously_closed_book', or `other`.",
              enum: [
                'closing_available',
                'closing_ledger',
                'current_available',
                'current_ledger',
                'opening_available',
                'opening_available_next_business_day',
                'opening_ledger',
                'other',
                'previously_closed_book',
              ],
            },
            vendor_code: {
              type: 'string',
              description: 'The code used by the bank when reporting this specific balance.',
            },
            vendor_code_type: {
              type: 'string',
              description:
                'The type of `vendor_code` being reported. Can be one of `bai2`, `bankprov`, `bnk_dev`, `cleartouch`, `currencycloud`, `cross_river`, `dc_bank`, `dwolla`, `evolve`, `goldman_sachs`, `iso20022`, `jpmc`, `mx`, `signet`, `silvergate`, `swift`, or `us_bank`.',
            },
          },
          required: ['amount', 'balance_type', 'vendor_code', 'vendor_code_type'],
        },
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { internal_account_id, ...body } = args;
    return client.internalAccounts.balanceReports.create(internal_account_id, body);
  },
});

registerApiMethod({
  name: 'retrieve_internal_accounts_balance_reports',
  description: 'Get a single balance report for a given internal account.',
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { internal_account_id, id } = args;
    return client.internalAccounts.balanceReports.retrieve(internal_account_id, id);
  },
});

registerApiMethod({
  name: 'list_internal_accounts_balance_reports',
  description: 'Get all balance reports for a given internal account.',
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      after_cursor: {
        type: 'string',
      },
      as_of_date: {
        type: 'string',
        description: 'The date of the balance report in local time.',
        format: 'date',
      },
      balance_report_type: {
        type: 'string',
        description:
          'The specific type of balance report. One of `intraday`, `previous_day`, `real_time`, or `other`.',
        enum: ['intraday', 'other', 'previous_day', 'real_time'],
      },
      per_page: {
        type: 'integer',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { internal_account_id, ...body } = args;
    return client.internalAccounts.balanceReports.list(internal_account_id, body);
  },
});

registerApiMethod({
  name: 'delete_internal_accounts_balance_reports',
  description: 'Deletes a given balance report.',
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { internal_account_id, id } = args;
    return client.internalAccounts.balanceReports.del(internal_account_id, id);
  },
});
