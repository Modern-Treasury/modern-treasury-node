# Changelog

## 2.11.0 (2023-11-14)

Full Changelog: [v2.10.0...v2.11.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.10.0...v2.11.0)

### Features

* **api:** add dk_interbank_clearing_code and dk_nets enum members ([#283](https://github.com/Modern-Treasury/modern-treasury-node/issues/283)) ([f833e0d](https://github.com/Modern-Treasury/modern-treasury-node/commit/f833e0de66bbdb4ea6673071ce886cdda5a51447))
* **api:** updates ([#281](https://github.com/Modern-Treasury/modern-treasury-node/issues/281)) ([fe78a82](https://github.com/Modern-Treasury/modern-treasury-node/commit/fe78a8214edf98798232e72c237f4a1ad6e26d43))


### Chores

* **internal:** skip bulk requests tests ([#284](https://github.com/Modern-Treasury/modern-treasury-node/issues/284)) ([7662f86](https://github.com/Modern-Treasury/modern-treasury-node/commit/7662f867923d2626bbbf4494941c38f2c7cdf05e))
* **internal:** update APIResource structure ([#285](https://github.com/Modern-Treasury/modern-treasury-node/issues/285)) ([d391c7f](https://github.com/Modern-Treasury/modern-treasury-node/commit/d391c7fd5c3cc568e419def94e52a617c097f2a8))

## 2.10.0 (2023-11-07)

Full Changelog: [v2.9.0...v2.10.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.9.0...v2.10.0)

### Features

* **client:** allow binary returns ([#274](https://github.com/Modern-Treasury/modern-treasury-node/issues/274)) ([b45f08d](https://github.com/Modern-Treasury/modern-treasury-node/commit/b45f08dbec40e80a8540628d33aa8836a042b8b3))


### Chores

* **ci:** update release-please config ([#278](https://github.com/Modern-Treasury/modern-treasury-node/issues/278)) ([493cc4b](https://github.com/Modern-Treasury/modern-treasury-node/commit/493cc4b7f4a91bdeb9df30556ac557e1c0ce0c66))
* **docs:** fix github links ([#279](https://github.com/Modern-Treasury/modern-treasury-node/issues/279)) ([4305621](https://github.com/Modern-Treasury/modern-treasury-node/commit/4305621c54cffe956273da80bd1418384b204d96))
* **internal:** update tsconfig ([#280](https://github.com/Modern-Treasury/modern-treasury-node/issues/280)) ([2389558](https://github.com/Modern-Treasury/modern-treasury-node/commit/2389558af8f124c56352da82310660dfb485f7c5))


### Documentation

* document customizing fetch ([#276](https://github.com/Modern-Treasury/modern-treasury-node/issues/276)) ([f65af0a](https://github.com/Modern-Treasury/modern-treasury-node/commit/f65af0abc1b4d22d3acfba8d3322d95fa662db7e))
* **readme:** remove redundant whitespace ([#277](https://github.com/Modern-Treasury/modern-treasury-node/issues/277)) ([6b1674d](https://github.com/Modern-Treasury/modern-treasury-node/commit/6b1674df348afc4068f811f42dbc8c72913ab104))

## 2.9.0 (2023-10-31)

Full Changelog: [v2.8.0...v2.9.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.8.0...v2.9.0)

### Features

* **api:** updates ([#271](https://github.com/Modern-Treasury/modern-treasury-node/issues/271)) ([e7341c5](https://github.com/Modern-Treasury/modern-treasury-node/commit/e7341c5150cfe3d77e712c3314deee3fc7dc7472))
* **github:** include a devcontainer setup ([#273](https://github.com/Modern-Treasury/modern-treasury-node/issues/273)) ([077d2f7](https://github.com/Modern-Treasury/modern-treasury-node/commit/077d2f7a42d38749a9bb49eb6c788a142b4cc969))


### Bug Fixes

* typo in build script ([#270](https://github.com/Modern-Treasury/modern-treasury-node/issues/270)) ([b8d797b](https://github.com/Modern-Treasury/modern-treasury-node/commit/b8d797bae6e53090be5f30f1d13003ca873b64e7))


### Chores

* **internal:** update gitignore ([#272](https://github.com/Modern-Treasury/modern-treasury-node/issues/272)) ([6204f12](https://github.com/Modern-Treasury/modern-treasury-node/commit/6204f1279d1f36edd1dd80efb042cecdee367d7d))

## 2.8.0 (2023-10-24)

Full Changelog: [v2.7.2...v2.8.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.7.2...v2.8.0)

### Features

* **api:** updates ([#266](https://github.com/Modern-Treasury/modern-treasury-node/issues/266)) ([53bd88a](https://github.com/Modern-Treasury/modern-treasury-node/commit/53bd88a4045e1becbb2e6b75c548801959cbe7ae))
* **client:** adjust retry behavior to be exponential backoff ([#267](https://github.com/Modern-Treasury/modern-treasury-node/issues/267)) ([926baf6](https://github.com/Modern-Treasury/modern-treasury-node/commit/926baf6df118d0b0f5cd857d619662f3dd5bfae0))
* handle 204 No Content gracefully ([#264](https://github.com/Modern-Treasury/modern-treasury-node/issues/264)) ([2fd00e6](https://github.com/Modern-Treasury/modern-treasury-node/commit/2fd00e6611df803eb50caee77bb5bcffed189f2c))
* make webhook headers case insensitive ([#256](https://github.com/Modern-Treasury/modern-treasury-node/issues/256)) ([c838d5c](https://github.com/Modern-Treasury/modern-treasury-node/commit/c838d5c0a0502487116caecfaae720b4a6ceb4d3))
* **types:** consolidate direction enums into a shared TransactionDirection type ([#259](https://github.com/Modern-Treasury/modern-treasury-node/issues/259)) ([b63fb03](https://github.com/Modern-Treasury/modern-treasury-node/commit/b63fb03c6e28f0255bf7dd6d6db766c294c52343))


### Bug Fixes

* **api:** use date-time for effective_at ([#265](https://github.com/Modern-Treasury/modern-treasury-node/issues/265)) ([d9a8150](https://github.com/Modern-Treasury/modern-treasury-node/commit/d9a8150cc051579560b98fbc249482dd929a4519))
* **client:** eliminate circular imports, which cause runtime errors in webpack dev bundles ([#249](https://github.com/Modern-Treasury/modern-treasury-node/issues/249)) ([cad5c73](https://github.com/Modern-Treasury/modern-treasury-node/commit/cad5c73020b30cbe9879ebf1673bbaaf71655abd))
* fix namespace exports regression ([#251](https://github.com/Modern-Treasury/modern-treasury-node/issues/251)) ([f7f367c](https://github.com/Modern-Treasury/modern-treasury-node/commit/f7f367ce6b33fb146b5f43ffc37704be62a94ee9))
* import web-streams-polyfill without overriding globals ([#262](https://github.com/Modern-Treasury/modern-treasury-node/issues/262)) ([d83ec78](https://github.com/Modern-Treasury/modern-treasury-node/commit/d83ec78c9a48c5219e192c645fb24ea184758565))
* improve status code in error messages ([#260](https://github.com/Modern-Treasury/modern-treasury-node/issues/260)) ([b2e8b90](https://github.com/Modern-Treasury/modern-treasury-node/commit/b2e8b9009c972d92df628c68f97fa937ca41ab3b))


### Chores

* **internal:** refactor status code printing in error ([#253](https://github.com/Modern-Treasury/modern-treasury-node/issues/253)) ([8478f61](https://github.com/Modern-Treasury/modern-treasury-node/commit/8478f614668237dd16a59672166c24ffb959bf6e))
* update comment ([#257](https://github.com/Modern-Treasury/modern-treasury-node/issues/257)) ([57b558a](https://github.com/Modern-Treasury/modern-treasury-node/commit/57b558af74756719bf33f0e9b594b0bb20d26a4e))
* update README ([#252](https://github.com/Modern-Treasury/modern-treasury-node/issues/252)) ([f3983f1](https://github.com/Modern-Treasury/modern-treasury-node/commit/f3983f16925e6781b7a4213512cc689f1e613962))


### Documentation

* organisation -&gt; organization (UK to US English) ([#261](https://github.com/Modern-Treasury/modern-treasury-node/issues/261)) ([c9fb49b](https://github.com/Modern-Treasury/modern-treasury-node/commit/c9fb49b747e62ee4419e394db4461e9a905bea90))


### Refactors

* **test:** refactor authentication tests ([#254](https://github.com/Modern-Treasury/modern-treasury-node/issues/254)) ([bfaebfd](https://github.com/Modern-Treasury/modern-treasury-node/commit/bfaebfdb7300adefbb72fef6e21a34a096ff1650))

## 2.7.2 (2023-10-06)

Full Changelog: [v2.7.1...v2.7.2](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.7.1...v2.7.2)

### Bug Fixes

* prevent ReferenceError, update compatibility to ES2020 and Node 18+ ([#248](https://github.com/Modern-Treasury/modern-treasury-node/issues/248)) ([03620a3](https://github.com/Modern-Treasury/modern-treasury-node/commit/03620a3d8c24e203b98352554b4c88e7b051345a))

## 2.7.1 (2023-10-02)

Full Changelog: [v2.7.0...v2.7.1](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.7.0...v2.7.1)

### Chores

* **internal:** update lock file ([#244](https://github.com/Modern-Treasury/modern-treasury-node/issues/244)) ([088933a](https://github.com/Modern-Treasury/modern-treasury-node/commit/088933ab6558f327a988d539bfc183f9807968c1))

## 2.7.0 (2023-09-25)

Full Changelog: [v2.6.0...v2.7.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.6.0...v2.7.0)

### Features

* **client:** handle retry-after with a date ([#242](https://github.com/Modern-Treasury/modern-treasury-node/issues/242)) ([ca21e25](https://github.com/Modern-Treasury/modern-treasury-node/commit/ca21e25f68698fdc6d2ed57d7cdf3cb54498bd82))
* **client:** support importing node or web shims manually ([#238](https://github.com/Modern-Treasury/modern-treasury-node/issues/238)) ([ce14a0e](https://github.com/Modern-Treasury/modern-treasury-node/commit/ce14a0e1c74e115c77630d8d404c0e57c29c49de))
* **package:** export a root error type ([#241](https://github.com/Modern-Treasury/modern-treasury-node/issues/241)) ([c8b64f9](https://github.com/Modern-Treasury/modern-treasury-node/commit/c8b64f9ffdc28b63ecc7c7f4609742ca76180b94))


### Documentation

* **api.md:** add shared models ([#240](https://github.com/Modern-Treasury/modern-treasury-node/issues/240)) ([1a30c77](https://github.com/Modern-Treasury/modern-treasury-node/commit/1a30c779072efc9138105880419c4d22957943db))
* **README:** fix variable names in some examples ([#239](https://github.com/Modern-Treasury/modern-treasury-node/issues/239)) ([4a4178f](https://github.com/Modern-Treasury/modern-treasury-node/commit/4a4178f335ac2c67719254f85d0b03e826ab86a3))
* **readme:** remove incorrect wording in opening ([#236](https://github.com/Modern-Treasury/modern-treasury-node/issues/236)) ([8098776](https://github.com/Modern-Treasury/modern-treasury-node/commit/8098776cb99957b789f4a0dda6fa185b8cc7c069))

## 2.6.0 (2023-09-19)

Full Changelog: [v2.5.0...v2.6.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.5.0...v2.6.0)

### Features

* **api:** updates ([#235](https://github.com/Modern-Treasury/modern-treasury-node/issues/235)) ([ce16952](https://github.com/Modern-Treasury/modern-treasury-node/commit/ce16952f489ab95028a1678b2b61dc9b3bfc498c))
* **client:** retry on 408 Request Timeout ([#229](https://github.com/Modern-Treasury/modern-treasury-node/issues/229)) ([bb3c483](https://github.com/Modern-Treasury/modern-treasury-node/commit/bb3c483e8f4e4d0ab39b72b364937906b51bbea1))
* **errors:** add status code to error message ([#234](https://github.com/Modern-Treasury/modern-treasury-node/issues/234)) ([c2d9f18](https://github.com/Modern-Treasury/modern-treasury-node/commit/c2d9f182986dbfa5fa0e4853b08e730cf56219e0))


### Documentation

* declare Bun 1.0 officially supported ([#233](https://github.com/Modern-Treasury/modern-treasury-node/issues/233)) ([ecaf5b8](https://github.com/Modern-Treasury/modern-treasury-node/commit/ecaf5b81c3522e4b28e10d015dc2377f67b8c626))

## 2.5.0 (2023-09-08)

Full Changelog: [v2.4.0...v2.5.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.4.0...v2.5.0)

### Features

* fixes tests where an array has to have unique enum values ([#221](https://github.com/Modern-Treasury/modern-treasury-node/issues/221)) ([0aa1909](https://github.com/Modern-Treasury/modern-treasury-node/commit/0aa190930b6dbed836dbcd291b5cd099aa6c1ff5))


### Bug Fixes

* fix module not found errors in Vercel edge ([#227](https://github.com/Modern-Treasury/modern-treasury-node/issues/227)) ([554b457](https://github.com/Modern-Treasury/modern-treasury-node/commit/554b4576ebef5bd9145d9eb117ea415140eeed42))
* **readme:** update link to api.md to use the correct branch ([#224](https://github.com/Modern-Treasury/modern-treasury-node/issues/224)) ([902b8aa](https://github.com/Modern-Treasury/modern-treasury-node/commit/902b8aa4e846c85fa15c4fa6a335e07d76b53fb8))


### Chores

* **internal:** export helper from core ([#225](https://github.com/Modern-Treasury/modern-treasury-node/issues/225)) ([01dc5e2](https://github.com/Modern-Treasury/modern-treasury-node/commit/01dc5e287392d627366d1e47098b1fc4d17e369d))
* **internal:** minor formatting changes ([#226](https://github.com/Modern-Treasury/modern-treasury-node/issues/226)) ([08d6cc7](https://github.com/Modern-Treasury/modern-treasury-node/commit/08d6cc774e89c12585e22f845ff93eccc53c8b8a))


### Documentation

* **readme:** add link to api.md ([#223](https://github.com/Modern-Treasury/modern-treasury-node/issues/223)) ([34b5da6](https://github.com/Modern-Treasury/modern-treasury-node/commit/34b5da6163b16df8a0f10a9b4136bc84025ac293))

## 2.4.0 (2023-09-05)

Full Changelog: [v2.3.0...v2.4.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.3.0...v2.4.0)

### Features

* **client:** improve compatibility with Bun ([#204](https://github.com/Modern-Treasury/modern-treasury-node/issues/204)) ([1248e3a](https://github.com/Modern-Treasury/modern-treasury-node/commit/1248e3afb21ce1a2cdf1524094f4a2ecd4718c45))
* **docs:** add documentation to the client constructor ([#203](https://github.com/Modern-Treasury/modern-treasury-node/issues/203)) ([e558d7b](https://github.com/Modern-Treasury/modern-treasury-node/commit/e558d7b0fcaa7cd3be30b224058d56c3b3f4e882))
* **package:** add Bun export map ([#215](https://github.com/Modern-Treasury/modern-treasury-node/issues/215)) ([e796a08](https://github.com/Modern-Treasury/modern-treasury-node/commit/e796a0801f5b6d18d9b3fc67db290af0e67fbb23))
* **types:** export RequestOptions type ([#209](https://github.com/Modern-Treasury/modern-treasury-node/issues/209)) ([0b46351](https://github.com/Modern-Treasury/modern-treasury-node/commit/0b463516c8fe941cb66adb56ab9f922e43ffeca8))
* **types:** remove incorrectly included Idempotency-Key param ([#218](https://github.com/Modern-Treasury/modern-treasury-node/issues/218)) ([905b43e](https://github.com/Modern-Treasury/modern-treasury-node/commit/905b43e16f599be6ec6f542da435ea68ecca5334))


### Bug Fixes

* **client:** fix TS errors that appear when users Go to Source in VSCode ([#219](https://github.com/Modern-Treasury/modern-treasury-node/issues/219)) ([de2b2a1](https://github.com/Modern-Treasury/modern-treasury-node/commit/de2b2a17f7b5d2ae7c8af4154fca52c371cfa9a2))
* **client:** fix TypeError when a request gets retried ([#201](https://github.com/Modern-Treasury/modern-treasury-node/issues/201)) ([ad59570](https://github.com/Modern-Treasury/modern-treasury-node/commit/ad59570a2801c4d393b3802decd880e1743f05a7))
* **client:** handle case where the client is instantiated with a undefined baseURL ([#220](https://github.com/Modern-Treasury/modern-treasury-node/issues/220)) ([894890e](https://github.com/Modern-Treasury/modern-treasury-node/commit/894890e6c584c607092f71eeb9ad31a2fa5e3706))
* **client:** use explicit file extensions in _shims imports ([#217](https://github.com/Modern-Treasury/modern-treasury-node/issues/217)) ([15df031](https://github.com/Modern-Treasury/modern-treasury-node/commit/15df03142c07c7ab1d2a0d983df67c8fb23bbdeb))
* **core:** fix navigator check for strange environments ([#207](https://github.com/Modern-Treasury/modern-treasury-node/issues/207)) ([2b6e569](https://github.com/Modern-Treasury/modern-treasury-node/commit/2b6e5695c924f779825de7464c3d9aba821ab266))
* **types:** improve getNextPage() return type ([#214](https://github.com/Modern-Treasury/modern-treasury-node/issues/214)) ([eb7e51f](https://github.com/Modern-Treasury/modern-treasury-node/commit/eb7e51fbf51ce3771a382cee983f540c089bea18))


### Chores

* **ci:** setup workflows to create releases and release PRs ([#212](https://github.com/Modern-Treasury/modern-treasury-node/issues/212)) ([fb97629](https://github.com/Modern-Treasury/modern-treasury-node/commit/fb9762939152c2752365ac4b044851f07bc69b70))
* **internal:** add helper method ([#211](https://github.com/Modern-Treasury/modern-treasury-node/issues/211)) ([a9d85e6](https://github.com/Modern-Treasury/modern-treasury-node/commit/a9d85e6edf6cf503b29c51e704514cbd952556fb))
* **internal:** add missing eslint-plugin-prettier ([#206](https://github.com/Modern-Treasury/modern-treasury-node/issues/206)) ([baa9264](https://github.com/Modern-Treasury/modern-treasury-node/commit/baa926436226ba74cafc24937261e10d853fb0db))
* **internal:** export HeadersInit type shim ([#210](https://github.com/Modern-Treasury/modern-treasury-node/issues/210)) ([a5e0cfe](https://github.com/Modern-Treasury/modern-treasury-node/commit/a5e0cfe4b3025d5263b5739d6a59bb5f519628a8))
* **internal:** minor reformatting of code ([#205](https://github.com/Modern-Treasury/modern-treasury-node/issues/205)) ([709c87f](https://github.com/Modern-Treasury/modern-treasury-node/commit/709c87ffe9130a6191ed145a57c0f16398a62bb8))

## [2.3.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.2.0...v2.3.0) (2023-08-15)


### ⚠ BREAKING CHANGES

* **client:** support accessing raw response + remove deprecated features ([#191](https://github.com/Modern-Treasury/modern-treasury-node/issues/191))

### Features

* allow a default timeout to be set for clients ([#196](https://github.com/Modern-Treasury/modern-treasury-node/issues/196)) ([5403497](https://github.com/Modern-Treasury/modern-treasury-node/commit/54034973c70908750a4cc53130782d247bde6e5f))
* **api:** add `metadata` in several places it was missing; add `description` ([#179](https://github.com/Modern-Treasury/modern-treasury-node/issues/179)) ([639f25b](https://github.com/Modern-Treasury/modern-treasury-node/commit/639f25ba064edf2ab637f572a803fd3b7d59087b))
* **api:** support multiple `id`s in `ledger` `retrieve`/`list` endpoints ([#194](https://github.com/Modern-Treasury/modern-treasury-node/issues/194)) ([a8a1a87](https://github.com/Modern-Treasury/modern-treasury-node/commit/a8a1a879d41da3cefce4acdfa5f4951e01a0399c))
* **api:** updates ([#180](https://github.com/Modern-Treasury/modern-treasury-node/issues/180)) ([24c193d](https://github.com/Modern-Treasury/modern-treasury-node/commit/24c193d346a555d5274de5ba94dfc3ce756d1c8e))
* **client:** detect browser usage ([#182](https://github.com/Modern-Treasury/modern-treasury-node/issues/182)) ([f571e78](https://github.com/Modern-Treasury/modern-treasury-node/commit/f571e786840477c48411e227f015ddceeac5e239))
* **client:** support accessing raw response + remove deprecated features ([#191](https://github.com/Modern-Treasury/modern-treasury-node/issues/191)) ([ca27da3](https://github.com/Modern-Treasury/modern-treasury-node/commit/ca27da367bb37e7045b15ccc01fccebeafdc9ce9))
* **streaming:** add `.toReadableStream()` method ([#185](https://github.com/Modern-Treasury/modern-treasury-node/issues/185)) ([7765c7b](https://github.com/Modern-Treasury/modern-treasury-node/commit/7765c7b08ab0c873da97af25cd6b4c35a967ab7f))


### Bug Fixes

* **client:** fix array query param serialization ([#195](https://github.com/Modern-Treasury/modern-treasury-node/issues/195)) ([c091449](https://github.com/Modern-Treasury/modern-treasury-node/commit/c091449e81b50a16f05cf06c822251d2c0154f48))
* remove redundant `Content-Type`  header param ([#190](https://github.com/Modern-Treasury/modern-treasury-node/issues/190)) ([0dedec0](https://github.com/Modern-Treasury/modern-treasury-node/commit/0dedec00c9daec61162ad04548287b7cb7581e29))


### Documentation

* **api:** improve custom method arguments ([#184](https://github.com/Modern-Treasury/modern-treasury-node/issues/184)) ([ea440fd](https://github.com/Modern-Treasury/modern-treasury-node/commit/ea440fd721ef06b2b9e75293da3aee4bb3f91748))
* **readme:** minor updates ([#192](https://github.com/Modern-Treasury/modern-treasury-node/issues/192)) ([94a83be](https://github.com/Modern-Treasury/modern-treasury-node/commit/94a83bec5981737f9186850c8ec8ecab0e9db27c))
* **readme:** remove beta status + document versioning policy ([#181](https://github.com/Modern-Treasury/modern-treasury-node/issues/181)) ([5a7f4a4](https://github.com/Modern-Treasury/modern-treasury-node/commit/5a7f4a4a43f4e20f3012ca9ba39d1803ad4bcc45))


### Chores

* assign default reviewers to release PRs ([#197](https://github.com/Modern-Treasury/modern-treasury-node/issues/197)) ([ef8f6b0](https://github.com/Modern-Treasury/modern-treasury-node/commit/ef8f6b07e4ec54b107f80d1e87221a28fdfda349))
* **internal:** change jest exclude patterns ([#189](https://github.com/Modern-Treasury/modern-treasury-node/issues/189)) ([2f59bf2](https://github.com/Modern-Treasury/modern-treasury-node/commit/2f59bf2c195abb237839b8a8b2e9b744b7c6c0bc))
* **internal:** conditionally include bin during build output ([#193](https://github.com/Modern-Treasury/modern-treasury-node/issues/193)) ([7dfe154](https://github.com/Modern-Treasury/modern-treasury-node/commit/7dfe154c8c49d319d5e98be7f380c209f796772c))
* **internal:** fix deno build ([#177](https://github.com/Modern-Treasury/modern-treasury-node/issues/177)) ([f04bfc3](https://github.com/Modern-Treasury/modern-treasury-node/commit/f04bfc305c3e5430284502d0fdbdb4578f1f28d8))
* **internal:** fix error happening in CloudFlare pages ([#198](https://github.com/Modern-Treasury/modern-treasury-node/issues/198)) ([5fa6d25](https://github.com/Modern-Treasury/modern-treasury-node/commit/5fa6d25ec13fc37d70da3be68792eecf2d4f4d99))
* **internal:** improve error message when option is missing ([#199](https://github.com/Modern-Treasury/modern-treasury-node/issues/199)) ([db2e836](https://github.com/Modern-Treasury/modern-treasury-node/commit/db2e836f9d046ec1cc517afe20fda116f0b9f4d8))
* **internal:** remove deno build ([#183](https://github.com/Modern-Treasury/modern-treasury-node/issues/183)) ([3db3231](https://github.com/Modern-Treasury/modern-treasury-node/commit/3db3231509cfc949fdd672ec54d48d4f96a315ac))
* **internal:** update eslint ([#187](https://github.com/Modern-Treasury/modern-treasury-node/issues/187)) ([0d185b0](https://github.com/Modern-Treasury/modern-treasury-node/commit/0d185b0a0935704ab3ce5098743db28eee36ff02))
* **internal:** update tsconfig-paths dep ([#188](https://github.com/Modern-Treasury/modern-treasury-node/issues/188)) ([9370fe5](https://github.com/Modern-Treasury/modern-treasury-node/commit/9370fe52fdf84e3d0737629eaf5714d6563bbb08))
* **internal:** update typescript ([#186](https://github.com/Modern-Treasury/modern-treasury-node/issues/186)) ([7186ad6](https://github.com/Modern-Treasury/modern-treasury-node/commit/7186ad6e0ba1fb096cfad4852b9670e2b43f9113))

## [2.2.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.1.0...v3.0.0) (2023-08-01)


### ⚠ BREAKING CHANGES

* **types:** rename account connection flow to account collection flow ([#164](https://github.com/Modern-Treasury/modern-treasury-node/issues/164))
* **api:** update parameters for virtual account create request ([#157](https://github.com/Modern-Treasury/modern-treasury-node/issues/157))

### Features

* **api:** update parameters for virtual account create request ([#157](https://github.com/Modern-Treasury/modern-treasury-node/issues/157)) ([1e5aebe](https://github.com/Modern-Treasury/modern-treasury-node/commit/1e5aebe5378c24a9400f12736643427941aee98f))
* **api:** updates ([#166](https://github.com/Modern-Treasury/modern-treasury-node/issues/166)) ([40a3e9e](https://github.com/Modern-Treasury/modern-treasury-node/commit/40a3e9e734d709269fc28319e64fe72d6fb85d61))
* **api:** updates ([#171](https://github.com/Modern-Treasury/modern-treasury-node/issues/171)) ([c47cae2](https://github.com/Modern-Treasury/modern-treasury-node/commit/c47cae26e89f158823963f826176635cc073ad9d))
* **client:** export ClientOptions interface ([#161](https://github.com/Modern-Treasury/modern-treasury-node/issues/161)) ([cfc1517](https://github.com/Modern-Treasury/modern-treasury-node/commit/cfc1517a8531fdb29d8581f930ddf199b4e6f9c2))
* **streaming:** make requests immediately throw an error if an aborted signal is passed in ([#163](https://github.com/Modern-Treasury/modern-treasury-node/issues/163)) ([3282c5d](https://github.com/Modern-Treasury/modern-treasury-node/commit/3282c5d492c0a59c6e57ad4ccd1cf17ee3dac3c1))
* **test:** unskip file uploads tests ([#175](https://github.com/Modern-Treasury/modern-treasury-node/issues/175)) ([8117843](https://github.com/Modern-Treasury/modern-treasury-node/commit/81178432e87c937dd0937d815de90d7ccdda4dd4))


### Bug Fixes

* **api:** add response body to `virtualAccounts.retrieve()` and update resources ([#155](https://github.com/Modern-Treasury/modern-treasury-node/issues/155)) ([b5464dd](https://github.com/Modern-Treasury/modern-treasury-node/commit/b5464dd14855278c5c829f1c664e43465344636e))
* **client:** fix errors with file uploads in the browser ([#162](https://github.com/Modern-Treasury/modern-treasury-node/issues/162)) ([a2dda93](https://github.com/Modern-Treasury/modern-treasury-node/commit/a2dda93f6af6fc6e8442352b0b06f8ef49e21e6c))
* **client:** handle undefined process in more places ([#170](https://github.com/Modern-Treasury/modern-treasury-node/issues/170)) ([5d0a45b](https://github.com/Modern-Treasury/modern-treasury-node/commit/5d0a45b774996f02e67e8eec43e256121d1d74b3))
* **client:** set client options argument as optional ([#168](https://github.com/Modern-Treasury/modern-treasury-node/issues/168)) ([9f2ac54](https://github.com/Modern-Treasury/modern-treasury-node/commit/9f2ac54ce3fddbf620e252812c3f1f16a1dcbd7e))
* fix error in environments without `TextEncoder` ([#158](https://github.com/Modern-Treasury/modern-treasury-node/issues/158)) ([1dba8bc](https://github.com/Modern-Treasury/modern-treasury-node/commit/1dba8bc1fba59451bd0c94cd00f503080339b7ec))
* fix errors with "named" client export in CJS ([#156](https://github.com/Modern-Treasury/modern-treasury-node/issues/156)) ([31b4844](https://github.com/Modern-Treasury/modern-treasury-node/commit/31b48446dd720f3b05810434cc4645d05c4b49fd))
* fix export map order ([#160](https://github.com/Modern-Treasury/modern-treasury-node/issues/160)) ([b47d673](https://github.com/Modern-Treasury/modern-treasury-node/commit/b47d6734e844d5b0c50ffe00d3c198a98517d938))
* fix undefined message in errors ([#169](https://github.com/Modern-Treasury/modern-treasury-node/issues/169)) ([4c914f4](https://github.com/Modern-Treasury/modern-treasury-node/commit/4c914f4c4c6a87a1be0ee5ae035ef83cb2cbec3e))


### Refactors

* create build for deno.land ([#174](https://github.com/Modern-Treasury/modern-treasury-node/issues/174)) ([bb9f890](https://github.com/Modern-Treasury/modern-treasury-node/commit/bb9f890d8daa6e972b010249620b8988ed65df6c))
* **types:** rename account connection flow to account collection flow ([#164](https://github.com/Modern-Treasury/modern-treasury-node/issues/164)) ([12ae4aa](https://github.com/Modern-Treasury/modern-treasury-node/commit/12ae4aac4820b17be6229efed5ec4d9cee67d802))
* use destructuring arguments in client constructor and respect false values ([#172](https://github.com/Modern-Treasury/modern-treasury-node/issues/172)) ([2efa6bd](https://github.com/Modern-Treasury/modern-treasury-node/commit/2efa6bd41d784b78d8433e9092c636dd41e988c1))


### Chores

* **internal:** allow the build script to be run without yarn installed ([#173](https://github.com/Modern-Treasury/modern-treasury-node/issues/173)) ([c57d134](https://github.com/Modern-Treasury/modern-treasury-node/commit/c57d134106e05d7fa24d790254877d9fc2ae573e))
* **internal:** fix deno build ([#176](https://github.com/Modern-Treasury/modern-treasury-node/issues/176)) ([660c841](https://github.com/Modern-Treasury/modern-treasury-node/commit/660c8416c8ac208e0e06a17ab7a86eefb16cc521))
* **internal:** let `toFile` helper accept promises to objects with name/type properties ([#153](https://github.com/Modern-Treasury/modern-treasury-node/issues/153)) ([0965670](https://github.com/Modern-Treasury/modern-treasury-node/commit/096567096abdce934a7f050a35f6fce604a8fb44))
* **internal:** restructure code to stringify query ([#159](https://github.com/Modern-Treasury/modern-treasury-node/issues/159)) ([82dae5b](https://github.com/Modern-Treasury/modern-treasury-node/commit/82dae5b5a15beb25407c1369865a8d4d74769c06))

## [2.1.0](https://github.com/Modern-Treasury/modern-treasury-node/compare/v2.0.0...v2.1.0) (2023-07-13)


### Features

* **client:** add support for passing a `signal` request option ([#148](https://github.com/Modern-Treasury/modern-treasury-node/issues/148)) ([33236e6](https://github.com/Modern-Treasury/modern-treasury-node/commit/33236e6ff2e4f02882fc6717bccee5e51867f0e5))
* **client:** improve timeout handling to reuse agent ([#140](https://github.com/Modern-Treasury/modern-treasury-node/issues/140)) ([afa8b25](https://github.com/Modern-Treasury/modern-treasury-node/commit/afa8b257c3175b22bf647efe88139638f7fa92d4))
* **client:** support passing a custom `fetch` function ([#144](https://github.com/Modern-Treasury/modern-treasury-node/issues/144)) ([d32ecbc](https://github.com/Modern-Treasury/modern-treasury-node/commit/d32ecbc8b8ae4288c61c5dd10e236f1883bf21b6))
* improvements to ecosystem compatibility ([#151](https://github.com/Modern-Treasury/modern-treasury-node/issues/151)) ([9a0343e](https://github.com/Modern-Treasury/modern-treasury-node/commit/9a0343ed4d9310337b6e54c3a63deccea65ca2eb))


### Bug Fixes

* **client:** properly handle multi-byte characters in Content-Length ([#145](https://github.com/Modern-Treasury/modern-treasury-node/issues/145)) ([6adf4d8](https://github.com/Modern-Treasury/modern-treasury-node/commit/6adf4d877326e5f57a29101bf05df74fded4bddf))
* fix errors in package source files when users go to definition in VSCode ([#139](https://github.com/Modern-Treasury/modern-treasury-node/issues/139)) ([148fefe](https://github.com/Modern-Treasury/modern-treasury-node/commit/148fefee55106352d2ce236515ed1e645392b410))
* include README.md, LICENSE and CHANGELOG.md in published package ([#136](https://github.com/Modern-Treasury/modern-treasury-node/issues/136)) ([e372a1b](https://github.com/Modern-Treasury/modern-treasury-node/commit/e372a1b207fff03bf89f69f14b81f2c065a66c98))
* **streaming:** do not abort successfully completed streams ([#147](https://github.com/Modern-Treasury/modern-treasury-node/issues/147)) ([5f7f44e](https://github.com/Modern-Treasury/modern-treasury-node/commit/5f7f44e456a3569225f138de56937eaccb25a225))
* **streaming:** fix response body streaming in non-Chrome environments ([#142](https://github.com/Modern-Treasury/modern-treasury-node/issues/142)) ([cb86104](https://github.com/Modern-Treasury/modern-treasury-node/commit/cb8610457076d6b0e6203f00d086f827da626279))
* **streaming:** polyfill ReadableStream async iterator and text decoding ([#135](https://github.com/Modern-Treasury/modern-treasury-node/issues/135)) ([1da7d67](https://github.com/Modern-Treasury/modern-treasury-node/commit/1da7d67eb8ca03b32a77f3dfe687e24c9640f06b))
* support `PromiseLike` input to `toFile` ([#138](https://github.com/Modern-Treasury/modern-treasury-node/issues/138)) ([f157769](https://github.com/Modern-Treasury/modern-treasury-node/commit/f157769ae96eb269697d3491e9bddfbf19377b54))


### Refactors

* improve streaming implementation ([#137](https://github.com/Modern-Treasury/modern-treasury-node/issues/137)) ([6716dd2](https://github.com/Modern-Treasury/modern-treasury-node/commit/6716dd2f9e6cba2696f851d6b977cadd5787281f))
* **streaming:** make response body streaming polyfill more spec-compliant ([#143](https://github.com/Modern-Treasury/modern-treasury-node/issues/143)) ([9f62d25](https://github.com/Modern-Treasury/modern-treasury-node/commit/9f62d2571bb1c15b844f080af9d1c2485cbba4cd))


### Documentation

* **readme:** improvements to formatting code snippets ([#149](https://github.com/Modern-Treasury/modern-treasury-node/issues/149)) ([699a630](https://github.com/Modern-Treasury/modern-treasury-node/commit/699a630ca581d0dee599509b972fc44e58d1c9b1))
* **readme:** minor improvements ([#146](https://github.com/Modern-Treasury/modern-treasury-node/issues/146)) ([09c7bb5](https://github.com/Modern-Treasury/modern-treasury-node/commit/09c7bb514f4894336604cd6e408e0506c1c17e26))


### Chores

* **internal:** fix release please version config ([#134](https://github.com/Modern-Treasury/modern-treasury-node/issues/134)) ([1cc2a12](https://github.com/Modern-Treasury/modern-treasury-node/commit/1cc2a1231e6818f7012f2aec653dc9e28d769620))
* **internal:** remove unused streaming implementation ([#150](https://github.com/Modern-Treasury/modern-treasury-node/issues/150)) ([3665f89](https://github.com/Modern-Treasury/modern-treasury-node/commit/3665f89da6595ab76b4a57721a646f75c1b1e7d0))

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
