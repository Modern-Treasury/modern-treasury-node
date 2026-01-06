// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Documents extends APIResource {
  /**
   * Create a document.
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<Document> {
    return this._client.post(
      '/api/documents',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get an existing document.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Document> {
    return this._client.get(path`/api/documents/${id}`, options);
  }

  /**
   * Get a list of documents.
   */
  list(
    query: DocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DocumentsPage, Document> {
    return this._client.getAPIList('/api/documents', Page<Document>, { query, ...options });
  }
}

export type DocumentsPage = Page<Document>;

export interface Document {
  id: string;

  created_at: string;

  discarded_at: string | null;

  document_details: Array<Document.DocumentDetail>;

  /**
   * A category given to the document, can be `null`.
   */
  document_type: string | null;

  /**
   * The unique identifier for the associated object.
   */
  documentable_id: string;

  /**
   * The type of the associated object. Currently can be one of `payment_order`,
   * `transaction`, `expected_payment`, `counterparty`, `organization`, `case`,
   * `internal_account`, `decision`, or `external_account`.
   */
  documentable_type:
    | 'counterparty'
    | 'expected_payment'
    | 'external_account'
    | 'identification'
    | 'incoming_payment_detail'
    | 'internal_account'
    | 'organization'
    | 'payment_order'
    | 'transaction'
    | 'connection';

  file: Document.File;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The source of the document. Can be `vendor`, `customer`, or `modern_treasury`.
   */
  source: string;

  updated_at: string;
}

export namespace Document {
  export interface DocumentDetail {
    id: string;

    created_at: string;

    discarded_at: string | null;

    document_identifier: string;

    document_identifier_type: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }

  export interface File {
    /**
     * The MIME content type of the document.
     */
    content_type?: string;

    /**
     * The original filename of the document.
     */
    filename?: string;

    /**
     * The size of the document in bytes.
     */
    size?: number;
  }
}

export interface DocumentCreate {
  /**
   * The unique identifier for the associated object.
   */
  documentable_id: string;

  documentable_type:
    | 'counterparties'
    | 'expected_payments'
    | 'external_accounts'
    | 'identifications'
    | 'incoming_payment_details'
    | 'internal_accounts'
    | 'organizations'
    | 'payment_orders'
    | 'transactions'
    | 'connections';

  file: Uploadable;

  /**
   * A category given to the document, can be `null`.
   */
  document_type?: string;
}

export interface DocumentCreateParams {
  /**
   * The unique identifier for the associated object.
   */
  documentable_id: string;

  documentable_type:
    | 'counterparties'
    | 'expected_payments'
    | 'external_accounts'
    | 'identifications'
    | 'incoming_payment_details'
    | 'internal_accounts'
    | 'organizations'
    | 'payment_orders'
    | 'transactions'
    | 'connections';

  file: Uploadable;

  /**
   * A category given to the document, can be `null`.
   */
  document_type?: string;
}

export interface DocumentListParams extends PageParams {
  /**
   * The unique identifier for the associated object.
   */
  documentable_id?: string;

  /**
   * The type of the associated object. Currently can be one of `payment_order`,
   * `transaction`, `expected_payment`, `counterparty`, `organization`, `case`,
   * `internal_account`, `decision`, or `external_account`.
   */
  documentable_type?:
    | 'counterparties'
    | 'expected_payments'
    | 'external_accounts'
    | 'identifications'
    | 'incoming_payment_details'
    | 'internal_accounts'
    | 'organizations'
    | 'payment_orders'
    | 'transactions'
    | 'connections';
}

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentCreate as DocumentCreate,
    type DocumentsPage as DocumentsPage,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };
}
