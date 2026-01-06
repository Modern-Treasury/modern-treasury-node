// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LedgerAccountStatements extends APIResource {
  /**
   * Create a ledger account statement.
   *
   * @example
   * ```ts
   * const ledgerAccountStatement =
   *   await client.ledgerAccountStatements.create({
   *     effective_at_lower_bound: '2019-12-27T18:11:19.117Z',
   *     effective_at_upper_bound: '2019-12-27T18:11:19.117Z',
   *     ledger_account_id:
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  create(
    body: LedgerAccountStatementCreateParams,
    options?: RequestOptions,
  ): APIPromise<LedgerAccountStatement> {
    return this._client.post('/api/ledger_account_statements', { body, ...options });
  }

  /**
   * Get details on a single ledger account statement.
   *
   * @example
   * ```ts
   * const ledgerAccountStatement =
   *   await client.ledgerAccountStatements.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LedgerAccountStatement> {
    return this._client.get(path`/api/ledger_account_statements/${id}`, options);
  }
}

export interface LedgerAccountStatement {
  id: string;

  created_at: string;

  /**
   * The description of the ledger account statement.
   */
  description: string | null;

  /**
   * The inclusive lower bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_lower_bound: string;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_upper_bound: string;

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_upper_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  ending_balance: Shared.LedgerBalances;

  /**
   * The id of the ledger account whose ledger entries are queried against, and its
   * balances are computed as a result.
   */
  ledger_account_id: string;

  /**
   * Lock version of the ledger account at the time of statement generation.
   */
  ledger_account_lock_version: number;

  /**
   * The normal balance of the ledger account.
   */
  ledger_account_normal_balance: Shared.TransactionDirection;

  /**
   * The id of the ledger that this ledger account statement belongs to.
   */
  ledger_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: { [key: string]: string };

  object: string;

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_lower_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  starting_balance: Shared.LedgerBalances;

  updated_at: string;
}

export interface LedgerAccountStatementCreateParams {
  /**
   * The inclusive lower bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_lower_bound: string;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_upper_bound: string;

  /**
   * The id of the ledger account whose ledger entries are queried against, and its
   * balances are computed as a result.
   */
  ledger_account_id: string;

  /**
   * The description of the ledger account statement.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export declare namespace LedgerAccountStatements {
  export {
    type LedgerAccountStatement as LedgerAccountStatement,
    type LedgerAccountStatementCreateParams as LedgerAccountStatementCreateParams,
  };
}
