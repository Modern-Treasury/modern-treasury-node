// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'internal_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/internal_accounts/{internal_account_id}/account_capabilities/{id}',
  operationId: 'updateAccountCapability',
};

export const tool: Tool = {
  name: 'update_account_capability_internal_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nupdate account_capability\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    created_at: {\n      type: 'string',\n      format: 'date-time'\n    },\n    direction: {\n      $ref: '#/$defs/transaction_direction'\n    },\n    discarded_at: {\n      type: 'string',\n      format: 'date-time'\n    },\n    identifier: {\n      type: 'string',\n      description: 'A unique reference assigned by your bank for tracking and recognizing payment files. It is important this is formatted exactly how the bank assigned it.'\n    },\n    live_mode: {\n      type: 'boolean',\n      description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n    },\n    object: {\n      type: 'string'\n    },\n    payment_type: {\n      type: 'string',\n      description: 'Indicates the the type of payment this capability is responsible for originating.',\n      enum: [        'ach',\n        'au_becs',\n        'bacs',\n        'base',\n        'book',\n        'card',\n        'chats',\n        'check',\n        'cross_border',\n        'dk_nets',\n        'eft',\n        'ethereum',\n        'hu_ics',\n        'interac',\n        'masav',\n        'mx_ccen',\n        'neft',\n        'nics',\n        'nz_becs',\n        'pl_elixir',\n        'polygon',\n        'provxchange',\n        'ro_sent',\n        'rtp',\n        'se_bankgirot',\n        'sen',\n        'sepa',\n        'sg_giro',\n        'sic',\n        'signet',\n        'sknbi',\n        'solana',\n        'wire',\n        'zengin'\n      ]\n    },\n    updated_at: {\n      type: 'string',\n      format: 'date-time'\n    }\n  },\n  required: [    'id',\n    'created_at',\n    'direction',\n    'discarded_at',\n    'identifier',\n    'live_mode',\n    'object',\n    'payment_type',\n    'updated_at'\n  ],\n  $defs: {\n    transaction_direction: {\n      type: 'string',\n      enum: [        'credit',\n        'debit'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      internal_account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      identifier: {
        type: 'string',
        description:
          'A unique reference assigned by your bank for tracking and recognizing payment files. It is important this is formatted exactly how the bank assigned it.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { internal_account_id, id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.internalAccounts.updateAccountCapability(internal_account_id, id, body),
    ),
  );
};

export default { metadata, tool, handler };
