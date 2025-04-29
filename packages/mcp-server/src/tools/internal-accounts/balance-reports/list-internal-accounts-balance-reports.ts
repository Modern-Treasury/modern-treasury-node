// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts.balance_reports',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { internal_account_id, ...body } = args as any;
  return client.internalAccounts.balanceReports.list(internal_account_id, body);
};

export default { metadata, tool, handler };
