// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'account_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/{accounts_type}/{account_id}/account_details',
  operationId: 'listAccountDetails',
};

export const tool: Tool = {
  name: 'list_account_details',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of account details for a single internal or external account.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/account_detail'\n  },\n  $defs: {\n    account_detail: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        account_number_safe: {\n          type: 'string',\n          description: 'The last 4 digits of the account_number.'\n        },\n        account_number_type: {\n          type: 'string',\n          description: 'One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank account number is in a generic format.',\n          enum: [            'au_number',\n            'base_address',\n            'clabe',\n            'ethereum_address',\n            'hk_number',\n            'iban',\n            'id_number',\n            'nz_number',\n            'other',\n            'pan',\n            'polygon_address',\n            'sg_number',\n            'solana_address',\n            'wallet_address'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        account_number: {\n          type: 'string',\n          description: 'The account number for the bank account.'\n        }\n      },\n      required: [        'id',\n        'account_number_safe',\n        'account_number_type',\n        'created_at',\n        'discarded_at',\n        'live_mode',\n        'object',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        $ref: '#/$defs/accounts_type',
      },
      account_id: {
        type: 'string',
      },
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['accounts_type', 'account_id'],
    $defs: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts', 'internal_accounts'],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { accounts_type, account_id, ...body } = args as any;
  const response = await client.accountDetails.list(accounts_type, account_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
