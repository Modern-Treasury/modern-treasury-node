// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as AccountCollectionFlowsAPI from 'modern-treasury/resources/account-collection-flows';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class AccountCollectionFlows extends APIResource {
  /**
   * create account_collection_flow
   */
  create(
    params: AccountCollectionFlowCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountCollectionFlow> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post('/api/account_collection_flows', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get account_collection_flow
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<AccountCollectionFlow> {
    return this.get(`/api/account_collection_flows/${id}`, options);
  }

  /**
   * update account_collection_flow
   */
  update(
    id: string,
    params: AccountCollectionFlowUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountCollectionFlow> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.patch(`/api/account_collection_flows/${id}`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * list account_collection_flows
   */
  list(
    query?: AccountCollectionFlowListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountCollectionFlowsPage, AccountCollectionFlow>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountCollectionFlowsPage, AccountCollectionFlow>;
  list(
    query: AccountCollectionFlowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountCollectionFlowsPage, AccountCollectionFlow> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/account_collection_flows', AccountCollectionFlowsPage, {
      query,
      ...options,
    });
  }
}

export class AccountCollectionFlowsPage extends Page<AccountCollectionFlow> {}

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

export namespace AccountCollectionFlows {
  export import AccountCollectionFlow = AccountCollectionFlowsAPI.AccountCollectionFlow;
  export import AccountCollectionFlowsPage = AccountCollectionFlowsAPI.AccountCollectionFlowsPage;
  export import AccountCollectionFlowCreateParams = AccountCollectionFlowsAPI.AccountCollectionFlowCreateParams;
  export import AccountCollectionFlowUpdateParams = AccountCollectionFlowsAPI.AccountCollectionFlowUpdateParams;
  export import AccountCollectionFlowListParams = AccountCollectionFlowsAPI.AccountCollectionFlowListParams;
}
