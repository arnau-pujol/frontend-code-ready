# Frontend Boilerplate

A basic multipurpose boilerplate to let you focus on code.

## Features

* [Sass][sass] stylesheets
* [Postcss][postcss] optimizing the CSS with [autoprefixer][autoprefixer], [css-mqpacker][css-mqpacker]
* JS transpilation with [Webpack][webpack] and [Babel][babel]
* [Jest][jest] up and running for tests
* Integrated server with hot reload, powered by [webpack-dev-server][webpack-dev-server]
* [Prettier][jest] code formatting ready using a precommit hook and [travis][travis]
* Ready for production build with minified code using [terser][terser]
* Static build output


## Up and running

* Have [NodeJS][nodejs] installed
* Install dependencies by `npm i` or `yarn`
* Build static files by `npm build` or `yarn build`
* Launch the app by `npm start` or `yarn start`
* Tests by `npm test` or `yarn test`


[nodejs]: https://nodejs.org
[yarn]: https://yarnpkg.com
[sass]: https://sass-lang.com/
[postcss]: https://postcss.org/
[autoprefixer]: https://github.com/postcss/autoprefixer
[css-mqpacker]: https://github.com/hail2u/node-css-mqpacker
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[travis]: https://travis-ci.com/
[terser]: https://github.com/webpack-contrib/terser-webpack-plugin
[webpack-dev-server]: https://github.com/webpack/webpack-dev-server
