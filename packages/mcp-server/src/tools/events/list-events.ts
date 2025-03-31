// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const tool: Tool = {
  name: 'list_events',
  description: 'list events',
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
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.events.list(body);
};

export default { tool, handler };
