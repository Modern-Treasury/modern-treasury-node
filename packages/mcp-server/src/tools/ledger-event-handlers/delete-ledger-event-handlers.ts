// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'ledger_event_handlers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_ledger_event_handlers',
  description: 'Archive a ledger event handler.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.ledgerEventHandlers.del(id);
};

export default { metadata, tool, handler };
