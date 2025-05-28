// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'external_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/external_accounts/{id}',
  operationId: 'updateExternalAccount',
};

export const tool: Tool = {
  name: 'update_external_accounts',
  description: 'update external account',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      account_type: {
        $ref: '#/$defs/external_account_type',
      },
      counterparty_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value.',
      },
      name: {
        type: 'string',
        description:
          "A nickname for the external account. This is only for internal usage and won't affect any payments",
      },
      party_address: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
            type: 'string',
          },
          line2: {
            type: 'string',
          },
          locality: {
            type: 'string',
            description: 'Locality or City.',
          },
          postal_code: {
            type: 'string',
            description: 'The postal code of the address.',
          },
          region: {
            type: 'string',
            description: 'Region or State.',
          },
        },
        required: [],
      },
      party_name: {
        type: 'string',
        description: "If this value isn't provided, it will be inherited from the counterparty's name.",
      },
      party_type: {
        type: 'string',
        description: 'Either `individual` or `business`.',
        enum: ['business', 'individual'],
      },
    },
    $defs: {
      external_account_type: {
        type: 'string',
        description: 'Can be `checking`, `savings` or `other`.',
        enum: [
          'base_wallet',
          'cash',
          'checking',
          'crypto_wallet',
          'ethereum_wallet',
          'general_ledger',
          'loan',
          'non_resident',
          'other',
          'overdraft',
          'polygon_wallet',
          'savings',
          'solana_wallet',
        ],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.externalAccounts.update(id, body);
};

export default { metadata, tool, handler };
