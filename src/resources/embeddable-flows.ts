// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountCollectionFlowsAPI from './account-collection-flows';
import * as PaymentFlowsAPI from './payment-flows';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class EmbeddableFlows extends APIResource {
  /**
   * list embeddable_flows
   */
  list(
    query: EmbeddableFlowListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmbeddableFlowsPage, EmbeddableFlow> {
    return this._client.getAPIList('/api/embeddable_flows', Page<EmbeddableFlow>, { query, ...options });
  }

  /**
   * create embeddable_flow
   */
  create(body: EmbeddableFlowCreateParams, options?: RequestOptions): APIPromise<EmbeddableFlow> {
    return this._client.post('/api/embeddable_flows', { body, ...options });
  }

  /**
   * get embeddable_flow
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmbeddableFlow> {
    return this._client.get(path`/api/embeddable_flows/${id}`, options);
  }

  /**
   * update embeddable_flow
   */
  update(id: string, body: EmbeddableFlowUpdateParams, options?: RequestOptions): APIPromise<EmbeddableFlow> {
    return this._client.patch(path`/api/embeddable_flows/${id}`, { body, ...options });
  }
}

export type EmbeddableFlowsPage = Page<EmbeddableFlow>;

export interface EmbeddableFlow {
  id: string;

  client_token: string;

  created_at: string;

  expires_at: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  options: EmbeddableFlow.UnionMember0 | EmbeddableFlow.UnionMember1 | EmbeddableFlow.UnionMember2;

  /**
   * The current status of the underlying flow.
   */
  status: 'cancelled' | 'completed' | 'expired' | 'pending';

  template: 'legal_entity_onboarding' | 'account_collection' | 'payment';

  updated_at: string;
}

export namespace EmbeddableFlow {
  export interface UnionMember0 {
    legal_entity_id: string;

    type: 'individual';
  }

  export interface UnionMember1 {
    counterparty_id: string | null;

    external_account_id: string | null;

    payment_types: Array<string>;

    receiving_countries: Array<string>;
  }

  export interface UnionMember2 {
    amount: number;

    counterparty_id: string | null;

    currency: string;

    direction: Shared.TransactionDirection;

    due_date: string | null;

    effective_date_selection_enabled: boolean;

    existing_external_accounts_filter: 'verified' | null;

    external_account_collection: 'enabled' | 'disabled';

    originating_account_id: string;

    payment_order_id: string | null;

    receiving_account_id: string | null;

    selected_effective_date: string | null;
  }
}

export interface EmbeddableFlowListParams extends PageParams {
  status?: string;

  template?: 'legal_entity_onboarding' | 'account_collection' | 'payment';
}

export interface EmbeddableFlowCreateParams {
  /**
   * The parameters for the selected template's flow.
   */
  options:
    | AccountCollectionFlowsAPI.AccountCollectionFlowCreateRequest
    | PaymentFlowsAPI.PaymentFlowCreateRequest
    | EmbeddableFlowCreateParams.Type;

  template: 'legal_entity_onboarding' | 'account_collection' | 'payment';
}

export namespace EmbeddableFlowCreateParams {
  export interface Type {
    type: 'individual';
  }
}

export interface EmbeddableFlowUpdateParams {
  /**
   * The updated status of the flow. Can only be used to mark the flow as
   * `cancelled`.
   */
  status: 'cancelled';
}

export declare namespace EmbeddableFlows {
  export {
    type EmbeddableFlow as EmbeddableFlow,
    type EmbeddableFlowsPage as EmbeddableFlowsPage,
    type EmbeddableFlowListParams as EmbeddableFlowListParams,
    type EmbeddableFlowCreateParams as EmbeddableFlowCreateParams,
    type EmbeddableFlowUpdateParams as EmbeddableFlowUpdateParams,
  };
}
