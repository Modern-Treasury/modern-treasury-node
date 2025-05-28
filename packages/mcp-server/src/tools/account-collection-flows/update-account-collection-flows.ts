// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'account_collection_flows',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/account_collection_flows/{id}',
  operationId: 'updateAccountCollectionFlow',
};

export const tool: Tool = {
  name: 'update_account_collection_flows',
  description: 'update account_collection_flow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'Required. The updated status of the account collection flow. Can only be used to mark a flow as `cancelled`.',
        enum: ['cancelled'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.accountCollectionFlows.update(id, body);
};

export default { metadata, tool, handler };
