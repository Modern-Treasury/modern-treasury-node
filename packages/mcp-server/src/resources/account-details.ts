// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import ModernTreasury from 'modern-treasury';

registerApiMethod({
  name: 'create_account_details',
  description: 'Create an account detail for an external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts'],
      },
      account_id: {
        type: 'string',
      },
      account_number: {
        type: 'string',
        description: 'The account number for the bank account.',
      },
      account_number_type: {
        type: 'string',
        description:
          'One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank account number is in a generic format.',
        enum: [
          'au_number',
          'clabe',
          'hk_number',
          'iban',
          'id_number',
          'nz_number',
          'other',
          'pan',
          'sg_number',
          'wallet_address',
        ],
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { accounts_type, account_id, ...body } = args;
    return client.accountDetails.create(accounts_type, account_id, body);
  },
});

registerApiMethod({
  name: 'retrieve_account_details',
  description: 'Get a single account detail for a single internal or external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts', 'internal_accounts'],
      },
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { accounts_type, account_id, id } = args;
    return client.accountDetails.retrieve(accounts_type, account_id, id);
  },
});

registerApiMethod({
  name: 'list_account_details',
  description: 'Get a list of account details for a single internal or external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts', 'internal_accounts'],
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
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { accounts_type, account_id, ...body } = args;
    return client.accountDetails.list(accounts_type, account_id, body);
  },
});

registerApiMethod({
  name: 'delete_account_details',
  description: 'Delete a single account detail for an external account.',
  inputSchema: {
    type: 'object',
    properties: {
      accounts_type: {
        type: 'string',
        enum: ['external_accounts'],
      },
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
  handler: (client: ModernTreasury, args: any) => {
    const { accounts_type, account_id, id } = args;
    return client.accountDetails.del(accounts_type, account_id, id);
  },
});
