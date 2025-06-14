// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_references',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_references',
  operationId: 'listPaymentReferences',
};

export const tool: Tool = {
  name: 'list_payment_references',
  description: 'list payment_references',
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      reference_number: {
        type: 'string',
        description: 'The actual reference number assigned by the bank.',
      },
      referenceable_id: {
        type: 'string',
        description:
          'The id of the referenceable to search for. Must be accompanied by the referenceable_type or will return an error.',
      },
      referenceable_type: {
        type: 'string',
        description:
          'One of the referenceable types. This must be accompanied by the id of the referenceable or will return an error.',
        enum: ['payment_order', 'return', 'reversal'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.paymentReferences.list(body));
};

export default { metadata, tool, handler };
