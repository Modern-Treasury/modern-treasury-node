// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'create_account_collection_flows',
  description: 'create account_collection_flow',
  inputSchema: {
    type: 'object',
    properties: {
      counterparty_id: {
        type: 'string',
        description: 'Required.',
      },
      payment_types: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Required. At least one of `ach`, `wire` or `check`.',
        },
      },
      receiving_countries: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Optional. Array of 3-digit ISO country codes.',
          enum: [
            'USA',
            'AUS',
            'BEL',
            'CAN',
            'CHL',
            'CHN',
            'COL',
            'FRA',
            'DEU',
            'HKG',
            'IND',
            'IRL',
            'ITA',
            'MEX',
            'NLD',
            'PER',
            'ESP',
            'GBR',
          ],
        },
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.accountCollectionFlows.create(body);
};

export default { tool, handler };
