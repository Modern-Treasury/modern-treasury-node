// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'ping_$client',
  description: 'A test endpoint often used to confirm credentials and headers are being passed in correctly.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
  handler: (client: ModernTreasury, args: any) => {
    const {} = args;
    return client.ping();
  },
});
