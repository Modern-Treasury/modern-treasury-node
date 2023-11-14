// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'modern-treasury/resource';
import { createHmac } from 'crypto';
import type { HeadersLike } from 'modern-treasury/core';
import { getRequiredHeader } from 'modern-treasury/core';

export class Webhooks extends APIResource {
  /**
   * To verify that a webhook was actually sent by Modern Treasury, every payload is
   * signed with a signature that is passed through the `X-Signature` HTTP header.
   *
   * This method will generate a signature based off of your webhook key which can be
   * found in the Developer Settings,
   * https://app.moderntreasury.com/developers/webhooks, and the webhook payload.
   *
   * You can then compare the generated signature with the signature sent with the
   * request, if they match then the webhook was sent by Modern Treasury.
   */
  getSignature(payload: string, opts?: { key?: string | null | undefined }): string {
    const key = opts?.key || this._client.webhookKey;
    if (key == null) {
      throw new Error(
        "The webhook key must either be set using the env var, MODERN_TREASURY_WEBHOOK_KEY, on the client class, new ModernTreasury({ webhookKey: '123' }) or passed to this function",
      );
    }
    if (!key) {
      throw new Error('The webhook key is set but appears to be empty.');
    }

    return createHmac('sha256', key).update(payload, 'utf8').digest('hex');
  }

  /**
   * Returns whether or not the webhook payload was sent by Modern Treasury.
   */
  validateSignature(
    payload: string,
    headers: string | HeadersLike,
    opts?: { key?: string | null | undefined },
  ): boolean {
    const signature = this.getSignature(payload, opts);
    const expectedSignature =
      typeof headers === 'string' ? headers : getRequiredHeader(headers, 'X-Signature');
    if (!expectedSignature) throw new Error('Could not find X-Signature header');
    return signature === expectedSignature;
  }
}
