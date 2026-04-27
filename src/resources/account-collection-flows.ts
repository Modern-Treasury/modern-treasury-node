// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountCollectionFlows extends APIResource {
  /**
   * create account_collection_flow
   */
  create(
    body: AccountCollectionFlowCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountCollectionFlow> {
    return this._client.post('/api/account_collection_flows', { body, ...options });
  }

  /**
   * get account_collection_flow
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountCollectionFlow> {
    return this._client.get(path`/api/account_collection_flows/${id}`, options);
  }

  /**
   * update account_collection_flow
   */
  update(
    id: string,
    body: AccountCollectionFlowUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountCollectionFlow> {
    return this._client.patch(path`/api/account_collection_flows/${id}`, { body, ...options });
  }

  /**
   * list account_collection_flows
   */
  list(
    query: AccountCollectionFlowListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountCollectionFlowsPage, AccountCollectionFlow> {
    return this._client.getAPIList('/api/account_collection_flows', Page<AccountCollectionFlow>, {
      query,
      ...options,
    });
  }
}

export type AccountCollectionFlowsPage = Page<AccountCollectionFlow>;

export interface AccountCollectionFlow {
  /**
   * The ID of a counterparty. An external account created with this flow will be
   * associated with this counterparty.
   */
  counterparty_id: string;

  payment_types: Array<'ach' | 'wire'>;

  id?: string;

  /**
   * The client token of the account collection flow. This token can be used to embed
   * account collection in your client-side application.
   */
  client_token?: string;

  created_at?: string;

  /**
   * If present, the ID of the external account created using this flow.
   */
  external_account_id?: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  object?: string;

  receiving_countries?: Array<
    | 'USA'
    | 'AUS'
    | 'BEL'
    | 'CAN'
    | 'CHL'
    | 'CHN'
    | 'COL'
    | 'FRA'
    | 'DEU'
    | 'HKG'
    | 'IND'
    | 'IRL'
    | 'ITA'
    | 'MEX'
    | 'NLD'
    | 'PER'
    | 'ESP'
    | 'GBR'
  >;

  /**
   * The current status of the account collection flow. One of `pending`,
   * `completed`, `expired`, or `cancelled`.
   */
  status?: 'cancelled' | 'completed' | 'expired' | 'pending';

  updated_at?: string;
}

export interface AccountCollectionFlowCreateParams {
  /**
   * Required.
   */
  counterparty_id: string;

  payment_types: Array<string>;

  receiving_countries?: Array<
    | 'USA'
    | 'AUS'
    | 'BEL'
    | 'CAN'
    | 'CHL'
    | 'CHN'
    | 'COL'
    | 'FRA'
    | 'DEU'
    | 'HKG'
    | 'IND'
    | 'IRL'
    | 'ITA'
    | 'MEX'
    | 'NLD'
    | 'PER'
    | 'ESP'
    | 'GBR'
  >;
}

export interface AccountCollectionFlowUpdateParams {
  /**
   * Required. The updated status of the account collection flow. Can only be used to
   * mark a flow as `cancelled`.
   */
  status: 'cancelled';
}

export interface AccountCollectionFlowListParams extends PageParams {
  client_token?: string;

  counterparty_id?: string;

  external_account_id?: string;

  status?: string;
}

export declare namespace AccountCollectionFlows {
  export {
    type AccountCollectionFlow as AccountCollectionFlow,
    type AccountCollectionFlowsPage as AccountCollectionFlowsPage,
    type AccountCollectionFlowCreateParams as AccountCollectionFlowCreateParams,
    type AccountCollectionFlowUpdateParams as AccountCollectionFlowUpdateParams,
    type AccountCollectionFlowListParams as AccountCollectionFlowListParams,
  };
}
