# node-jest-react-server
This is a stencil for basic server base on node react and jest.

## Current Status:

[![Alpine 3.7](https://img.shields.io/badge/alpine-3.7-brightgreen.svg)]()
[![Nginx 1.14](https://img.shields.io/badge/nginx-1.14-brightgreen.svg)]()
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![Docker Pulls](https://img.shields.io/docker/pulls/xqstencils/node-jest-react-server.svg)](https://hub.docker.com/r/xqstencils/node-jest-react-server/)
[![Docker Stars](https://img.shields.io/docker/stars/xqstencils/node-jest-react-server.svg)](https://hub.docker.com/r/xqstencils/node-jest-react-server/)
[![Docker image](https://images.microbadger.com/badges/image/xqstencils/node-jest-react-server.svg)](https://microbadger.com/images/xqstencils/node-jest-react-server)
[![Build Status](https://circleci.com/gh/xqstencils/node-jest-react-server.svg?style=svg)](https://circleci.com/gh/xqstencils/node-jest-react-server)

## Features:

* Support Publish your package to git & npm with ci.
* Support CircleCi for pipeline.
* Support ES7 & ES6 syntax.
* Support ESlint to check the code.
* Support Jest to test your code.
* Support Yarn audit to do security check for dependencies.
* Support Build docker image and push to docker hub.
* Support Deploy app to Heroku.

## Development:

### Setup

Clone this stencil and replace `@xq-stencil/node-jest-react-server` with your package name.

```
$> git clone git@github.com:xqstencils/node-jest-react-server.git
```

### Install dependencies

```
$> yarn install
```

### Compile code

```
$> yarn babel
# or run babel in watch mode
$> yarn babel:watch
```

### Generate distribution code

```
$> yarn build
```

### Linting

```
$> yarn lint
```

### Testing

```
$> yarn test
# or run the test in watch mode
$> yarn test:watch
```

### Security check

```
$> yarn audit
```

### Setup CI

* Update the circleci config
* Setup the ci into circleci site.


### Start in local

```
$> yarn start
```

## License

node-jest-react-server is released under the [MIT license](https://github.com/xqstencils/node-jest-react-server/blob/master/LICENSE).