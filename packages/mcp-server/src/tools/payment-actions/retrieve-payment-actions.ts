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
  httpPath: '/api/payment_actions/{id}',
};

export const tool: Tool = {
  name: 'retrieve_payment_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details on a single payment action.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    actionable_id: {\n      type: 'string',\n      description: 'The ID of the associated actionable object.'\n    },\n    actionable_type: {\n      type: 'string',\n      description: 'The type of the associated actionable object. One of `payment_order`, `expected_payment`.'\n    },\n    created_at: {\n      type: 'string',\n      format: 'date-time'\n    },\n    details: {\n      type: 'object',\n      description: 'The specifc details of the payment action based on type.'\n    },\n    internal_account_id: {\n      type: 'string',\n      description: 'The ID of the internal account associated with the payment action.'\n    },\n    live_mode: {\n      type: 'boolean',\n      description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n    },\n    object: {\n      type: 'string'\n    },\n    status: {\n      type: 'string',\n      description: 'The current status of the payment action. One of `pending`, `processing`, `sent`, `cancelled`, or `failed`.'\n    },\n    type: {\n      type: 'string',\n      description: 'The type of the payment action. Determines the action to be taken.'\n    },\n    updated_at: {\n      type: 'string',\n      format: 'date-time'\n    }\n  },\n  required: [    'id',\n    'actionable_id',\n    'actionable_type',\n    'created_at',\n    'details',\n    'internal_account_id',\n    'live_mode',\n    'object',\n    'status',\n    'type',\n    'updated_at'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.paymentActions.retrieve(id)));
};

export default { metadata, tool, handler };
