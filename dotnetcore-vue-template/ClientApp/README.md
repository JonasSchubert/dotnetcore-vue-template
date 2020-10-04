# .Net Core Vue Template - Frontend

[![VueJs](https://img.shields.io/badge/Frontend-VueJs-green.svg)](https://vuejs.org/)
[![Version](https://img.shields.io/badge/Version-20.10.04--0-blue.svg)](./src/)

[![Statements](https://img.shields.io/badge/Statements-97.62%25-green.svg)](./tests/unit/)
[![Branch](https://img.shields.io/badge/Branch-100%25-green.svg)](./tests/unit/)
[![Functions](https://img.shields.io/badge/Functions-93.75%25-green.svg)](./tests/unit/)
[![Lines](https://img.shields.io/badge/Lines-97.48%25-green.svg)](./tests/unit/)

The frontend for the i18n service.

### Screenshots

| Light | Dark |
| ----- | ---- |
| ![light](./screenshots/light.jpg) | ![dark](./screenshots/dark.jpg) |

### NPM Scripts

```
npm run build                 // Compiles and minifies for production
npm run libs                  // Links the src of project vue-library as libs
npm run lint                  // Lints and fixes files
npm run pre-push              // Runs 'lint', 'test:unit' and 'build'
npm run serve                 // Compiles and hot-reloads for development
npm run test:unit             // Run your unit tests
npm run test:e2e              // Run your end-to-end tests
npm run update-local-version  // Updates the version for this application in this README.md, the package.json and the package-lock.json, stages and commits these files
```

### Attention

This project needs my [vue-library](https://github.com/JonasSchubert/vue-library) to be linked using above command `npm run libs`.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
