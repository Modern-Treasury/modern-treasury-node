# Changelog

## [2.0.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v1.7.0...v2.0.0) (2023-07-07)


### ⚠ BREAKING CHANGES

* import issue with ESM ([#125](https://github.com/Modern-Treasury/modern-treasury-node/issues/125))
* **api:** move some positional params to named params + updates ([#114](https://github.com/Modern-Treasury/modern-treasury-node/issues/114))
* **types:** singularize array item types ([#113](https://github.com/Modern-Treasury/modern-treasury-node/issues/113))

### Features

* **client:** add support for `defaultQuery` option ([#123](https://github.com/Modern-Treasury/modern-treasury-node/issues/123)) ([11b4a99](https://github.com/Modern-Treasury/modern-treasury-node/commit/11b4a996d71f3408ca0abeedba00ae0256cf8b41))
* support ESM and web platform runtimes; easier file uploads ([#115](https://github.com/Modern-Treasury/modern-treasury-node/issues/115)) ([3731360](https://github.com/Modern-Treasury/modern-treasury-node/commit/37313602c902d97e711b665ae13e3c9cd99b8b67))
* **types:** export nested types through the root client export ([#112](https://github.com/Modern-Treasury/modern-treasury-node/issues/112)) ([7c397ec](https://github.com/Modern-Treasury/modern-treasury-node/commit/7c397ecca2980a4ad27c64aeab56d6bab443bd48))


### Bug Fixes

* import issue with ESM ([#125](https://github.com/Modern-Treasury/modern-treasury-node/issues/125)) ([fd9dd7f](https://github.com/Modern-Treasury/modern-treasury-node/commit/fd9dd7fd5f1a8bddbc413a860e39ab1e3575421e))
* **types:** remove incorrect duplicated `Promise` from some return types ([#119](https://github.com/Modern-Treasury/modern-treasury-node/issues/119)) ([46c1cfd](https://github.com/Modern-Treasury/modern-treasury-node/commit/46c1cfdd2f6d3054196d294ca1089277bd67a1ba))


### Styles

* minor reordering of types and properties ([#116](https://github.com/Modern-Treasury/modern-treasury-node/issues/116)) ([80e1369](https://github.com/Modern-Treasury/modern-treasury-node/commit/80e13698da0bee33c8b9faffd28503334e725eff))


### Refactors

* **api:** move some positional params to named params + updates ([#114](https://github.com/Modern-Treasury/modern-treasury-node/issues/114)) ([dd9e4af](https://github.com/Modern-Treasury/modern-treasury-node/commit/dd9e4af80440725bc11e9e009e1775d2f81e1d88))
* mark `.responseHeaders` and `.response` as deprecated ([#128](https://github.com/Modern-Treasury/modern-treasury-node/issues/128)) ([08503ba](https://github.com/Modern-Treasury/modern-treasury-node/commit/08503ba167a477b9e257547673c007fb83db01fe))
* move to src directory, improve ecosystem compatibility ([#122](https://github.com/Modern-Treasury/modern-treasury-node/issues/122)) ([3fddc74](https://github.com/Modern-Treasury/modern-treasury-node/commit/3fddc743cb10ecc842214932368f586c3540a75d))
* **types:** singularize array item types ([#113](https://github.com/Modern-Treasury/modern-treasury-node/issues/113)) ([22e8dc7](https://github.com/Modern-Treasury/modern-treasury-node/commit/22e8dc72138abd4b5bc95fb9d4892e84d9658868))


### Chores

* **internal:** fix tsc usage ([#127](https://github.com/Modern-Treasury/modern-treasury-node/issues/127)) ([3f2b143](https://github.com/Modern-Treasury/modern-treasury-node/commit/3f2b143e18f1b0a5d95b74aae7d3a018ae2f1682))
* set `noEmit: true` in `tsconfig.json`, since it's for typechecking only ([#129](https://github.com/Modern-Treasury/modern-treasury-node/issues/129)) ([74e846d](https://github.com/Modern-Treasury/modern-treasury-node/commit/74e846d399b88ea0e002f20828378b2807cd34a9))
* speed up build script slightly ([#117](https://github.com/Modern-Treasury/modern-treasury-node/issues/117)) ([b5a2349](https://github.com/Modern-Treasury/modern-treasury-node/commit/b5a234978a1279b20fd9646e88f921b3dbeb010f))
* sync latest changes ([#109](https://github.com/Modern-Treasury/modern-treasury-node/issues/109)) ([5e5ddc5](https://github.com/Modern-Treasury/modern-treasury-node/commit/5e5ddc5b9ff9fdf8558f49494279e433467e758b))


### Documentation

* **api.md:** add context to types exported in a different resource ([#130](https://github.com/Modern-Treasury/modern-treasury-node/issues/130)) ([b409bd3](https://github.com/Modern-Treasury/modern-treasury-node/commit/b409bd3065b23ac3709f83f6feeef1653c946290))
* **api.md:** fix links not referencing `src` directory ([#124](https://github.com/Modern-Treasury/modern-treasury-node/issues/124)) ([5c29ed7](https://github.com/Modern-Treasury/modern-treasury-node/commit/5c29ed7505d376efb5d5621cca0040e04452d0ec))
* **api.md:** minor restructuring ([#120](https://github.com/Modern-Treasury/modern-treasury-node/issues/120)) ([e769fa6](https://github.com/Modern-Treasury/modern-treasury-node/commit/e769fa6b380b27a70476590610237cea1231c8f6))
* **client:** improve documentation for client options ([#126](https://github.com/Modern-Treasury/modern-treasury-node/issues/126)) ([4fc3b3c](https://github.com/Modern-Treasury/modern-treasury-node/commit/4fc3b3c3b7958b0dbbb2cb7fed6930f21b6cb8f9))
* rearrange sections in api.md ([#118](https://github.com/Modern-Treasury/modern-treasury-node/issues/118)) ([49ec081](https://github.com/Modern-Treasury/modern-treasury-node/commit/49ec0811327849d5f76ed0abf62f9d6a9005ace3))