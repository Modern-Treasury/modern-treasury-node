// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'bulk_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/bulk_requests',
  operationId: 'listBulkRequests',
};

export const tool: Tool = {
  name: 'list_bulk_requests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist bulk_requests\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/bulk_request'\n  },\n  $defs: {\n    bulk_request: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        action_type: {\n          type: 'string',\n          description: 'One of create, or update.',\n          enum: [            'create',\n            'update',\n            'delete'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        failed_result_count: {\n          type: 'integer',\n          description: 'Total number of failed bulk results so far for this request'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional data represented as key-value pairs. Both the key and value must be strings.'\n        },\n        object: {\n          type: 'string'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'One of payment_order, expected_payment, or ledger_transaction.',\n          enum: [            'payment_order',\n            'ledger_account',\n            'ledger_transaction',\n            'expected_payment',\n            'transaction',\n            'transaction_line_item',\n            'entity_link'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'One of pending, processing, or completed.',\n          enum: [            'pending',\n            'processing',\n            'completed'\n          ]\n        },\n        success_result_count: {\n          type: 'integer',\n          description: 'Total number of successful bulk results so far for this request'\n        },\n        total_resource_count: {\n          type: 'integer',\n          description: 'Total number of items in the `resources` array. Once a bulk request is completed, `success_result_count` + `failed_result_count` will be equal to `total_result_count`.'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'action_type',\n        'created_at',\n        'failed_result_count',\n        'live_mode',\n        'metadata',\n        'object',\n        'resource_type',\n        'status',\n        'success_result_count',\n        'total_resource_count',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      action_type: {
        type: 'string',
        description: 'One of create, or update.',
        enum: ['create', 'update', 'delete'],
      },
      after_cursor: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
      resource_type: {
        type: 'string',
        description: 'One of payment_order, expected_payment, or ledger_transaction.',
        enum: [
          'payment_order',
          'ledger_account',
          'ledger_transaction',
          'expected_payment',
          'transaction',
          'transaction_line_item',
          'entity_link',
        ],
      },
      status: {
        type: 'string',
        description: 'One of pending, processing, or completed.',
        enum: ['pending', 'processing', 'completed'],
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
  const response = await client.bulkRequests.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
