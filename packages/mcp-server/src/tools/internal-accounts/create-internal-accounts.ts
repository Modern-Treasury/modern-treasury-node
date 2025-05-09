// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_internal_accounts',
  description: 'create internal account',
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
        description: 'The identifier of the financial institution the account belongs to.',
      },
      currency: {
        type: 'string',
        description: 'Either "USD" or "CAD". Internal accounts created at Increase only supports "USD".',
        enum: ['USD', 'CAD'],
      },
      name: {
        type: 'string',
        description: 'The nickname of the account.',
      },
      party_name: {
        type: 'string',
        description: 'The legal name of the entity which owns the account.',
      },
      counterparty_id: {
        type: 'string',
        description: 'The Counterparty associated to this account.',
      },
      legal_entity_id: {
        type: 'string',
        description: 'The LegalEntity associated to this account.',
      },
      parent_account_id: {
        type: 'string',
        description: 'The parent internal account of this new account.',
      },
      party_address: {
        type: 'object',
        description: 'The address associated with the owner or null.',
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
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
          line2: {
            type: 'string',
          },
        },
        required: ['country', 'line1', 'locality', 'postal_code', 'region'],
      },
      vendor_attributes: {
        type: 'object',
        description:
          'A hash of vendor specific attributes that will be used when creating the account at the vendor specified by the given connection.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.internalAccounts.create(body);
};

export default { metadata, tool, handler };
