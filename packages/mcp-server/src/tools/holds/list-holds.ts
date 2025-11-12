// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'holds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/holds',
  operationId: 'listHolds',
};

export const tool: Tool = {
  name: 'list_holds',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of holds.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/hold_list_response'\n  },\n  $defs: {\n    hold_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        object: {\n          type: 'string',\n          description: 'The type of object',\n          enum: [            'hold'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the hold',\n          enum: [            'active',\n            'resolved'\n          ]\n        },\n        target_id: {\n          type: 'string',\n          description: 'The ID of the target being held'\n        },\n        target_type: {\n          type: 'string',\n          description: 'The type of target being held',\n          enum: [            'payment_order'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional metadata for the hold',\n          additionalProperties: true\n        },\n        reason: {\n          type: 'string',\n          description: 'The reason for the hold'\n        },\n        resolution: {\n          type: 'string',\n          description: 'The resolution of the hold'\n        },\n        resolved_at: {\n          type: 'string',\n          description: 'When the hold was resolved',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'object',\n        'status',\n        'target_id',\n        'target_type',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
        additionalProperties: true,
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        description: 'Translation missing: en.openapi.descriptions.payment_order.query_params.status',
        enum: ['active', 'resolved'],
      },
      target_id: {
        type: 'string',
        description: 'Translation missing: en.openapi.descriptions.payment_order.query_params.target_id',
      },
      target_type: {
        type: 'string',
        description: 'Translation missing: en.openapi.descriptions.payment_order.query_params.target_type',
        enum: ['payment_order'],
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.holds.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
