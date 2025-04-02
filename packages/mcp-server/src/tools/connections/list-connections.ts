// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_connections',
  description: 'Get a list of all connections.',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      entity: {
        type: 'string',
        description: 'A string code representing the vendor (i.e. bank).',
      },
      per_page: {
        type: 'integer',
      },
      vendor_customer_id: {
        type: 'string',
        description: 'An identifier assigned by the vendor to your organization.',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: any) => {
  const { ...body } = args;
  return client.connections.list(body);
};

export default { metadata, tool, handler };
