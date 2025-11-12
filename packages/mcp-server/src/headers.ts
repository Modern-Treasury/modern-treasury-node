// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'modern-treasury';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Basic':
        const rawValue = Buffer.from(value, 'base64').toString();
        return {
          organizationID: rawValue.slice(0, rawValue.search(':')),
          apiKey: rawValue.slice(rawValue.search(':') + 1),
        };
      default:
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Basic).',
        );
    }
  }

  const organizationID =
    Array.isArray(req.headers['x-modern-treasury-organization-id']) ?
      req.headers['x-modern-treasury-organization-id'][0]
    : req.headers['x-modern-treasury-organization-id'];
  const apiKey =
    Array.isArray(req.headers['x-modern-treasury-api-key']) ?
      req.headers['x-modern-treasury-api-key'][0]
    : req.headers['x-modern-treasury-api-key'];
  return { organizationID, apiKey };
};
