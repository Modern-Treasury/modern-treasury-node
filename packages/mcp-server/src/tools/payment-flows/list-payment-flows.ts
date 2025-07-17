// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_flows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_flows',
  operationId: 'listPaymentFlows',
};

export const tool: Tool = {
  name: 'list_payment_flows',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist payment_flows\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/payment_flow'\n  },\n  $defs: {\n    payment_flow: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer',\n          description: 'Value in specified currency\\'s smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits.'\n        },\n        client_token: {\n          type: 'string',\n          description: 'The client token of the payment flow. This token can be used to embed a payment workflow in your client-side application.'\n        },\n        counterparty_id: {\n          type: 'string',\n          description: 'The ID of a counterparty associated with the payment. As part of the payment workflow an external account will be associated with this counterparty.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency of the payment.'\n        },\n        direction: {\n          type: 'string',\n          description: 'Describes the direction money is flowing in the transaction. Can only be `debit`. A `debit` pulls money from someone else\\'s account to your own.',\n          enum: [            'credit',\n            'debit'\n          ]\n        },\n        due_date: {\n          type: 'string',\n          description: 'The due date for the flow. Can only be passed in when `effective_date_selection_enabled` is `true`.',\n          format: 'date'\n        },\n        effective_date_selection_enabled: {\n          type: 'boolean',\n          description: 'When `true`, your end-user can schedule the payment `effective_date` while completing the pre-built UI.'\n        },\n        existing_external_accounts_filter: {\n          type: 'string',\n          description: 'When `verified` and `external_account_collection` is `enabled`, filters the list of external accounts your end-user can select to those with a `verification_status` of `verified`.',\n          enum: [            'verified'\n          ]\n        },\n        external_account_collection: {\n          type: 'string',\n          description: 'When `enabled`, your end-user can select from an existing external account when completing the flow. When `disabled`, your end-user must add new payment details when completing the flow.',\n          enum: [            'disabled',\n            'enabled'\n          ]\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        originating_account_id: {\n          type: 'string',\n          description: 'The ID of one of your organization\\'s internal accounts.'\n        },\n        payment_order_id: {\n          type: 'string',\n          description: 'If present, the ID of the payment order created using this flow.'\n        },\n        receiving_account_id: {\n          type: 'string',\n          description: 'If present, the ID of the external account created using this flow.'\n        },\n        selected_effective_date: {\n          type: 'string',\n          description: 'This field is set after your end-user selects a payment date while completing the pre-built UI. This field is always `null` unless `effective_date_selection_enabled` is `true`.',\n          format: 'date'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the payment flow. One of `pending`, `completed`, `expired`, or `cancelled`.',\n          enum: [            'cancelled',\n            'completed',\n            'expired',\n            'pending'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      client_token: {
        type: 'string',
      },
      counterparty_id: {
        type: 'string',
      },
      originating_account_id: {
        type: 'string',
      },
      payment_order_id: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      receiving_account_id: {
        type: 'string',
      },
      status: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.paymentFlows.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
