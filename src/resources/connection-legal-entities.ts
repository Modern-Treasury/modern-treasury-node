// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as LegalEntitiesAPI from './legal-entities';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class ConnectionLegalEntities extends APIResource {
  /**
   * Create a connection legal entity.
   */
  create(
    params: ConnectionLegalEntityCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionLegalEntity> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/connection_legal_entities', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single connection legal entity.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ConnectionLegalEntity> {
    return this._client.get(`/api/connection_legal_entities/${id}`, options);
  }

  /**
   * Update a connection legal entity.
   */
  update(
    id: string,
    body?: ConnectionLegalEntityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionLegalEntity>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<ConnectionLegalEntity>;
  update(
    id: string,
    body: ConnectionLegalEntityUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionLegalEntity> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/connection_legal_entities/${id}`, { body, ...options });
  }

  /**
   * Get a list of all connection legal entities.
   */
  list(
    query?: ConnectionLegalEntityListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConnectionLegalEntitiesPage, ConnectionLegalEntity>;
  list(options?: Core.RequestOptions): Core.PagePromise<ConnectionLegalEntitiesPage, ConnectionLegalEntity>;
  list(
    query: ConnectionLegalEntityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConnectionLegalEntitiesPage, ConnectionLegalEntity> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/connection_legal_entities', ConnectionLegalEntitiesPage, {
      query,
      ...options,
    });
  }
}

export class ConnectionLegalEntitiesPage extends Page<ConnectionLegalEntity> {}

export interface ConnectionLegalEntity {
  id: string;

  /**
   * The ID of the connection.
   */
  connection_id: string;

  created_at: string;

  discarded_at: string | null;

  /**
   * The ID of the legal entity.
   */
  legal_entity_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The status of the connection legal entity.
   */
  status: 'completed' | 'denied' | 'failed' | 'processing';

  updated_at: string;

  /**
   * The ID of the legal entity at the vendor.
   */
  vendor_id: string;
}

export interface ConnectionLegalEntityCreateParams {
  /**
   * The ID of the connection.
   */
  connection_id: string;

  /**
   * The legal entity.
   */
  legal_entity?: ConnectionLegalEntityCreateParams.LegalEntity;

  /**
   * The ID of the legal entity.
   */
  legal_entity_id?: string;
}

export namespace ConnectionLegalEntityCreateParams {
  /**
   * The legal entity.
   */
  export interface LegalEntity {
    /**
     * A list of addresses for the entity.
     */
    addresses?: Array<Shared.LegalEntityAddressCreateRequest>;

    bank_settings?: LegalEntitiesAPI.BankSettings | null;

    /**
     * The business's legal business name.
     */
    business_name?: string | null;

    /**
     * The country of citizenship for an individual.
     */
    citizenship_country?: string | null;

    compliance_details?: Shared.LegalEntityComplianceDetail | null;

    /**
     * A business's formation date (YYYY-MM-DD).
     */
    date_formed?: string | null;

    /**
     * An individual's date of birth (YYYY-MM-DD).
     */
    date_of_birth?: string | null;

    doing_business_as_names?: Array<string>;

    /**
     * The entity's primary email.
     */
    email?: string | null;

    /**
     * An individual's first name.
     */
    first_name?: string | null;

    /**
     * A list of identifications for the legal entity.
     */
    identifications?: Array<Shared.IdentificationCreateRequest>;

    /**
     * A list of industry classifications for the legal entity.
     */
    industry_classifications?: Array<Shared.LegalEntityIndustryClassification>;

    /**
     * An individual's last name.
     */
    last_name?: string | null;

    /**
     * The legal entity associations and its child legal entities.
     */
    legal_entity_associations?: Array<LegalEntity.LegalEntityAssociation> | null;

    /**
     * The type of legal entity.
     */
    legal_entity_type?: 'business' | 'individual';

    /**
     * The business's legal structure.
     */
    legal_structure?:
      | 'corporation'
      | 'llc'
      | 'non_profit'
      | 'partnership'
      | 'sole_proprietorship'
      | 'trust'
      | null;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * An individual's middle name.
     */
    middle_name?: string | null;

    phone_numbers?: Array<LegalEntity.PhoneNumber>;

    /**
     * Whether the individual is a politically exposed person.
     */
    politically_exposed_person?: boolean | null;

    /**
     * An individual's preferred name.
     */
    preferred_name?: string | null;

    /**
     * An individual's prefix.
     */
    prefix?: string | null;

    /**
     * The risk rating of the legal entity. One of low, medium, high.
     */
    risk_rating?: 'low' | 'medium' | 'high' | null;

    /**
     * An individual's suffix.
     */
    suffix?: string | null;

    wealth_and_employment_details?: LegalEntitiesAPI.WealthAndEmploymentDetails | null;

    /**
     * The entity's primary website URL.
     */
    website?: string | null;
  }

  export namespace LegalEntity {
    export interface LegalEntityAssociation {
      relationship_types: Array<'beneficial_owner' | 'control_person'>;

      /**
       * The child legal entity.
       */
      child_legal_entity?: Shared.ChildLegalEntityCreate;

      /**
       * The ID of the child legal entity.
       */
      child_legal_entity_id?: string;

      /**
       * The child entity's ownership percentage iff they are a beneficial owner.
       */
      ownership_percentage?: number | null;

      /**
       * The job title of the child entity at the parent entity.
       */
      title?: string | null;
    }

    /**
     * A list of phone numbers in E.164 format.
     */
    export interface PhoneNumber {
      phone_number?: string;
    }
  }
}

export interface ConnectionLegalEntityUpdateParams {
  /**
   * The status of the connection legal entity.
   */
  status?: 'processing';
}

export interface ConnectionLegalEntityListParams extends PageParams {
  connection_id?: string;

  legal_entity_id?: string;

  status?: 'completed' | 'denied' | 'failed' | 'processing';
}

ConnectionLegalEntities.ConnectionLegalEntitiesPage = ConnectionLegalEntitiesPage;

export declare namespace ConnectionLegalEntities {
  export {
    type ConnectionLegalEntity as ConnectionLegalEntity,
    ConnectionLegalEntitiesPage as ConnectionLegalEntitiesPage,
    type ConnectionLegalEntityCreateParams as ConnectionLegalEntityCreateParams,
    type ConnectionLegalEntityUpdateParams as ConnectionLegalEntityUpdateParams,
    type ConnectionLegalEntityListParams as ConnectionLegalEntityListParams,
  };
}
