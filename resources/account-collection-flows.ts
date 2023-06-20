// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class AccountCollectionFlows extends APIResource {
  /**
   * create account_collection_flow
   */
  create(
    params: AccountCollectionFlowCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountConnectionFlow>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/account_collection_flows', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get account_collection_flow
   */
  retrieve(
    id: string,
    query?: AccountCollectionFlowRetrieveParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountConnectionFlow>>;
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<AccountConnectionFlow>>;
  retrieve(
    id: string,
    query: AccountCollectionFlowRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountConnectionFlow>> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    const { 'Idempotency-Key': idempotencyKey } = query;
    return this.get(`/api/account_collection_flows/${id}`, {
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * update account_collection_flow
   */
  update(
    id: string,
    params: AccountCollectionFlowUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountConnectionFlow>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.patch(`/api/account_collection_flows/${id}`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * list account_collection_flows
   */
  list(
    query?: AccountCollectionFlowListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountConnectionFlowsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountConnectionFlowsPage>;
  list(
    query: AccountCollectionFlowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountConnectionFlowsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/account_collection_flows', AccountConnectionFlowsPage, {
      query,
      ...options,
    });
  }
}

export class AccountConnectionFlowsPage extends Page<AccountConnectionFlow> {}

export interface AccountConnectionFlow {
  /**
   * The ID of a counterparty. An external account created with this flow will be
   * associated with this counterparty.
   */
  counterparty_id: string;

  payment_types: Array<'ach' | 'wire'>;

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

  id?: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  object?: string;

  /**
   * The current status of the account collection flow. One of `pending`,
   * `completed`, `expired`, or `cancelled`.
   */
  status?: 'cancelled' | 'completed' | 'expired' | 'pending';

  updated_at?: string;
}

export interface AccountCollectionFlowCreateParams {
  /**
   * Body param: Required.
   */
  counterparty_id: string;

  /**
   * Body param:
   */
  payment_types: Array<string>;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface AccountCollectionFlowRetrieveParams {
  /**
   * This key should be something unique, preferably something like an UUID.
   */
  'Idempotency-Key'?: string;
}

export interface AccountCollectionFlowUpdateParams {
  /**
   * Body param: Required. The updated status of the account collection flow. Can
   * only be used to mark a flow as `cancelled`.
   */
  status: 'cancelled';

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface AccountCollectionFlowListParams extends PageParams {
  client_token?: string;

  counterparty_id?: string;

  external_account_id?: string;

  status?: string;
}

export namespace AccountCollectionFlows {
  export import AccountConnectionFlow = API.AccountConnectionFlow;
  export import AccountConnectionFlowsPage = API.AccountConnectionFlowsPage;
  export import AccountCollectionFlowCreateParams = API.AccountCollectionFlowCreateParams;
  export import AccountCollectionFlowRetrieveParams = API.AccountCollectionFlowRetrieveParams;
  export import AccountCollectionFlowUpdateParams = API.AccountCollectionFlowUpdateParams;
  export import AccountCollectionFlowListParams = API.AccountCollectionFlowListParams;
}
