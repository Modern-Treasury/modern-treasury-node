// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'account_details',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/{accounts_type}/{account_id}/account_details',
  operationId: 'createAccountDetail',
};

export const tool: Tool = {
  name: 'create_account_details',
  description: 'Create an account detail for an external account.',
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
      account_number: {
        type: 'string',
        description: 'The account number for the bank account.',
      },
      account_number_type: {
        type: 'string',
        description:
          'One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank account number is in a generic format.',
        enum: [
          'au_number',
          'base_address',
          'clabe',
          'ethereum_address',
          'hk_number',
          'iban',
          'id_number',
          'nz_number',
          'other',
          'pan',
          'polygon_address',
          'sg_number',
          'solana_address',
          'wallet_address',
        ],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { accounts_type, account_id, ...body } = args as any;
  return asTextContentResult(await client.accountDetails.create(accounts_type, account_id, body));
};

export default { metadata, tool, handler };
