// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'routing_details',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/{accounts_type}/{account_id}/routing_details',
  operationId: 'createRoutingDetail',
};

export const tool: Tool = {
  name: 'create_routing_details',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a routing detail for a single external account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/routing_detail',\n  $defs: {\n    routing_detail: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        bank_address: {\n          $ref: '#/$defs/address'\n        },\n        bank_name: {\n          type: 'string',\n          description: 'The name of the bank.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        payment_type: {\n          type: 'string',\n          description: 'If the routing detail is to be used for a specific payment type this field will be populated, otherwise null.',\n          enum: [            'ach',\n            'au_becs',\n            'bacs',\n            'base',\n            'book',\n            'card',\n            'chats',\n            'check',\n            'cross_border',\n            'dk_nets',\n            'eft',\n            'ethereum',\n            'hu_ics',\n            'interac',\n            'masav',\n            'mx_ccen',\n            'neft',\n            'nics',\n            'nz_becs',\n            'pl_elixir',\n            'polygon',\n            'provxchange',\n            'ro_sent',\n            'rtp',\n            'se_bankgirot',\n            'sen',\n            'sepa',\n            'sg_giro',\n            'sic',\n            'signet',\n            'sknbi',\n            'solana',\n            'wire',\n            'zengin'\n          ]\n        },\n        routing_number: {\n          type: 'string',\n          description: 'The routing number of the bank.'\n        },\n        routing_number_type: {\n          type: 'string',\n          description: 'The type of routing number. See https://docs.moderntreasury.com/platform/reference/routing-detail-object for more details.',\n          enum: [            'aba',\n            'au_bsb',\n            'br_codigo',\n            'ca_cpa',\n            'chips',\n            'cnaps',\n            'dk_interbank_clearing_code',\n            'gb_sort_code',\n            'hk_interbank_clearing_code',\n            'hu_interbank_clearing_code',\n            'id_sknbi_code',\n            'il_bank_code',\n            'in_ifsc',\n            'jp_zengin_code',\n            'mx_bank_identifier',\n            'my_branch_code',\n            'nz_national_clearing_code',\n            'pl_national_clearing_code',\n            'se_bankgiro_clearing_code',\n            'sg_interbank_clearing_code',\n            'swift',\n            'za_national_clearing_code'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'bank_address',\n        'bank_name',\n        'created_at',\n        'discarded_at',\n        'live_mode',\n        'object',\n        'payment_type',\n        'routing_number',\n        'routing_number_type',\n        'updated_at'\n      ]\n    },\n    address: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        country: {\n          type: 'string',\n          description: 'Country code conforms to [ISO 3166-1 alpha-2]'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        line1: {\n          type: 'string'\n        },\n        line2: {\n          type: 'string'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        locality: {\n          type: 'string',\n          description: 'Locality or City.'\n        },\n        object: {\n          type: 'string'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code of the address.'\n        },\n        region: {\n          type: 'string',\n          description: 'Region or State.'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'country',\n        'created_at',\n        'line1',\n        'line2',\n        'live_mode',\n        'locality',\n        'object',\n        'postal_code',\n        'region',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
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
          'il_bank_code',
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
  const { accounts_type, account_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.routingDetails.create(accounts_type, account_id, body)),
  );
};

export default { metadata, tool, handler };
