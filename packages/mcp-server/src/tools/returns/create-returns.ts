// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'returns',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/returns',
  operationId: 'createReturn',
};

export const tool: Tool = {
  name: 'create_returns',
  description: 'Create a return.',
  inputSchema: {
    type: 'object',
    properties: {
      returnable_id: {
        type: 'string',
        description: 'The ID of the object being returned or `null`.',
      },
      returnable_type: {
        type: 'string',
        description:
          'The type of object being returned. Currently, this may only be incoming_payment_detail.',
        enum: ['incoming_payment_detail'],
      },
      additional_information: {
        type: 'string',
        description:
          'Some returns may include additional information from the bank. In these cases, this string will be present.',
      },
      code: {
        type: 'string',
        description: 'The return code. For ACH returns, this is the required ACH return code.',
        enum: [
          '901',
          '902',
          '903',
          '904',
          '905',
          '907',
          '908',
          '909',
          '910',
          '911',
          '912',
          '914',
          'C01',
          'C02',
          'C03',
          'C05',
          'C06',
          'C07',
          'C08',
          'C09',
          'C13',
          'C14',
          'R01',
          'R02',
          'R03',
          'R04',
          'R05',
          'R06',
          'R07',
          'R08',
          'R09',
          'R10',
          'R11',
          'R12',
          'R13',
          'R14',
          'R15',
          'R16',
          'R17',
          'R18',
          'R19',
          'R20',
          'R21',
          'R22',
          'R23',
          'R24',
          'R25',
          'R26',
          'R27',
          'R28',
          'R29',
          'R30',
          'R31',
          'R32',
          'R33',
          'R34',
          'R35',
          'R36',
          'R37',
          'R38',
          'R39',
          'R40',
          'R41',
          'R42',
          'R43',
          'R44',
          'R45',
          'R46',
          'R47',
          'R50',
          'R51',
          'R52',
          'R53',
          'R61',
          'R62',
          'R67',
          'R68',
          'R69',
          'R70',
          'R71',
          'R72',
          'R73',
          'R74',
          'R75',
          'R76',
          'R77',
          'R80',
          'R81',
          'R82',
          'R83',
          'R84',
          'R85',
          'currencycloud',
        ],
      },
      data: {
        type: 'object',
        description: 'The raw data from the return file that we get from the bank.',
      },
      date_of_death: {
        type: 'string',
        description:
          'If the return code is `R14` or `R15` this is the date the deceased counterparty passed away.',
        format: 'date',
      },
      reason: {
        type: 'string',
        description:
          'An optional description of the reason for the return. This is for internal usage and will not be transmitted to the bank.”',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.returns.create(body);
};

export default { metadata, tool, handler };
