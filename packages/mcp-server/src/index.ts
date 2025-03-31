// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { server, init } from './server';

async function main() {
  init({ server });
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });
}
