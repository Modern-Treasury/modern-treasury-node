# Migration guide

This guide outlines the changes and steps needed to migrate your codebase to the latest version of the Modern Treasury TypeScript SDK.

The main changes are that the SDK now relies on the [builtin Web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of `node-fetch` and has zero dependencies.

## Migration CLI

Most programs will only need minimal changes, but to assist there is a migration tool that will automatically update your code for the new version.
To use it, upgrade the `modern-treasury` package, then run `./node_modules/.bin/modern-treasury migrate ./your/src/folders` to update your code.
To preview the changes without writing them to disk, run the tool with `--dry`.

## Environment requirements

The minimum supported runtime and tooling versions are now:

- Node.js 20 LTS (Most recent non-EOL Node version)
- TypeScript 4.9
- Jest 28

## Breaking changes

### Web types for `withResponse`, `asResponse`, and `APIError.headers`

Because we now use the builtin Web fetch API on all platforms, if you wrote code that used `withResponse` or `asResponse` and then accessed `node-fetch`-specific properties on the result, you will need to switch to standardized alternatives.
For example, `body` is now a [Web `ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) rather than a [node `Readable`](https://nodejs.org/api/stream.html#readable-streams).

```ts
// Before:
const res = await client.example.retrieve('string/with/slash').asResponse();
res.body.pipe(process.stdout);

// After:
import { Readable } from 'node:stream';
const res = await client.example.retrieve('string/with/slash').asResponse();
Readable.fromWeb(res.body).pipe(process.stdout);
```

Additionally, the `headers` property on `APIError` objects is now an instance of the Web [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) class. It was previously defined as `Record<string, string | null | undefined>`.

### Named path parameters

Methods that take multiple path parameters typically now use named instead of positional arguments for better clarity and to prevent a footgun where it was easy to accidentally pass arguments in the incorrect order.

For example, for a method that would call an endpoint at `/v1/parents/{parent_id}/children/{child_id}`, only the _last_ path parameter is positional and the rest must be passed as named arguments.

```ts
// Before
client.parents.children.retrieve('p_123', 'c_456');

// After
client.parents.children.retrieve('c_456', { parent_id: 'p_123' });
```

<details>

<summary>This affects the following methods</summary>

- `client.invoices.addPaymentOrder()`
- `client.invoices.lineItems.retrieve()`
- `client.invoices.lineItems.update()`
- `client.invoices.lineItems.delete()`
- `client.accountDetails.create()`
- `client.accountDetails.retrieve()`
- `client.accountDetails.list()`
- `client.accountDetails.delete()`
- `client.routingDetails.create()`
- `client.routingDetails.retrieve()`
- `client.routingDetails.list()`
- `client.routingDetails.delete()`
- `client.internalAccounts.updateAccountCapability()`
- `client.internalAccounts.balanceReports.retrieve()`
- `client.internalAccounts.balanceReports.delete()`
- `client.ledgerAccountCategories.addLedgerAccount()`
- `client.ledgerAccountCategories.addNestedCategory()`
- `client.ledgerAccountCategories.removeLedgerAccount()`
- `client.ledgerAccountCategories.removeNestedCategory()`
- `client.lineItems.retrieve()`
- `client.lineItems.update()`
- `client.lineItems.list()`
- `client.paymentOrders.reversals.retrieve()`

</details>

### URI encoded path parameters

Path params are now properly encoded by default. If you were manually encoding path parameters before giving them to the SDK, you must now stop doing that and pass the
param without any encoding applied.

For example:

```diff
- client.example.retrieve(encodeURIComponent('string/with/slash'))
+ client.example.retrieve('string/with/slash') // retrieves /example/string%2Fwith%2Fslash
```

Previously without the `encodeURIComponent()` call we would have used the path `/example/string/with/slash`; now we'll use `/example/string%2Fwith%2Fslash`.

### Removed request options overloads

When making requests with no required body, query or header parameters, you must now explicitly pass `null`, `undefined` or an empty object `{}` to the params argument in order to customise request options.

```diff
client.example.list();
client.example.list({}, { headers: { ... } });
client.example.list(null, { headers: { ... } });
client.example.list(undefined, { headers: { ... } });
- client.example.list({ headers: { ... } });
+ client.example.list({}, { headers: { ... } });
```

<details>

<summary>This affects the following methods</summary>

- `client.connections.list()`
- `client.counterparties.update()`
- `client.counterparties.list()`
- `client.events.list()`
- `client.expectedPayments.create()`
- `client.expectedPayments.update()`
- `client.expectedPayments.list()`
- `client.externalAccounts.update()`
- `client.externalAccounts.list()`
- `client.externalAccounts.completeVerification()`
- `client.incomingPaymentDetails.update()`
- `client.incomingPaymentDetails.list()`
- `client.incomingPaymentDetails.createAsync()`
- `client.invoices.update()`
- `client.invoices.list()`
- `client.invoices.lineItems.list()`
- `client.documents.list()`
- `client.accountCollectionFlows.list()`
- `client.internalAccounts.update()`
- `client.internalAccounts.list()`
- `client.internalAccounts.balanceReports.list()`
- `client.ledgers.update()`
- `client.ledgers.list()`
- `client.ledgerAccountCategories.retrieve()`
- `client.ledgerAccountCategories.update()`
- `client.ledgerAccountCategories.list()`
- `client.ledgerAccounts.retrieve()`
- `client.ledgerAccounts.update()`
- `client.ledgerAccounts.list()`
- `client.ledgerAccountBalanceMonitors.update()`
- `client.ledgerAccountBalanceMonitors.list()`
- `client.ledgerEntries.retrieve()`
- `client.ledgerEntries.update()`
- `client.ledgerEntries.list()`
- `client.ledgerTransactions.update()`
- `client.ledgerTransactions.list()`
- `client.ledgerTransactions.createReversal()`
- `client.ledgerTransactions.versions.list()`
- `client.paymentFlows.list()`
- `client.paymentOrders.update()`
- `client.paymentOrders.list()`
- `client.paymentOrders.reversals.list()`
- `client.paymentReferences.list()`
- `client.returns.list()`
- `client.transactions.update()`
- `client.transactions.list()`
- `client.transactions.lineItems.list()`
- `client.virtualAccounts.update()`
- `client.virtualAccounts.list()`
- `client.bulkRequests.list()`
- `client.bulkResults.list()`
- `client.ledgerAccountSettlements.update()`
- `client.ledgerAccountSettlements.list()`
- `client.foreignExchangeQuotes.list()`
- `client.connectionLegalEntities.update()`
- `client.connectionLegalEntities.list()`
- `client.legalEntities.update()`
- `client.legalEntities.list()`
- `client.paymentActions.list()`

</details>

### Removed `httpAgent` in favor of `fetchOptions`

The `httpAgent` client option has been removed in favor of a [platform-specific `fetchOptions` property](https://github.com/Modern-Treasury/modern-treasury-node#fetch-options).
This change was made as `httpAgent` relied on `node:http` agents which are not supported by any runtime's builtin fetch implementation.

If you were using `httpAgent` for proxy support, check out the [new proxy documentation](https://github.com/Modern-Treasury/modern-treasury-node#configuring-proxies).

Before:

```ts
import ModernTreasury from 'modern-treasury';
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new ModernTreasury({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});
```

After:

```ts
import ModernTreasury from 'modern-treasury';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent(process.env.PROXY_URL);
const client = new ModernTreasury({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

### Changed exports

#### Refactor of `modern-treasury/core`, `error`, `pagination`, `resource` and `uploads`

Much of the `modern-treasury/core` file was intended to be internal-only but it was publicly accessible, as such it has been refactored and split up into internal and public files, with public-facing code moved to a new `core` folder and internal code moving to the private `internal` folder.

At the same time, we moved some public-facing files which were previously at the top level into `core` to make the file structure cleaner and more clear:

```typescript
// Before
import 'modern-treasury/error';
import 'modern-treasury/pagination';
import 'modern-treasury/resource';
import 'modern-treasury/uploads';

// After
import 'modern-treasury/core/error';
import 'modern-treasury/core/pagination';
import 'modern-treasury/core/resource';
import 'modern-treasury/core/uploads';
```

If you were relying on anything that was only exported from `modern-treasury/core` and is also not accessible anywhere else, please open an issue and we'll consider adding it to the public API.

#### Resource classes

Previously under certain circumstances it was possible to import resource classes like `Connections` directly from the root of the package. This was never valid at the type level and only worked in CommonJS files.
Now you must always either reference them as static class properties or import them directly from the files in which they are defined.

```typescript
// Before
const { Connections } = require('modern-treasury');

// After
const { ModernTreasury } = require('modern-treasury');
ModernTreasury.Connections; // or import directly from modern-treasury/resources/connections
```

#### Cleaned up `uploads` exports

As part of the `core` refactor, `modern-treasury/uploads` was moved to `modern-treasury/core/uploads`
and the following exports were removed, as they were not intended to be a part of the public API:

- `fileFromPath`
- `BlobPart`
- `BlobLike`
- `FileLike`
- `ResponseLike`
- `isResponseLike`
- `isBlobLike`
- `isFileLike`
- `isUploadable`
- `isMultipartBody`
- `maybeMultipartFormRequestOptions`
- `multipartFormRequestOptions`
- `createForm`

Note that `Uploadable` & `toFile` **are** still exported:

```typescript
import { type Uploadable, toFile } from 'modern-treasury/core/uploads';
```

#### `APIClient`

The `APIClient` base client class has been removed as it is no longer needed. If you were importing this class then you must now import the main client class:

```typescript
// Before
import { APIClient } from 'modern-treasury/core';

// After
import { ModernTreasury } from 'modern-treasury';
```

### File handling

The deprecated `fileFromPath` helper has been removed in favor of native Node.js streams:

```ts
// Before
ModernTreasury.fileFromPath('path/to/file');

// After
import fs from 'fs';
fs.createReadStream('path/to/file');
```

Note that this function previously only worked on Node.js. If you're using Bun, you can use [`Bun.file`](https://bun.sh/docs/api/file-io) instead.

### Shims removal

Previously you could configure the types that the SDK used like this:

```ts
// Tell TypeScript and the package to use the global Web fetch instead of node-fetch.
import 'modern-treasury/shims/web';
import ModernTreasury from 'modern-treasury';
```

The `modern-treasury/shims` imports have been removed. Your global types must now be [correctly configured](#minimum-types-requirements).

### Pagination changes

The `for await` syntax **is not affected**. This still works as-is:

```ts
// Automatically fetches more pages as needed.
for await (const counterparty of client.counterparties.list()) {
  console.log(counterparty);
}
```

The interface for manually paginating through list results has been simplified:

```ts
// Before
page.nextPageParams();
page.nextPageInfo();
// Required manually handling { url } | { params } type

// After
page.nextPageRequestOptions();
```

#### Removed unnecessary classes

Page classes for individual methods are now type aliases:

```ts
// Before
export class CounterpartiesPage extends Page<Counterparty> {}

// After
export type CounterpartiesPage = Page<Counterparty>;
```

If you were importing these classes at runtime, you'll need to switch to importing the base class or only import them at the type-level.

### `modern-treasury/src` directory removed

Previously IDEs may have auto-completed imports from the `modern-treasury/src` directory, however this
directory was only included for an improved go-to-definition experience and should not have been used at runtime.

If you have any `modern-treasury/src/*` imports, you will need to replace them with `modern-treasury/*`.

```ts
// Before
import ModernTreasury from 'modern-treasury/src';

// After
import ModernTreasury from 'modern-treasury';
```

## TypeScript troubleshooting

When referencing the library after updating, you may encounter new type errors related to JS features like private properties or fetch classes like Request, Response, and Headers.
To resolve these issues, configure your tsconfig.json and install the appropriate `@types` packages for your runtime environment using the guidelines below:

### Browsers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["DOM", "DOM.Iterable", "ES2018"]
}
```

### Node.js

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/node": ">= 20"
  }
}
```

### Cloudflare Workers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["ES2020"], // <- needed by @cloudflare/workers-types
  "types": ["@cloudflare/workers-types"]
}
```

`package.json`

```json
{
  "devDependencies": {
    "@cloudflare/workers-types": ">= 0.20221111.0"
  }
}
```

### Bun

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/bun": ">= 1.2.0"
  }
}
```
