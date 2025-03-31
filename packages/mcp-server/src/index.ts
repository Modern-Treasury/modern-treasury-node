// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { tools, handlers } from './tools';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import './resources/shared';
import './resources/top-level';
import './resources/connections';
import './resources/counterparties';
import './resources/events';
import './resources/expected-payments';
import './resources/external-accounts';
import './resources/incoming-payment-details';
import './resources/invoices/invoices';
import './resources/invoices/line-items';
import './resources/documents';
import './resources/account-collection-flows';
import './resources/account-details';
import './resources/routing-details';
import './resources/internal-accounts/internal-accounts';
import './resources/internal-accounts/balance-reports';
import './resources/ledgers';
import './resources/ledgerable-events';
import './resources/ledger-account-categories';
import './resources/ledger-accounts';
import './resources/ledger-account-balance-monitors';
import './resources/ledger-account-statements';
import './resources/ledger-entries';
import './resources/ledger-event-handlers';
import './resources/ledger-transactions/ledger-transactions';
import './resources/ledger-transactions/versions';
import './resources/line-items';
import './resources/payment-flows';
import './resources/payment-orders/payment-orders';
import './resources/payment-orders/reversals';
import './resources/payment-references';
import './resources/returns';
import './resources/transactions/transactions';
import './resources/transactions/line-items';
import './resources/validations';
import './resources/paper-items';
import './resources/virtual-accounts';
import './resources/bulk-requests';
import './resources/bulk-results';
import './resources/ledger-account-settlements/ledger-account-settlements';
import './resources/ledger-account-settlements/account-entries';
import './resources/foreign-exchange-quotes';
import './resources/connection-legal-entities';
import './resources/legal-entities';
import './resources/legal-entity-associations';
import ModernTreasury from 'modern-treasury';
export { tools, handlers } from './tools';

// Instantiate client
const client = new ModernTreasury();

// Create server instance
export const server = new Server(
  {
    name: 'modern_treasury_api',
    version: '2.35.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

export function initServer() {
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools,
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    const handler = handlers[name];
    if (!handler) {
      throw new Error(`Unknown tool: ${name}`);
    }

    const result = await handler(client, args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  });
}

async function main() {
  initServer();
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
