// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'counterparties',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/counterparties/{id}/collect_account',
  operationId: 'collectAccountDetails',
};

export const tool: Tool = {
  name: 'collect_account_counterparties',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend an email requesting account details.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/counterparty_collect_account_response',\n  $defs: {\n    counterparty_collect_account_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The id of the existing counterparty.'\n        },\n        form_link: {\n          type: 'string',\n          description: 'This is the link to the secure Modern Treasury form. By default, Modern Treasury will send an email to your counterparty that includes a link to this form. However, if `send_email` is passed as `false` in the body then Modern Treasury will not send the email and you can send it to the counterparty directly.'\n        },\n        is_resend: {\n          type: 'boolean',\n          description: 'This field will be `true` if an email requesting account details has already been sent to this counterparty.'\n        }\n      },\n      required: [        'id',\n        'form_link',\n        'is_resend'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      direction: {
        $ref: '#/$defs/transaction_direction',
      },
      custom_redirect: {
        type: 'string',
        description:
          'The URL you want your customer to visit upon filling out the form. By default, they will be sent to a Modern Treasury landing page. This must be a valid HTTPS URL if set.',
      },
      fields: {
        type: 'array',
        description:
          'The list of fields you want on the form. This field is optional and if it is not set, will default to [\\"nameOnAccount\\", \\"accountType\\", \\"accountNumber\\", \\"routingNumber\\", \\"address\\"]. The full list of options is [\\"name\\", \\"nameOnAccount\\", \\"taxpayerIdentifier\\", \\"accountType\\", \\"accountNumber\\", \\"routingNumber\\", \\"address\\", \\"ibanNumber\\", \\"swiftCode\\"].',
        items: {
          type: 'string',
          enum: [
            'name',
            'nameOnAccount',
            'taxpayerIdentifier',
            'accountType',
            'accountNumber',
            'ibanNumber',
            'clabeNumber',
            'walletAddress',
            'panNumber',
            'routingNumber',
            'abaWireRoutingNumber',
            'swiftCode',
            'auBsb',
            'caCpa',
            'cnaps',
            'gbSortCode',
            'inIfsc',
            'myBranchCode',
            'brCodigo',
            'routingNumberType',
            'address',
            'jpZenginCode',
            'seBankgiroClearingCode',
            'nzNationalClearingCode',
            'hkInterbankClearingCode',
            'huInterbankClearingCode',
            'dkInterbankClearingCode',
            'idSknbiCode',
            'zaNationalClearingCode',
          ],
        },
      },
      send_email: {
        type: 'boolean',
        description:
          'By default, Modern Treasury will send an email to your counterparty that includes a link to the form they must fill out. However, if you would like to send the counterparty the link, you can set this parameter to `false`. The JSON body will include the link to the secure Modern Treasury form.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'direction'],
    $defs: {
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.counterparties.collectAccount(id, body)));
};

export default { metadata, tool, handler };
