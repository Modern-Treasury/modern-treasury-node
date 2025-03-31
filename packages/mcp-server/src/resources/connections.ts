// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
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
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.connections.list(body);
  },
});
