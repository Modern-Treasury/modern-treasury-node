// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';
import * as LedgerEntries from '~/resources/ledger-entries';

export class Versions extends APIResource {
  /**
   * Get a list of ledger transaction versions.
   */
  versions(
    id: string,
    query?: VersionVersionsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerTransactionVersionsPage>;
  versions(id: string, options?: Core.RequestOptions): Core.PagePromise<LedgerTransactionVersionsPage>;
  versions(
    id: string,
    query: VersionVersionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerTransactionVersionsPage> {
    if (isRequestOptions(query)) {
      return this.versions(id, {}, query);
    }

    return this.getAPIList(`/api/ledger_transactions/${id}/versions`, LedgerTransactionVersionsPage, {
      query,
      ...options,
    });
  }
}

export class LedgerTransactionVersionsPage extends Page<LedgerTransactionVersion> {}

export interface LedgerTransactionVersion {
  created_at: string;

  /**
   * An optional description for internal use.
   */
  description: string | null;

  /**
   * The date (YYYY-MM-DD) on which the ledger transaction happened for reporting
   * purposes.
   */
  effective_date: string;

  /**
   * A unique string to represent the ledger transaction. Only one pending or posted
   * ledger transaction may have this ID in the ledger.
   */
  external_id: string | null;

  id: string;

  /**
   * An array of ledger entry objects.
   */
  ledger_entries: Array<LedgerEntries.LedgerEntry>;

  /**
   * The ID of the ledger this ledger transaction belongs to.
   */
  ledger_id: string;

  /**
   * The ID of the ledger transaction
   */
  ledger_transaction_id: string;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the id will be populated here, otherwise null.
   */
  ledgerable_id: string | null;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the type will be populated here, otherwise null. This can be one of
   * payment_order, incoming_payment_detail, expected_payment, return, or reversal.
   */
  ledgerable_type:
    | 'counterparty'
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'internal_account'
    | 'line_item'
    | 'paper_item'
    | 'payment_order'
    | 'payment_order_attempt'
    | 'return'
    | 'reversal'
    | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

  object: string;

  /**
   * The time on which the ledger transaction posted. This is null if the ledger
   * transaction is pending.
   */
  posted_at: string | null;

  /**
   * One of `pending`, `posted`, or `archived`
   */
  status: 'archived' | 'pending' | 'posted';

  /**
   * Version number of the ledger transaction.
   */
  version: number;
}

export interface VersionVersionsParams extends PageParams {
  /**
   * Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by the
   * created_at timestamp. For example, for all dates after Jan 1 2000 12:00 UTC, use
   * created_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  created_at?: Record<string, string>;

  /**
   * Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by the
   * version. For example, for all versions after 2, use version%5Bgt%5D=2.
   */
  version?: Record<string, number>;
}
