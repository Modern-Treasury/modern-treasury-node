// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class AccountCollectionFlows extends APIResource {
  /**
   * create account_collection_flow
   */
  create(
    body: AccountCollectionFlowCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AcccountConnectionFlow>> {
    return this.post('/api/account_collection_flows', { body, ...options });
  }

  /**
   * get account_collection_flow
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<AcccountConnectionFlow>> {
    return this.get(`/api/account_collection_flows/${id}`, options);
  }

  /**
   * update account_collection_flow
   */
  update(
    id: string,
    body: AccountCollectionFlowUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AcccountConnectionFlow>> {
    return this.patch(`/api/account_collection_flows/${id}`, { body, ...options });
  }

  /**
   * list account_collection_flows
   */
  list(
    query?: AccountCollectionFlowListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AcccountConnectionFlowsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AcccountConnectionFlowsPage>;
  list(
    query: AccountCollectionFlowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AcccountConnectionFlowsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/account_collection_flows', AcccountConnectionFlowsPage, {
      query,
      ...options,
    });
  }
}

export class AcccountConnectionFlowsPage extends Page<AcccountConnectionFlow> {}

export interface AcccountConnectionFlow {
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
   * Required.
   */
  counterparty_id: string;

  payment_types: Array<string>;
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
