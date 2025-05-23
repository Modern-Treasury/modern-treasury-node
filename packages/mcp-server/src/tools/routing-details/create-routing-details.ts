// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'routing_details',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_routing_details',
  description: 'Create a routing detail for a single external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts'],
      },
      account_id: {
        type: 'string',
      },
      routing_number: {
        type: 'string',
        description: 'The routing number of the bank.',
      },
      routing_number_type: {
        type: 'string',
        description:
          'The type of routing number. See https://docs.moderntreasury.com/platform/reference/routing-detail-object for more details.',
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
          'in_ifsc',
          'jp_zengin_code',
          'mx_bank_identifier',
          'my_branch_code',
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
        description:
          'If the routing detail is to be used for a specific payment type this field will be populated, otherwise null.',
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

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { accounts_type, account_id, ...body } = args as any;
  return client.routingDetails.create(accounts_type, account_id, body);
};

export default { metadata, tool, handler };
