// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'validate_routing_number_validations',
  description: 'Validates the routing number information supplied without creating a routing detail',
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
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.validations.validateRoutingNumber(body);
};

export default { tool, handler };
