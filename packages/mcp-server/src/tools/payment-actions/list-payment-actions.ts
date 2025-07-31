// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_actions',
};

export const tool: Tool = {
  name: 'list_payment_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of all payment actions.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      actionable_id: {\n        type: 'string',\n        description: 'The ID of the associated actionable object.'\n      },\n      actionable_type: {\n        type: 'string',\n        description: 'The type of the associated actionable object. One of `payment_order`, `expected_payment`.'\n      },\n      created_at: {\n        type: 'string',\n        format: 'date-time'\n      },\n      details: {\n        type: 'object',\n        description: 'The specifc details of the payment action based on type.'\n      },\n      internal_account_id: {\n        type: 'string',\n        description: 'The ID of the internal account associated with the payment action.'\n      },\n      live_mode: {\n        type: 'boolean',\n        description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n      },\n      object: {\n        type: 'string'\n      },\n      status: {\n        type: 'string',\n        description: 'The current status of the payment action. One of `pending`, `processing`, `sent`, `cancelled`, or `failed`.'\n      },\n      type: {\n        type: 'string',\n        description: 'The type of the payment action. Determines the action to be taken.'\n      },\n      updated_at: {\n        type: 'string',\n        format: 'date-time'\n      }\n    },\n    required: [      'id',\n      'actionable_id',\n      'actionable_type',\n      'created_at',\n      'details',\n      'internal_account_id',\n      'live_mode',\n      'object',\n      'status',\n      'type',\n      'updated_at'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      actionable_id: {
        type: 'string',
        description: 'The ID of the associated actionable object.',
      },
      actionable_type: {
        type: 'string',
        description:
          'The type of the associated actionable object. One of `payment_order`, `expected_payment`.',
      },
      after_cursor: {
        type: 'string',
      },
      created_at: {
        type: 'object',
        description:
          'Filter by `created_at` using comparison operators like `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For example, `created_at[gte]=2024-01-01T00:00:00Z`',
        properties: {
          eq: {
            type: 'string',
            format: 'date-time',
          },
          gt: {
            type: 'string',
            format: 'date-time',
          },
          gte: {
            type: 'string',
            format: 'date-time',
          },
          lt: {
            type: 'string',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
      internal_account_id: {
        type: 'string',
        description: 'The ID of one of your internal accounts.',
      },
      metadata: {
        type: 'object',
        description:
          'For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters.',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        description: 'Filter by payment actions of a specific status.',
        enum: ['pending', 'processable', 'processing', 'sent', 'failed', 'cancelled'],
      },
      type: {
        type: 'string',
        description: 'The type of payment action.',
        enum: ['evolve_non_processing_transaction', 'stop', 'issue'],
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
  const response = await client.paymentActions.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
