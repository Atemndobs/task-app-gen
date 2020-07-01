# task-app-gen

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## How to generate a vue crup application for a api platfrom resource:

``` bash
vue init webpack-simple my-app
cd my-app

yarn add vue-router vuex vuex-map-fields babel-plugin-transform-builtin-extend babel-preset-es2015 babel-preset-stage-2 lodash

yarn add bootstrap font-awesome

npx @api-platform/client-generator https://demo.api-platform.com src/ --generator vue --resource book
### for this example :
npx @api-platform/client-generator  https://putzplan-admin.herokuapp.com/api src/ --generator vue --resource task

### Replace the URL with the entrypoint of your Hydra-enabled API
### Omit the resource flag to generate files for all resource types exposed by the API
```
For detailed explanation on how this is generated, consult the [Vue.js Generator](https://api-platform.com/docs/client-generator/vuejs/).
