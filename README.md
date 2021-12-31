vue-monorepo-template
===

[![Downloads](https://img.shields.io/static/v1?label=Github&message=repo&color=green&style=flat&logo=github)](https://github.com/tsbbjs/vue-monorepo-template)
[![Build & Deploy](https://github.com/tsbbjs/vue-monorepo-template/actions/workflows/ci.yml/badge.svg)](https://github.com/tsbbjs/vue-monorepo-template/actions/workflows/ci.yml)

Simple [`vue 3`](https://v3.vuejs.org/) package development project example template.

### Directory Structure

```shell
.
├── README.md
├── lerna.json
├── package.json
├── packages             # The directory where the package is placed
│   ├── base                # 📦 package @vue-monorepo-template/base
│   │   ├── cjs             # 🔄 Compiled cjs directory
│   │   ├── esm             # 🔄 Compiled esm directory
│   │   ├── package.json
│   │   ├── src             # Package source directory
│   │   └── tsconfig.json
│   └── simple              # 📦 package @vue-monorepo-template/simple
├── tsconfig.json
└── website              # 🐝 Package example test, website
    ├── README.md
    ├── babel.config.js
    ├── package.json
    ├── public
    ├── src
    └── vue.config.js
```

### Development

1. Install

```shell
npm install
```

2. Dependencies in the installation package and example

```shell
npm run bootstrap
```

3. Compile the code in the package

```shell
npm run build        # Compile all packages 📦 code

npm run watch:simple # Real-time compilation 📦 @vue-monorepo-template/simple
npm run watch:base   # Real-time compilation 📦 @vue-monorepo-template/base
```

4. Start the `website` example website

```shell
npm run start
```

### License

Licensed under the MIT License.
