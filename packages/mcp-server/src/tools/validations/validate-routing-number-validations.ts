// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'validations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/validations/routing_numbers',
  operationId: 'validateRoutingNumber',
};

export const tool: Tool = {
  name: 'validate_routing_number_validations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nValidates the routing number information supplied without creating a routing detail\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/routing_number_lookup_request',\n  $defs: {\n    routing_number_lookup_request: {\n      type: 'object',\n      properties: {\n        bank_address: {\n          $ref: '#/$defs/address_request'\n        },\n        bank_name: {\n          type: 'string',\n          description: 'The name of the bank.'\n        },\n        routing_number: {\n          type: 'string',\n          description: 'The routing number of the bank.'\n        },\n        routing_number_type: {\n          type: 'string',\n          description: 'The type of routing number. See https://docs.moderntreasury.com/platform/reference/routing-detail-object for more details. In sandbox mode we currently only support `aba` and `swift` with routing numbers \\'123456789\\' and \\'GRINUST0XXX\\' respectively.',\n          enum: [            'aba',\n            'au_bsb',\n            'ca_cpa',\n            'gb_sort_code',\n            'in_ifsc',\n            'nz_national_clearing_code',\n            'se_bankgiro_clearing_code',\n            'swift',\n            'za_national_clearing_code'\n          ]\n        },\n        sanctions: {\n          type: 'object',\n          description: 'An object containing key-value pairs, each with a sanctions list as the key and a boolean value representing whether the bank is on that particular sanctions list. Currently, this includes eu_con, uk_hmt, us_ofac, and un sanctions lists.',\n          additionalProperties: true\n        },\n        supported_payment_types: {\n          type: 'array',\n          description: 'An array of payment types that are supported for this routing number. This can include `ach`, `wire`, `rtp`, `sepa`, `bacs`, `au_becs`, and \\'fednow\\' currently.',\n          items: {\n            type: 'string',\n            enum: [              'ach',\n              'au_becs',\n              'bacs',\n              'base',\n              'book',\n              'card',\n              'chats',\n              'check',\n              'cross_border',\n              'dk_nets',\n              'eft',\n              'ethereum',\n              'gb_fps',\n              'hu_ics',\n              'interac',\n              'masav',\n              'mx_ccen',\n              'neft',\n              'nics',\n              'nz_becs',\n              'pl_elixir',\n              'polygon',\n              'provxchange',\n              'ro_sent',\n              'rtp',\n              'se_bankgirot',\n              'sen',\n              'sepa',\n              'sg_giro',\n              'sic',\n              'signet',\n              'sknbi',\n              'solana',\n              'wire',\n              'zengin'\n            ]\n          }\n        }\n      }\n    },\n    address_request: {\n      type: 'object',\n      properties: {\n        country: {\n          type: 'string',\n          description: 'Country code conforms to [ISO 3166-1 alpha-2]'\n        },\n        line1: {\n          type: 'string'\n        },\n        line2: {\n          type: 'string'\n        },\n        locality: {\n          type: 'string',\n          description: 'Locality or City.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code of the address.'\n        },\n        region: {\n          type: 'string',\n          description: 'Region or State.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      routing_number: {
        type: 'string',
        description: 'The routing number that is being validated.',
      },
      routing_number_type: {
        type: 'string',
        description:
          "The type of routing number. See https://docs.moderntreasury.com/platform/reference/routing-detail-object for more details. In sandbox mode we currently only support `aba` and `swift` with routing numbers '123456789' and 'GRINUST0XXX' respectively.",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['routing_number', 'routing_number_type'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.validations.validateRoutingNumber(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
