### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-router.svg)](https://greenkeeper.io/)
All router api should refer [koa-router](https://github.com/alexmingoia/koa-router)

Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Server from 'magnet-spdy';
import Session from 'magnet-session';
import Router from 'magnet-router';

let app = await magnet([Config, Logger, Server, Session, Router]);
```

server/controllers/user.js
```
export default function user({ router }) {
  router

  .get('/users', async function (ctx) {
    ctx.body = [];
  })

  .post('/user', async function (ctx) {
    ctx.body = ctx.request.body;
  })

  .put('/user/:userId', async function (ctx) {
    ctx.body = ctx.params;
  })

  .get('/user/:userId', async function (ctx) {
    ctx.body = ctx.query;
  });
}
```
