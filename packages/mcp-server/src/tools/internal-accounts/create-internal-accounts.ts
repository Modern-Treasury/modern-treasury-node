// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/internal_accounts',
  operationId: 'createInternalAccount',
};

export const tool: Tool = {
  name: 'create_internal_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\ncreate internal account",
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
      account_capabilities: {
        type: 'array',
        description:
          'An array of AccountCapability objects that list the originating abilities of the internal account and any relevant information for them.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
            },
            direction: {
              $ref: '#/$defs/transaction_direction',
            },
            discarded_at: {
              type: 'string',
              format: 'date-time',
            },
            identifier: {
              type: 'string',
              description:
                'A unique reference assigned by your bank for tracking and recognizing payment files. It is important this is formatted exactly how the bank assigned it.',
            },
            live_mode: {
              type: 'boolean',
              description:
                'This field will be true if this object exists in the live environment or false if it exists in the test environment.',
            },
            object: {
              type: 'string',
            },
            payment_type: {
              type: 'string',
              description:
                'Indicates the the type of payment this capability is responsible for originating.',
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
            updated_at: {
              type: 'string',
              format: 'date-time',
            },
          },
          required: [
            'id',
            'created_at',
            'direction',
            'discarded_at',
            'identifier',
            'live_mode',
            'object',
            'payment_type',
            'updated_at',
          ],
        },
      },
      account_type: {
        type: 'string',
        description:
          'The account type, used to provision the appropriate account at the financial institution.',
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
    $defs: {
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.internalAccounts.create(body));
};

export default { metadata, tool, handler };
