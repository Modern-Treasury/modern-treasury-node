// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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
  update(id: string, body: AccountEntryUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.patch(`/api/ledger_account_settlements/${id}/ledger_entries`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Remove ledger entries from a draft ledger account settlement.
   *
   * @example
   * ```ts
   * await client.ledgerAccountSettlements.accountEntries.del(
   *   'id',
   *   {
   *     ledger_entry_ids: [
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     ],
   *   },
   * );
   * ```
   */
  del(id: string, body: AccountEntryDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/ledger_account_settlements/${id}/ledger_entries`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
