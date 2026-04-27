// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Connections extends APIResource {
  /**
   * Get a list of all connections.
   */
  list(
    query: ConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConnectionsPage, Connection> {
    return this._client.getAPIList('/api/connections', Page<Connection>, { query, ...options });
  }
}

export type ConnectionsPage = Page<Connection>;

export interface Connection {
  id: string;

  created_at: string;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;

  /**
   * An identifier given to this connection by the bank.
   */
  vendor_customer_id: string | null;

  /**
   * Unique identifier for the bank or vendor.
   */
  vendor_id: string;

  /**
   * A human-friendly name for the bank or vendor.
   */
  vendor_name: string;
}

export interface ConnectionListParams extends PageParams {
  /**
   * A string code representing the vendor (i.e. bank).
   */
  entity?: string;

  /**
   * An identifier assigned by the vendor to your organization.
   */
  vendor_customer_id?: string;
}

export declare namespace Connections {
  export {
    type Connection as Connection,
    type ConnectionsPage as ConnectionsPage,
    type ConnectionListParams as ConnectionListParams,
  };
}
