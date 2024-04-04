// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import * as LegalEntityAssociationsAPI from 'modern-treasury/resources/legal-entity-associations';

export class LegalEntityAssociations extends APIResource {
  /**
   * create legal_entity_association
   */
  create(
    params: LegalEntityAssociationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegalEntityAssociation> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/legal_entity_associations', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }
}

export interface LegalEntityAssociation {
  id?: string;

  /**
   * The child legal entity.
   */
  child_legal_entity?: LegalEntityAssociation.ChildLegalEntity;

  created_at?: string;

  discarded_at?: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  object?: string;

  /**
   * The child entity's ownership percentage iff they are a beneficial owner.
   */
  ownership_percentage?: number | null;

  /**
   * The ID of the parent legal entity. This must be a business or joint legal
   * entity.
   */
  parent_legal_entity_id?: string;

  relationship_types?: Array<'beneficial_owner' | 'control_person'>;

  /**
   * The job title of the child entity at the parent entity.
   */
  title?: string | null;

  updated_at?: string;
}

export namespace LegalEntityAssociation {
  /**
   * The child legal entity.
   */
  export interface ChildLegalEntity {
    id?: string;

    /**
     * A list of addresses for the entity.
     */
    addresses?: Array<ChildLegalEntity.Address>;

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
    identifications?: Array<ChildLegalEntity.Identification>;

    /**
     * An individual's last name.
     */
    last_name?: string | null;

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

    phone_numbers?: Array<ChildLegalEntity.PhoneNumber>;

    updated_at?: string;

    /**
     * The entity's primary website URL.
     */
    website?: string | null;
  }

  export namespace ChildLegalEntity {
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
        | 'in_lei'
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
}

export interface LegalEntityAssociationCreateParams {
  relationship_types: Array<'beneficial_owner' | 'control_person'>;

  /**
   * The child legal entity.
   */
  child_legal_entity?: LegalEntityAssociationCreateParams.ChildLegalEntity;

  /**
   * The ID of the child legal entity.
   */
  child_legal_entity_id?: string;

  /**
   * The child entity's ownership percentage iff they are a beneficial owner.
   */
  ownership_percentage?: number | null;

  /**
   * The ID of the parent legal entity. This must be a business or joint legal
   * entity.
   */
  parent_legal_entity_id?: string;

  /**
   * The job title of the child entity at the parent entity.
   */
  title?: string | null;
}

export namespace LegalEntityAssociationCreateParams {
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
        | 'in_lei'
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

export namespace LegalEntityAssociations {
  export import LegalEntityAssociation = LegalEntityAssociationsAPI.LegalEntityAssociation;
  export import LegalEntityAssociationCreateParams = LegalEntityAssociationsAPI.LegalEntityAssociationCreateParams;
}
