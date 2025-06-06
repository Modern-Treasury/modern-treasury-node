# Modern Treasury Node MCP Server

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export MODERN_TREASURY_API_KEY="My API Key"
export MODERN_TREASURY_ORGANIZATION_ID="my-organization-ID"
export MODERN_TREASURY_WEBHOOK_KEY="My Webhook Key"
npx -y modern-treasury-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "modern_treasury_api": {
      "command": "npx",
      "args": ["-y", "modern-treasury-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "MODERN_TREASURY_API_KEY": "My API Key",
        "MODERN_TREASURY_ORGANIZATION_ID": "my-organization-ID",
        "MODERN_TREASURY_WEBHOOK_KEY": "My Webhook Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "modern-treasury-mcp/server";

// import a specific tool
import pingClient from "modern-treasury-mcp/tools/top-level/ping-client";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [pingClient, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `$client`:

- `ping_client` (`read`): A test endpoint often used to confirm credentials and headers are being passed in correctly.

### Resource `connections`:

- `list_connections` (`read`): Get a list of all connections.

### Resource `counterparties`:

- `create_counterparties` (`write`): Create a new counterparty.
- `retrieve_counterparties` (`read`): Get details on a single counterparty.
- `update_counterparties` (`write`): Updates a given counterparty with new information.
- `list_counterparties` (`read`): Get a paginated list of all counterparties.
- `delete_counterparties` (`write`): Deletes a given counterparty.
- `collect_account_counterparties` (`write`): Send an email requesting account details.

### Resource `events`:

- `retrieve_events` (`read`): get event
- `list_events` (`read`): list events

### Resource `expected_payments`:

- `create_expected_payments` (`write`): create expected payment
- `retrieve_expected_payments` (`read`): get expected payment
- `update_expected_payments` (`write`): update expected payment
- `list_expected_payments` (`read`): list expected_payments
- `delete_expected_payments` (`write`): delete expected payment

### Resource `external_accounts`:

- `create_external_accounts` (`write`): create external account
- `retrieve_external_accounts` (`read`): show external account
- `update_external_accounts` (`write`): update external account
- `list_external_accounts` (`read`): list external accounts
- `delete_external_accounts` (`write`): delete external account
- `complete_verification_external_accounts` (`write`): complete verification of external account
- `verify_external_accounts` (`write`): verify external account

### Resource `incoming_payment_details`:

- `retrieve_incoming_payment_details` (`read`): Get an existing Incoming Payment Detail.
- `update_incoming_payment_details` (`write`): Update an existing Incoming Payment Detail.
- `list_incoming_payment_details` (`read`): Get a list of Incoming Payment Details.
- `create_async_incoming_payment_details` (`write`): Simulate Incoming Payment Detail

### Resource `invoices`:

- `create_invoices` (`write`): create invoice
- `retrieve_invoices` (`read`): get invoice
- `update_invoices` (`write`): update invoice
- `list_invoices` (`read`): list invoices
- `add_payment_order_invoices` (`write`): Add a payment order to an invoice.

### Resource `invoices.line_items`:

- `create_invoices_line_items` (`write`): create invoice_line_item
- `retrieve_invoices_line_items` (`read`): get invoice_line_item
- `update_invoices_line_items` (`write`): update invoice_line_item
- `list_invoices_line_items` (`read`): list invoice_line_items
- `delete_invoices_line_items` (`write`): delete invoice_line_item

### Resource `documents`:

- `create_documents` (`write`): Create a document.
- `retrieve_documents` (`read`): Get an existing document.
- `list_documents` (`read`): Get a list of documents.

### Resource `account_collection_flows`:

- `create_account_collection_flows` (`write`): create account_collection_flow
- `retrieve_account_collection_flows` (`read`): get account_collection_flow
- `update_account_collection_flows` (`write`): update account_collection_flow
- `list_account_collection_flows` (`read`): list account_collection_flows

### Resource `account_details`:

- `create_account_details` (`write`): Create an account detail for an external account.
- `retrieve_account_details` (`read`): Get a single account detail for a single internal or external account.
- `list_account_details` (`read`): Get a list of account details for a single internal or external account.
- `delete_account_details` (`write`): Delete a single account detail for an external account.

### Resource `routing_details`:

- `create_routing_details` (`write`): Create a routing detail for a single external account.
- `retrieve_routing_details` (`read`): Get a single routing detail for a single internal or external account.
- `list_routing_details` (`read`): Get a list of routing details for a single internal or external account.
- `delete_routing_details` (`write`): Delete a routing detail for a single external account.

### Resource `internal_accounts`:

- `create_internal_accounts` (`write`): create internal account
- `retrieve_internal_accounts` (`read`): get internal account
- `update_internal_accounts` (`write`): update internal account
- `list_internal_accounts` (`read`): list internal accounts

### Resource `internal_accounts.balance_reports`:

- `create_internal_accounts_balance_reports` (`write`): create balance reports
- `retrieve_internal_accounts_balance_reports` (`read`): Get a single balance report for a given internal account.
- `list_internal_accounts_balance_reports` (`read`): Get all balance reports for a given internal account.
- `delete_internal_accounts_balance_reports` (`write`): Deletes a given balance report.

### Resource `ledgers`:

- `create_ledgers` (`write`): Create a ledger.
- `retrieve_ledgers` (`read`): Get details on a single ledger.
- `update_ledgers` (`write`): Update the details of a ledger.
- `list_ledgers` (`read`): Get a list of ledgers.
- `delete_ledgers` (`write`): Delete a ledger.

### Resource `ledger_account_categories`:

- `create_ledger_account_categories` (`write`): Create a ledger account category.
- `retrieve_ledger_account_categories` (`read`): Get the details on a single ledger account category.
- `update_ledger_account_categories` (`write`): Update the details of a ledger account category.
- `list_ledger_account_categories` (`read`): Get a list of ledger account categories.
- `delete_ledger_account_categories` (`write`): Delete a ledger account category.
- `add_ledger_account_ledger_account_categories` (`write`): Add a ledger account to a ledger account category.
- `add_nested_category_ledger_account_categories` (`write`): Add a ledger account category to a ledger account category.
- `remove_ledger_account_ledger_account_categories` (`write`): Remove a ledger account from a ledger account category.
- `remove_nested_category_ledger_account_categories` (`write`): Delete a ledger account category from a ledger account category.

### Resource `ledger_accounts`:

- `create_ledger_accounts` (`write`): Create a ledger account.
- `retrieve_ledger_accounts` (`read`): Get details on a single ledger account.
- `update_ledger_accounts` (`write`): Update the details of a ledger account.
- `list_ledger_accounts` (`read`): Get a list of ledger accounts.
- `delete_ledger_accounts` (`write`): Delete a ledger account.

### Resource `ledger_account_balance_monitors`:

- `create_ledger_account_balance_monitors` (`write`): Create a ledger account balance monitor.
- `retrieve_ledger_account_balance_monitors` (`read`): Get details on a single ledger account balance monitor.
- `update_ledger_account_balance_monitors` (`write`): Update a ledger account balance monitor.
- `list_ledger_account_balance_monitors` (`read`): Get a list of ledger account balance monitors.
- `delete_ledger_account_balance_monitors` (`write`): Delete a ledger account balance monitor.

### Resource `ledger_account_statements`:

- `create_ledger_account_statements` (`write`): Create a ledger account statement.
- `retrieve_ledger_account_statements` (`read`): Get details on a single ledger account statement.

### Resource `ledger_entries`:

- `retrieve_ledger_entries` (`read`): Get details on a single ledger entry.
- `update_ledger_entries` (`write`): Update the details of a ledger entry.
- `list_ledger_entries` (`read`): Get a list of all ledger entries.

### Resource `ledger_transactions`:

- `create_ledger_transactions` (`write`): Create a ledger transaction.
- `retrieve_ledger_transactions` (`read`): Get details on a single ledger transaction.
- `update_ledger_transactions` (`write`): Update the details of a ledger transaction.
- `list_ledger_transactions` (`read`): Get a list of ledger transactions.
- `create_partial_post_ledger_transactions` (`write`): Create a ledger transaction that partially posts another ledger transaction.
- `create_reversal_ledger_transactions` (`write`): Create a ledger transaction reversal.

### Resource `ledger_transactions.versions`:

- `list_ledger_transactions_versions` (`read`): Get a list of ledger transaction versions.

### Resource `line_items`:

- `retrieve_line_items` (`read`): Get a single line item
- `update_line_items` (`write`): update line item
- `list_line_items` (`read`): Get a list of line items

### Resource `payment_flows`:

- `create_payment_flows` (`write`): create payment_flow
- `retrieve_payment_flows` (`read`): get payment_flow
- `update_payment_flows` (`write`): update payment_flow
- `list_payment_flows` (`read`): list payment_flows

### Resource `payment_orders`:

- `create_payment_orders` (`write`): Create a new Payment Order
- `retrieve_payment_orders` (`read`): Get details on a single payment order
- `update_payment_orders` (`write`): Update a payment order
- `list_payment_orders` (`read`): Get a list of all payment orders
- `create_async_payment_orders` (`write`): Create a new payment order asynchronously

### Resource `payment_orders.reversals`:

- `create_payment_orders_reversals` (`write`): Create a reversal for a payment order.
- `retrieve_payment_orders_reversals` (`read`): Get details on a single reversal of a payment order.
- `list_payment_orders_reversals` (`read`): Get a list of all reversals of a payment order.

### Resource `payment_references`:

- `retrieve_payment_references` (`read`): get payment_reference
- `list_payment_references` (`read`): list payment_references
- `retireve_payment_references` (`read`): get payment_reference

### Resource `returns`:

- `create_returns` (`write`): Create a return.
- `retrieve_returns` (`read`): Get a single return.
- `list_returns` (`read`): Get a list of returns.

### Resource `transactions`:

- `create_transactions` (`write`): create transaction
- `retrieve_transactions` (`read`): Get details on a single transaction.
- `update_transactions` (`write`): Update a single transaction.
- `list_transactions` (`read`): Get a list of all transactions.
- `delete_transactions` (`write`): delete transaction

### Resource `transactions.line_items`:

- `create_transactions_line_items` (`write`): create transaction line items
- `retrieve_transactions_line_items` (`read`): get transaction line item
- `list_transactions_line_items` (`read`): list transaction_line_items
- `delete_transactions_line_items` (`write`): delete transaction line item

### Resource `validations`:

- `validate_routing_number_validations` (`read`): Validates the routing number information supplied without creating a routing detail

### Resource `paper_items`:

- `retrieve_paper_items` (`read`): Get details on a single paper item.
- `list_paper_items` (`read`): Get a list of all paper items.

### Resource `virtual_accounts`:

- `create_virtual_accounts` (`write`): create virtual_account
- `retrieve_virtual_accounts` (`read`): get virtual_account
- `update_virtual_accounts` (`write`): update virtual_account
- `list_virtual_accounts` (`read`): Get a list of virtual accounts.
- `delete_virtual_accounts` (`write`): delete virtual_account

### Resource `bulk_requests`:

- `create_bulk_requests` (`write`): create bulk_request
- `retrieve_bulk_requests` (`read`): get bulk_request
- `list_bulk_requests` (`read`): list bulk_requests

### Resource `bulk_results`:

- `retrieve_bulk_results` (`read`): get bulk_result
- `list_bulk_results` (`read`): list bulk_results

### Resource `ledger_account_settlements`:

- `create_ledger_account_settlements` (`write`): Create a ledger account settlement.
- `retrieve_ledger_account_settlements` (`read`): Get details on a single ledger account settlement.
- `update_ledger_account_settlements` (`write`): Update the details of a ledger account settlement.
- `list_ledger_account_settlements` (`read`): Get a list of ledger account settlements.

### Resource `ledger_account_settlements.account_entries`:

- `update_ledger_account_settlements_account_entries` (`write`): Add ledger entries to a draft ledger account settlement.
- `delete_ledger_account_settlements_account_entries` (`write`): Remove ledger entries from a draft ledger account settlement.

### Resource `foreign_exchange_quotes`:

- `create_foreign_exchange_quotes` (`write`): create foreign_exchange_quote
- `retrieve_foreign_exchange_quotes` (`read`): get foreign_exchange_quote
- `list_foreign_exchange_quotes` (`read`): list foreign_exchange_quotes

### Resource `connection_legal_entities`:

- `create_connection_legal_entities` (`write`): Create a connection legal entity.
- `retrieve_connection_legal_entities` (`read`): Get details on a single connection legal entity.
- `update_connection_legal_entities` (`write`): Update a connection legal entity.
- `list_connection_legal_entities` (`read`): Get a list of all connection legal entities.

### Resource `legal_entities`:

- `create_legal_entities` (`write`): create legal_entity
- `retrieve_legal_entities` (`read`): Get details on a single legal entity.
- `update_legal_entities` (`write`): Update a legal entity.
- `list_legal_entities` (`read`): Get a list of all legal entities.

### Resource `legal_entity_associations`:

- `create_legal_entity_associations` (`write`): create legal_entity_association

### Resource `payment_actions`:

- `create_payment_actions` (`write`): Create a payment action.
- `retrieve_payment_actions` (`read`): Get details on a single payment action.
- `update_payment_actions` (`write`): Update a single payment action.
- `list_payment_actions` (`read`): Get a list of all payment actions.
