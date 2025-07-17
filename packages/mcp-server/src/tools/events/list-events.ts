// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/events',
  operationId: 'listEvents',
};

export const tool: Tool = {
  name: 'list_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist events\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/event'\n  },\n  $defs: {\n    event: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        data: {\n          type: 'object',\n          description: 'The body of the event.'\n        },\n        entity_id: {\n          type: 'string',\n          description: 'The ID of the entity for the event.'\n        },\n        event_name: {\n          type: 'string',\n          description: 'The name of the event.'\n        },\n        event_time: {\n          type: 'string',\n          description: 'The time of the event.',\n          format: 'date-time'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        resource: {\n          type: 'string',\n          description: 'The type of resource for the event.'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'data',\n        'entity_id',\n        'event_name',\n        'event_time',\n        'live_mode',\n        'object',\n        'resource',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      entity_id: {
        type: 'string',
      },
      event_name: {
        type: 'string',
      },
      event_time_end: {
        type: 'string',
        description: 'An inclusive upper bound for when the event occurred',
        format: 'date-time',
      },
      event_time_start: {
        type: 'string',
        description: 'An inclusive lower bound for when the event occurred',
        format: 'date-time',
      },
      per_page: {
        type: 'integer',
      },
      resource: {
        type: 'string',
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
  const response = await client.events.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
