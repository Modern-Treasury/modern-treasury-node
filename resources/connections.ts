// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Connections extends APIResource {
  /**
   * Get a list of all connections.
   */
  list(query?: ConnectionListParams, options?: Core.RequestOptions): Core.PagePromise<ConnectionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ConnectionsPage>;
  list(
    query: ConnectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConnectionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/connections', ConnectionsPage, { query, ...options });
  }
}

export class ConnectionsPage extends Page<Connection> {}

export interface Connection {
  created_at: string;

  discarded_at: string | null;

  id: string;

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
