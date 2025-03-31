# Modern Treasury Node MCP Server

## Installation

### Via Claude Desktop

See [the user guide](https://modelcontextprotocol.io/quickstart/user) for setup.

Once it's set up, find your `claude_desktop_config.json` file:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following value to your `mcpServers` section. Make sure to provide any necessary environment variables (like API keys) as well.

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
