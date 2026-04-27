// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AccountEntries extends APIResource {
  /**
   * Add ledger entries to a draft ledger account settlement.
   *
   * @example
   * ```ts
   * await client.ledgerAccountSettlements.accountEntries.update(
   *   'id',
   *   {
   *     ledger_entry_ids: [
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     ],
   *   },
   * );
   * ```
   */
  update(id: string, body: AccountEntryUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/api/ledger_account_settlements/${id}/ledger_entries`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove ledger entries from a draft ledger account settlement.
   *
   * @example
   * ```ts
   * await client.ledgerAccountSettlements.accountEntries.delete(
   *   'id',
   *   {
   *     ledger_entry_ids: [
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     ],
   *   },
   * );
   * ```
   */
  delete(id: string, body: AccountEntryDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/ledger_account_settlements/${id}/ledger_entries`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AccountEntryUpdateParams {
  /**
   * The ids of the ledger entries that are to be added or removed from the ledger
   * account settlement.
   */
  ledger_entry_ids: Array<string> | null;
}

export interface AccountEntryDeleteParams {
  /**
   * The ids of the ledger entries that are to be added or removed from the ledger
   * account settlement.
   */
  ledger_entry_ids: Array<string> | null;
}

export declare namespace AccountEntries {
  export {
    type AccountEntryUpdateParams as AccountEntryUpdateParams,
    type AccountEntryDeleteParams as AccountEntryDeleteParams,
  };
}
