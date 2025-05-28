// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Send an email requesting account details.',
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
    },
    $defs: {
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
    },
  },
};

export const handler = (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.counterparties.collectAccount(id, body);
};

export default { metadata, tool, handler };
