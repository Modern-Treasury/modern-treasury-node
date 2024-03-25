// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as LegalEntitiesAPI from 'modern-treasury/resources/legal-entities';
import * as LegalEntityAssociationsAPI from 'modern-treasury/resources/legal-entity-associations';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class LegalEntities extends APIResource {
  /**
   * create legal_entity
   */
  create(params: LegalEntityCreateParams, options?: Core.RequestOptions): Core.APIPromise<LegalEntity> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/legal_entities', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single legal entity.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LegalEntity> {
    return this._client.get(`/api/legal_entities/${id}`, options);
  }

  /**
   * Update a legal entity.
   */
  update(
    id: string,
    body?: LegalEntityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegalEntity>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LegalEntity>;
  update(
    id: string,
    body: LegalEntityUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegalEntity> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/legal_entities/${id}`, { body, ...options });
  }

  /**
   * Get a list of all legal entities.
   */
  list(
    query?: LegalEntityListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegalEntitiesPage, LegalEntity>;
  list(options?: Core.RequestOptions): Core.PagePromise<LegalEntitiesPage, LegalEntity>;
  list(
    query: LegalEntityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegalEntitiesPage, LegalEntity> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/legal_entities', LegalEntitiesPage, { query, ...options });
  }
}

export class LegalEntitiesPage extends Page<LegalEntity> {}

export interface LegalEntity {
  id?: string;

  /**
   * A list of addresses for the entity.
   */
  addresses?: Array<LegalEntity.Address>;

  /**
   * The business's legal business name.
   */
  business_name?: string | null;

  created_at?: string;

  /**
   * A business's formation date (YYYY-MM-DD).
   */
  date_formed?: string | null;

  /**
   * An individual's date of birth (YYYY-MM-DD).
   */
  date_of_birth?: string | null;

  discarded_at?: string | null;

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
  identifications?: Array<LegalEntity.Identification>;

  /**
   * An individual's last name.
   */
  last_name?: string | null;

  /**
   * The legal entity associations and its child legal entities.
   */
  legal_entity_associations?: Array<LegalEntityAssociationsAPI.LegalEntityAssociation> | null;

  /**
   * The type of legal entity.
   */
  legal_entity_type?: 'business' | 'individual' | 'joint';

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
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  object?: string;

  phone_numbers?: Array<LegalEntity.PhoneNumber>;

  updated_at?: string;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace LegalEntity {
  export interface Address {
    id: string;

    /**
     * The types of this address.
     */
    address_types: Array<'business' | 'mailing' | 'other' | 'po_box' | 'residential'>;

    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string | null;

    created_at: string;

    discarded_at: string | null;

    line1: string | null;

    line2: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    /**
     * Locality or City.
     */
    locality: string | null;

    object: string;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * Region or State.
     */
    region: string | null;

    updated_at: string;
  }

  export interface Identification {
    id: string;

    created_at: string;

    discarded_at: string | null;

    /**
     * The type of ID number.
     */
    id_type:
      | 'ar_cuil'
      | 'ar_cuit'
      | 'br_cnpj'
      | 'br_cpf'
      | 'cl_rut'
      | 'co_cedulas'
      | 'co_nit'
      | 'hn_id'
      | 'hn_rtn'
      | 'passport'
      | 'sa_tin'
      | 'sa_vat'
      | 'us_ein'
      | 'us_itin'
      | 'us_ssn'
      | 'vn_tin';

    /**
     * The ISO 3166-1 alpha-2 country code of the country that issued the
     * identification
     */
    issuing_country: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }

  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    phone_number?: string;
  }
}

export interface LegalEntityCreateParams {
  /**
   * The type of legal entity.
   */
  legal_entity_type: 'business' | 'individual';

  /**
   * A list of addresses for the entity.
   */
  addresses?: Array<LegalEntityCreateParams.Address>;

  /**
   * The business's legal business name.
   */
  business_name?: string | null;

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
  identifications?: Array<LegalEntityCreateParams.Identification>;

  /**
   * An individual's last name.
   */
  last_name?: string | null;

  /**
   * The legal entity associations and its child legal entities.
   */
  legal_entity_associations?: Array<LegalEntityCreateParams.LegalEntityAssociation> | null;

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
  metadata?: Record<string, string>;

  phone_numbers?: Array<LegalEntityCreateParams.PhoneNumber>;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace LegalEntityCreateParams {
  export interface Address {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string | null;

    line1: string | null;

    /**
     * Locality or City.
     */
    locality: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * Region or State.
     */
    region: string | null;

    /**
     * The types of this address.
     */
    address_types?: Array<'business' | 'mailing' | 'other' | 'po_box' | 'residential'>;

    line2?: string | null;
  }

  export interface Identification {
    /**
     * The ID number of identification document.
     */
    id_number: string;

    /**
     * The type of ID number.
     */
    id_type:
      | 'ar_cuil'
      | 'ar_cuit'
      | 'br_cnpj'
      | 'br_cpf'
      | 'cl_rut'
      | 'co_cedulas'
      | 'co_nit'
      | 'hn_id'
      | 'hn_rtn'
      | 'passport'
      | 'sa_tin'
      | 'sa_vat'
      | 'us_ein'
      | 'us_itin'
      | 'us_ssn'
      | 'vn_tin';

    /**
     * The ISO 3166-1 alpha-2 country code of the country that issued the
     * identification
     */
    issuing_country?: string | null;
  }

  export interface LegalEntityAssociation {
    relationship_types: Array<'beneficial_owner' | 'control_person'>;

    /**
     * The child legal entity.
     */
    child_legal_entity?: LegalEntityAssociation.ChildLegalEntity;

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

  export namespace LegalEntityAssociation {
    /**
     * The child legal entity.
     */
    export interface ChildLegalEntity {
      /**
       * A list of addresses for the entity.
       */
      addresses?: Array<ChildLegalEntity.Address>;

      /**
       * The business's legal business name.
       */
      business_name?: string | null;

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
      identifications?: Array<ChildLegalEntity.Identification>;

      /**
       * An individual's last name.
       */
      last_name?: string | null;

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
      metadata?: Record<string, string>;

      phone_numbers?: Array<ChildLegalEntity.PhoneNumber>;

      /**
       * The entity's primary website URL.
       */
      website?: string | null;
    }

    export namespace ChildLegalEntity {
      export interface Address {
        /**
         * Country code conforms to [ISO 3166-1 alpha-2]
         */
        country: string | null;

        line1: string | null;

        /**
         * Locality or City.
         */
        locality: string | null;

        /**
         * The postal code of the address.
         */
        postal_code: string | null;

        /**
         * Region or State.
         */
        region: string | null;

        /**
         * The types of this address.
         */
        address_types?: Array<'business' | 'mailing' | 'other' | 'po_box' | 'residential'>;

        line2?: string | null;
      }

      export interface Identification {
        /**
         * The ID number of identification document.
         */
        id_number: string;

        /**
         * The type of ID number.
         */
        id_type:
          | 'ar_cuil'
          | 'ar_cuit'
          | 'br_cnpj'
          | 'br_cpf'
          | 'cl_rut'
          | 'co_cedulas'
          | 'co_nit'
          | 'hn_id'
          | 'hn_rtn'
          | 'passport'
          | 'sa_tin'
          | 'sa_vat'
          | 'us_ein'
          | 'us_itin'
          | 'us_ssn'
          | 'vn_tin';

        /**
         * The ISO 3166-1 alpha-2 country code of the country that issued the
         * identification
         */
        issuing_country?: string | null;
      }

      /**
       * A list of phone numbers in E.164 format.
       */
      export interface PhoneNumber {
        phone_number?: string;
      }
    }
  }

  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    phone_number?: string;
  }
}

export interface LegalEntityUpdateParams {
  /**
   * The business's legal business name.
   */
  business_name?: string | null;

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
   * An individual's last name.
   */
  last_name?: string | null;

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
  metadata?: Record<string, string>;

  phone_numbers?: Array<LegalEntityUpdateParams.PhoneNumber>;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace LegalEntityUpdateParams {
  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    phone_number?: string;
  }
}

export interface LegalEntityListParams extends PageParams {
  legal_entity_type?: 'business' | 'individual';

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  show_deleted?: string;
}

export namespace LegalEntities {
  export import LegalEntity = LegalEntitiesAPI.LegalEntity;
  export import LegalEntitiesPage = LegalEntitiesAPI.LegalEntitiesPage;
  export import LegalEntityCreateParams = LegalEntitiesAPI.LegalEntityCreateParams;
  export import LegalEntityUpdateParams = LegalEntitiesAPI.LegalEntityUpdateParams;
  export import LegalEntityListParams = LegalEntitiesAPI.LegalEntityListParams;
}
