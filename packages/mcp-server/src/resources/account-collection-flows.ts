// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_account_collection_flows',
  description: 'create account_collection_flow',
  inputSchema: {
    type: 'object',
    properties: {
      counterparty_id: {
        type: 'string',
        description: 'Required.',
      },
      payment_types: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Required. At least one of `ach`, `wire` or `check`.',
        },
      },
      receiving_countries: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Optional. Array of 3-digit ISO country codes.',
          enum: [
            'USA',
            'AUS',
            'BEL',
            'CAN',
            'CHL',
            'CHN',
            'COL',
            'FRA',
            'DEU',
            'HKG',
            'IND',
            'IRL',
            'ITA',
            'MEX',
            'NLD',
            'PER',
            'ESP',
            'GBR',
          ],
        },
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.accountCollectionFlows.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_account_collection_flows',
  description: 'get account_collection_flow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id } = args;
    return client.accountCollectionFlows.retrieve(id);
  },
});

registerApiMethod({
  name: 'update_account_collection_flows',
  description: 'update account_collection_flow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'Required. The updated status of the account collection flow. Can only be used to mark a flow as `cancelled`.',
        enum: ['cancelled'],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { id, ...body } = args;
    return client.accountCollectionFlows.update(id, body);
  },
});

registerApiMethod({
  name: 'list_account_collection_flows',
  description: 'list account_collection_flows',
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
      external_account_id: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { ...body } = args;
    return client.accountCollectionFlows.list(body);
  },
});
