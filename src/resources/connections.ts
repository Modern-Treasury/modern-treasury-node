// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as ConnectionsAPI from 'modern-treasury/resources/connections';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class Connections extends APIResource {
  /**
   * Get a list of all connections.
   */
  list(
    query?: ConnectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConnectionsPage, Connection>;
  list(options?: Core.RequestOptions): Core.PagePromise<ConnectionsPage, Connection>;
  list(
    query: ConnectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConnectionsPage, Connection> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/connections', ConnectionsPage, { query, ...options });
  }
}

export class ConnectionsPage extends Page<Connection> {}

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

export namespace Connections {
  export import Connection = ConnectionsAPI.Connection;
  export import ConnectionsPage = ConnectionsAPI.ConnectionsPage;
  export import ConnectionListParams = ConnectionsAPI.ConnectionListParams;
}
