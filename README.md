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
├── packages             # 放置包的目录
│   ├── base                # 📦 包 @vue-monorepo-template/base
│   │   ├── cjs             # 🔄 编译后的 cjs 目录
│   │   ├── esm             # 🔄 编译后的 esm 目录
│   │   ├── package.json
│   │   ├── src             # 包源码目录
│   │   └── tsconfig.json
│   └── simple              # 📦 包 @vue-monorepo-template/simple
├── tsconfig.json
└── website              # 🐝 包实例测试，网站
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
