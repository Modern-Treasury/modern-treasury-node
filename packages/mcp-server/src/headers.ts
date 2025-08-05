// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'modern-treasury/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Basic':
        const rawValue = Buffer.from(value).toString('base64');
        return {
          organizationID: rawValue.slice(0, rawValue.search(':')),
          apiKey: rawValue.slice(rawValue.search(':') + 1),
        };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const organizationID =
    req.headers['x-modern-treasury-organization-id'] instanceof Array ?
      req.headers['x-modern-treasury-organization-id'][0]
    : req.headers['x-modern-treasury-organization-id'];
  const apiKey =
    req.headers['x-modern-treasury-api-key'] instanceof Array ?
      req.headers['x-modern-treasury-api-key'][0]
    : req.headers['x-modern-treasury-api-key'];
  return { organizationID, apiKey };
};
