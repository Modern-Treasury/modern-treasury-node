// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/ping',
  operationId: 'pingAPI',
};

export const tool: Tool = {
  name: 'ping_client',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nA test endpoint often used to confirm credentials and headers are being passed in correctly.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ping_response',\n  $defs: {\n    ping_response: {\n      type: 'object',\n      properties: {\n        ping: {\n          type: 'string'\n        }\n      },\n      required: [        'ping'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.ping()));
};

export default { metadata, tool, handler };
