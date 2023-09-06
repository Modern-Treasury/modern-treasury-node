# Modern Treasury Node API Library

[![NPM version](https://img.shields.io/npm/v/modern-treasury.svg)](https://npmjs.org/package/modern-treasury)

This library provides convenient access to the Modern Treasury Node REST API from server-side TypeScript or JavaScript.

The API documentation can be found [here](https://docs.moderntreasury.com).

## Installation

```sh
npm install --save modern-treasury
# or
yarn add modern-treasury
```

## Usage

The full API of this library can be found in [api.md](https://www.github.com/Modern-Treasury/modern-treasury-node/blob/master/api.md).

```js
import ModernTreasury from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'my api key', // defaults to process.env["MODERN_TREASURY_API_KEY"]
  organizationId: 'my-organization-ID',
});

async function main() {
  const externalAccount = await modernTreasury.externalAccounts.create({
    counterparty_id: '9eba513a-53fd-4d6d-ad52-ccce122ab92a',
    name: 'my bank',
  });

  console.log(externalAccount.id);
}

main();
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

```ts
import ModernTreasury from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'my api key', // defaults to process.env["MODERN_TREASURY_API_KEY"]
  organizationId: 'my-organization-ID',
});

async function main() {
  const params: ModernTreasury.ExternalAccountCreateParams = {
    counterparty_id: '9eba513a-53fd-4d6d-ad52-ccce122ab92a',
    name: 'my bank',
  };
  const externalAccount: ModernTreasury.ExternalAccount = await modernTreasury.externalAccounts.create(
    params,
  );
}

main();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## File Uploads

Request parameters that correspond to file uploads can be passed in many different forms:

- `File` (or an object with the same structure)
- a `fetch` `Response` (or an object with the same structure)
- an `fs.ReadStream`
- the return value of our `toFile` helper

```ts
import fs from 'fs';
import fetch from 'node-fetch';
import ModernTreasury, { toFile } from 'modern-treasury';

const modernTreasury = new ModernTreasury();

// If you have access to Node `fs` we recommend using `fs.createReadStream()`:
await modernTreasury.documents.create({
  documentable_id: '24c6b7a3-02...',
  documentable_type: 'counterparties',
  file: fs.createReadStream('my/file.txt'),
});

// Or if you have the web `File` API you can pass a `File` instance:
await modernTreasury.documents.create({
  documentable_id: '24c6b7a3-02...',
  documentable_type: 'counterparties',
  file: new File(['my bytes'], 'file.txt'),
});

// You can also pass a `fetch` `Response`:
await modernTreasury.documents.create({
  documentable_id: '24c6b7a3-02...',
  documentable_type: 'counterparties',
  file: await fetch('https://somesite/file.txt'),
});

// Finally, if none of the above are convenient, you can use our `toFile` helper:
await modernTreasury.documents.create({
  documentable_id: '24c6b7a3-02...',
  documentable_type: 'counterparties',
  file: await toFile(Buffer.from('my bytes'), 'file.txt'),
});
await modernTreasury.documents.create({
  documentable_id: '24c6b7a3-02...',
  documentable_type: 'counterparties',
  file: await toFile(new Uint8Array([0, 1, 2]), 'file.txt'),
});
```

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
async function main() {
  const externalAccount = await modernTreasury.externalAccounts
    .create({ counterparty_id: 'missing' })
    .catch((err) => {
      if (err instanceof ModernTreasury.APIError) {
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError

        console.log(err.headers); // {server: 'nginx', ...}
      } else {
        throw err;
      }
    });
}

main();
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 409 Conflict, 429 Rate Limit,
and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const modernTreasury = new ModernTreasury({
  maxRetries: 0, // default is 2
  organizationId: 'my-organization-ID',
});

// Or, configure per-request:
await modernTreasury.externalAccounts.list({
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const modernTreasury = new ModernTreasury({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
  organizationId: 'my-organization-ID',
});

// Override per-request:
await modernTreasury.externalAccounts.list({ party_name: 'my bank' }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the ModernTreasury API are paginated.
You can use `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllExternalAccounts(params) {
  const allExternalAccounts = [];
  // Automatically fetches more pages as needed.
  for await (const externalAccount of modernTreasury.externalAccounts.list()) {
    allExternalAccounts.push(externalAccount);
  }
  return allExternalAccounts;
}
```

Alternatively, you can make request a single page at a time:

```ts
let page = await modernTreasury.externalAccounts.list();
for (const externalAccount of page.items) {
  console.log(externalAccount);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
  page = page.getNextPage();
  // ...
}
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.

```ts
const modernTreasury = new ModernTreasury();

const response = await modernTreasury.externalAccounts
  .create({ counterparty_id: '9eba513a-53fd-4d6d-ad52-ccce122ab92a', name: 'my bank' })
  .asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: externalAccounts, response: raw } = await modernTreasury.externalAccounts
  .create({ counterparty_id: '9eba513a-53fd-4d6d-ad52-ccce122ab92a', name: 'my bank' })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(externalAccounts.id);
```

## Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import HttpsProxyAgent from 'https-proxy-agent';

// Configure the default for all requests:
const modernTreasury = new ModernTreasury({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
  organizationId: 'my-organization-ID',
});

// Override per-request:
await modernTreasury.externalAccounts.list({
  baseURL: 'http://localhost:8080/test-api',
  httpAgent: new http.Agent({ keepAlive: false }),
})
```

## Semantic Versioning

This package generally attempts to follow [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/Modern-Treasury/modern-treasury-node/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.5 is supported.

The following runtimes are supported:

- Node.js 16 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher, using `import ModernTreasury from "npm:modern-treasury"`.
  Deno Deploy is not yet supported.
- Cloudflare Workers.
- Vercel Edge Runtime.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.
