// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'account_collection_flows',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/account_collection_flows/{id}',
  operationId: 'updateAccountCollectionFlow',
};

export const tool: Tool = {
  name: 'update_account_collection_flows',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nupdate account_collection_flow\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_collection_flow',\n  $defs: {\n    account_collection_flow: {\n      type: 'object',\n      properties: {\n        counterparty_id: {\n          type: 'string',\n          description: 'The ID of a counterparty. An external account created with this flow will be associated with this counterparty.'\n        },\n        payment_types: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'An account created with this flow will support payments of one of these types.',\n            enum: [              'ach',\n              'wire'\n            ]\n          }\n        },\n        id: {\n          type: 'string'\n        },\n        client_token: {\n          type: 'string',\n          description: 'The client token of the account collection flow.  This token can be used to embed account collection in your client-side application.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        external_account_id: {\n          type: 'string',\n          description: 'If present, the ID of the external account created using this flow.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        receiving_countries: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'An account created with this flow will support wires from the US to these countries.',\n            enum: [              'USA',\n              'AUS',\n              'BEL',\n              'CAN',\n              'CHL',\n              'CHN',\n              'COL',\n              'FRA',\n              'DEU',\n              'HKG',\n              'IND',\n              'IRL',\n              'ITA',\n              'MEX',\n              'NLD',\n              'PER',\n              'ESP',\n              'GBR'\n            ]\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the account collection flow. One of `pending`, `completed`, `expired`, or `cancelled`.',\n          enum: [            'cancelled',\n            'completed',\n            'expired',\n            'pending'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'counterparty_id',\n        'payment_types'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'Required. The updated status of the account collection flow. Can only be used to mark a flow as `cancelled`.',
        enum: ['cancelled'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'status'],
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.accountCollectionFlows.update(id, body)));
};

export default { metadata, tool, handler };
