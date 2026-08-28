// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cases extends APIResource {
  /**
   * Get a list of cases.
   */
  list(
    query: CaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CasesPage, Case> {
    return this._client.getAPIList('/api/cases', Page<Case>, { query, ...options });
  }

  /**
   * Get details on a single case.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Case> {
    return this._client.get(path`/api/cases/${id}`, options);
  }
}

export type CasesPage = Page<Case>;

export interface Case {
  id: string;

  created_at: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The pending actions requested to resolve the case.
   */
  requested_actions: Array<Case.RequestedAction>;

  /**
   * The requested actions that have been resolved.
   */
  resolved_actions: Array<Case.ResolvedAction>;

  /**
   * The status of the case.
   */
  status: 'open' | 'resolved';

  /**
   * The ID of the object the case is about.
   */
  subject_id: string;

  /**
   * The type of the object the case is about.
   */
  subject_type: string;

  updated_at: string;
}

export namespace Case {
  export interface RequestedAction {
    id: string;

    /**
     * The category of the requested action.
     */
    category:
      | 'onboarding_articles_of_incorporation_failure'
      | 'onboarding_business_registry_verification_failure'
      | 'onboarding_database_failure'
      | 'onboarding_proof_of_address_failure'
      | 'onboarding_ssn_check_failure'
      | 'onboarding_tin_check_failure';

    created_at: string;

    /**
     * The field that needs to be corrected or provided, if any.
     */
    field: 'articles_of_incorporation' | 'ein_letter' | 'legal_entity_details' | 'proof_of_address' | null;

    /**
     * Instructions on how to resolve the requested action.
     */
    instructions: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * The reasons the action was requested.
     */
    reasons: Array<string>;

    updated_at: string;
  }

  export interface ResolvedAction {
    id: string;

    /**
     * The category of the requested action.
     */
    category:
      | 'onboarding_articles_of_incorporation_failure'
      | 'onboarding_business_registry_verification_failure'
      | 'onboarding_database_failure'
      | 'onboarding_proof_of_address_failure'
      | 'onboarding_ssn_check_failure'
      | 'onboarding_tin_check_failure';

    created_at: string;

    /**
     * The field that needs to be corrected or provided, if any.
     */
    field: 'articles_of_incorporation' | 'ein_letter' | 'legal_entity_details' | 'proof_of_address' | null;

    /**
     * Instructions on how to resolve the requested action.
     */
    instructions: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * The reasons the action was requested.
     */
    reasons: Array<string>;

    updated_at: string;
  }
}

export interface CaseListParams extends PageParams {
  /**
   * The status of the case.
   */
  status?: 'open' | 'resolved';

  /**
   * The ID of the object the case is about.
   */
  subject_id?: string;

  /**
   * The type of the object the case is about.
   */
  subject_type?: 'legal_entity';
}

export declare namespace Cases {
  export { type Case as Case, type CasesPage as CasesPage, type CaseListParams as CaseListParams };
}
