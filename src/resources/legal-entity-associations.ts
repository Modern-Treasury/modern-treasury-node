// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class LegalEntityAssociations extends APIResource {
  /**
   * create legal_entity_association
   */
  create(
    body: LegalEntityAssociationCreateParams,
    options?: RequestOptions,
  ): APIPromise<LegalEntityAssociation> {
    return this._client.post('/api/legal_entity_associations', { body, ...options });
  }
}

export interface LegalEntityAssociation {
  id: string;

  /**
   * The child legal entity.
   */
  child_legal_entity: unknown;

  created_at: string;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The child entity's ownership percentage iff they are a beneficial owner.
   */
  ownership_percentage: number | null;

  /**
   * The ID of the parent legal entity. This must be a business or joint legal
   * entity.
   */
  parent_legal_entity_id: string;

  relationship_types: Array<'authorized_signer' | 'beneficial_owner' | 'control_person'>;

  /**
   * The job title of the child entity at the parent entity.
   */
  title: string | null;

  updated_at: string;
}

export interface LegalEntityAssociationCreateParams {
  /**
   * The ID of the parent legal entity. This must be a business or joint legal
   * entity.
   */
  parent_legal_entity_id: string;

  relationship_types: Array<'authorized_signer' | 'beneficial_owner' | 'control_person'>;

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

export declare namespace LegalEntityAssociations {
  export {
    type LegalEntityAssociation as LegalEntityAssociation,
    type LegalEntityAssociationCreateParams as LegalEntityAssociationCreateParams,
  };
}
