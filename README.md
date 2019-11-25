# Ciklum University: JS Band Internship

## js-band-hw-task-4

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[This app on GitPages](http://ras.pp.ua/js-band-hw-task-4 "This app on GitPages")

To run this application, check for the latest versions:

- [NodeJS](https://nodejs.org/en/) [v12.13.0]
- [Git](https://git-scm.com/downloads) [2.24.0]
- [npm](https://www.npmjs.com/get-npm)[v6.13.0] or [yarn](https://yarnpkg.com/lang/en/docs/install/) [v1.19.1]

---

### Installation

```bash
npm install
yarn
```

### Usage

#### Start the dev-server on localhost: 9000 with HMR

```bash
npm start
yarn start
```

#### Create a dist folder and show the Webpack Bundle Analyzer report

```bash
npm run build
yarn build
```

#### Run Jest tests without coverage test

```bash
npm test
yarn test
```

#### Run Jest tests with coverage test

```bash
npm test -- --coverage
yarn test --coverage
```

#### Run app test in watch mode

```bash
npm run test:watch
yarn test:watch
```

#### Run eslint scripts test

```bash
npm run lint
yarn lint
```

#### Git commit with pre-commit hooks (eslint , jest, commitizen)

```bash
git commit
```

---

### Project structure

```bash
├──coverage/                - Jest coverage folder
├──jest/                    - Jest config
│   ├── scripts/
│   └──jest.test.config
├── dist/                   - Build folder
├── src/                    - Source folder
│   ├── assets/
│   │   ├── favicon/
│   │   ├── fonts/
│   │   └── img/
│   ├── js/
│   │   ├── components/     - JS modules
│   │   └── index.js        - Main js file
│   ├── styles/
│   │   ├── components/     - CSS modules
│   │   └── styles.scss     - Main css file
│   └── index.html          - Main html file
├── webpack/                - Webpack config
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── .eslintignore           - ESlint ignore rules
├── .eslintrc               - ESlint config
├── .huskyrc                - Husky config
├── .nvmrc                  - Node version
├── babel.config.js         - Babel config
└── package.json
```

---
  
### License

[MIT](https://choosealicense.com/licenses/mit/)
