# Modern Treasury TypeScript MCP Server

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
      "args": ["-y", "modern-treasury-mcp"],
      "env": {
        "MODERN_TREASURY_API_KEY": "My API Key",
        "MODERN_TREASURY_ORGANIZATION_ID": "my-organization-ID",
        "MODERN_TREASURY_WEBHOOK_KEY": "My Webhook Key"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=modern-treasury-mcp&config=eyJuYW1lIjoibW9kZXJuLXRyZWFzdXJ5LW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL21vZGVybi10cmVhc3VyeS5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LW1vZGVybi10cmVhc3VyeS1vcmdhbml6YXRpb24taWQiOiJteS1vcmdhbml6YXRpb24tSUQiLCJ4LW1vZGVybi10cmVhc3VyeS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22modern-treasury-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmodern-treasury.stlmcp.com%22%2C%22headers%22%3A%7B%22x-modern-treasury-organization-id%22%3A%22my-organization-ID%22%2C%22x-modern-treasury-api-key%22%3A%22My%20API%20Key%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add modern_treasury_mcp_api --header "x-modern-treasury-organization-id: my-organization-ID" --header "x-modern-treasury-api-key: My API Key" --transport http https://modern-treasury.stlmcp.com
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Basic scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------------------------- | ------------------------ | --------------- |
| `x-modern-treasury-organization-id` | `organizationID` | basic_auth |
| `x-modern-treasury-api-key` | `apiKey` | basic_auth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "modern_treasury_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Basic <auth value>"
      }
    }
  }
}
```
