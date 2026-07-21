// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalEntitiesAPI from './legal-entities';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ConnectionLegalEntities extends APIResource {
  /**
   * Create a connection legal entity.
   */
  create(
    body: ConnectionLegalEntityCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionLegalEntity> {
    return this._client.post('/api/connection_legal_entities', { body, ...options });
  }

  /**
   * Get details on a single connection legal entity.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ConnectionLegalEntity> {
    return this._client.get(path`/api/connection_legal_entities/${id}`, options);
  }

  /**
   * Update a connection legal entity.
   */
  update(
    id: string,
    body: ConnectionLegalEntityUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionLegalEntity> {
    return this._client.patch(path`/api/connection_legal_entities/${id}`, { body, ...options });
  }

  /**
   * Get a list of all connection legal entities.
   */
  list(
    query: ConnectionLegalEntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConnectionLegalEntitiesPage, ConnectionLegalEntity> {
    return this._client.getAPIList('/api/connection_legal_entities', Page<ConnectionLegalEntity>, {
      query,
      ...options,
    });
  }
}

export type ConnectionLegalEntitiesPage = Page<ConnectionLegalEntity>;

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
  status: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended';

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
     * A description of the business.
     */
    business_description?: string | null;

    /**
     * The business's legal business name.
     */
    business_name?: string | null;

    /**
     * The country of citizenship for an individual.
     */
    citizenship_country?: string | null;

    /**
     * @deprecated
     */
    compliance_details?: unknown | null;

    /**
     * The connection ID for the connection the legal entity is associated with.
     * Defaults to the id of the connection designated with an is_default value of true
     * or the id of an existing operational connection if only one is available. Pass
     * in a value of null to prevent the connection from being associated with the
     * legal entity.
     */
    connection_id?: string | null;

    /**
     * The country where the business is incorporated, as an ISO 3166-1 alpha-2 country
     * code (e.g. US).
     */
    country_of_incorporation?: string | null;

    /**
     * A business's formation date (YYYY-MM-DD).
     */
    date_formed?: string | null;

    /**
     * An individual's date of birth (YYYY-MM-DD).
     */
    date_of_birth?: string | null;

    /**
     * A list of documents to attach to the legal entity (e.g. articles of
     * incorporation, certificate of good standing, proof of address).
     */
    documents?: Array<LegalEntity.Document>;

    doing_business_as_names?: Array<string>;

    /**
     * The entity's primary email.
     */
    email?: string | null;

    /**
     * Monthly expected transaction volume in USD.
     */
    expected_activity_volume?: number | null;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

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
     * A description of the intended use of the legal entity.
     */
    intended_use?: string | null;

    /**
     * An individual's last name.
     */
    last_name?: string | null;

    /**
     * The legal entity associations and its child legal entities.
     */
    legal_entity_associations?: Array<Shared.LegalEntityAssociationInlineCreate> | null;

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
     * ISO 10383 market identifier code.
     */
    listed_exchange?: string | null;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * An individual's middle name.
     */
    middle_name?: string | null;

    /**
     * A list of countries where the business operates, as ISO 3166-1 alpha-2 country
     * codes (e.g. ["US", "CA"]).
     */
    operating_jurisdictions?: Array<string>;

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
     * A list of primary social media URLs for the business.
     */
    primary_social_media_sites?: Array<string>;

    /**
     * Array of regulatory bodies overseeing this institution.
     */
    regulators?: Array<LegalEntity.Regulator> | null;

    /**
     * The risk rating of the legal entity. One of low, medium, high.
     */
    risk_rating?: 'low' | 'medium' | 'high' | null;

    /**
     * The UUID of the parent legal entity in the service provider tree.
     */
    service_provider_legal_entity_id?: string | null;

    /**
     * An individual's suffix.
     */
    suffix?: string | null;

    /**
     * Acceptance of terms of use by the legal entity.
     */
    terms_of_use?: LegalEntity.TermsOfUse | null;

    /**
     * @deprecated Deprecated. Use `third_party_verifications` instead.
     */
    third_party_verification?: Shared.ThirdPartyVerification | null;

    /**
     * A list of third-party verifications run by external vendors.
     */
    third_party_verifications?: Array<Shared.ThirdPartyVerification>;

    /**
     * Stock ticker symbol for publicly traded companies.
     */
    ticker_symbol?: string | null;

    wealth_and_employment_details?: LegalEntitiesAPI.WealthAndEmploymentDetails | null;

    /**
     * The entity's primary website URL.
     */
    website?: string | null;
  }

  export namespace LegalEntity {
    export interface Document {
      /**
       * A category given to the document, can be `null`.
       */
      document_type:
        | 'articles_of_incorporation'
        | 'certificate_of_good_standing'
        | 'ein_letter'
        | 'generic'
        | 'identification_back'
        | 'identification_front'
        | 'proof_of_address';

      /**
       * Base64-encoded file content for the document.
       */
      file_data: string;

      /**
       * The original filename of the document.
       */
      filename?: string;
    }

    /**
     * A list of phone numbers in E.164 format.
     */
    export interface PhoneNumber {
      phone_number?: string;
    }

    export interface Regulator {
      /**
       * The country code where the regulator operates in the ISO 3166-1 alpha-2 format
       * (e.g., "US", "CA", "GB").
       */
      jurisdiction: string;

      /**
       * Full name of the regulatory body.
       */
      name: string;

      /**
       * Registration or identification number with the regulator.
       */
      registration_number: string;
    }

    /**
     * Acceptance of terms of use by the legal entity.
     */
    export interface TermsOfUse {
      /**
       * The ISO 8601 timestamp indicating when the terms of use were accepted.
       */
      accepted_at?: string;

      /**
       * The IP address from which the terms of use were accepted. Supports both IPv4 and
       * IPv6 formats.
       */
      ip_address?: string;
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

  status?: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended';
}

export declare namespace ConnectionLegalEntities {
  export {
    type ConnectionLegalEntity as ConnectionLegalEntity,
    type ConnectionLegalEntitiesPage as ConnectionLegalEntitiesPage,
    type ConnectionLegalEntityCreateParams as ConnectionLegalEntityCreateParams,
    type ConnectionLegalEntityUpdateParams as ConnectionLegalEntityUpdateParams,
    type ConnectionLegalEntityListParams as ConnectionLegalEntityListParams,
  };
}
