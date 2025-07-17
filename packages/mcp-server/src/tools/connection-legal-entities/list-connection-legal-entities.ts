// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'connection_legal_entities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/connection_legal_entities',
  operationId: 'listConnectionLegalEntities',
};

export const tool: Tool = {
  name: 'list_connection_legal_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of all connection legal entities.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/connection_legal_entity'\n  },\n  $defs: {\n    connection_legal_entity: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'The ID of the connection.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        legal_entity_id: {\n          type: 'string',\n          description: 'The ID of the legal entity.'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the connection legal entity.',\n          enum: [            'completed',\n            'denied',\n            'failed',\n            'processing'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        vendor_id: {\n          type: 'string',\n          description: 'The ID of the legal entity at the vendor.'\n        }\n      },\n      required: [        'id',\n        'connection_id',\n        'created_at',\n        'discarded_at',\n        'legal_entity_id',\n        'live_mode',\n        'object',\n        'status',\n        'updated_at',\n        'vendor_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      connection_id: {
        type: 'string',
      },
      legal_entity_id: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        enum: ['completed', 'denied', 'failed', 'processing'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.connectionLegalEntities.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
