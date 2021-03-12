import Router from "koa-router";
import convert from "koa-convert";
import KoaBody from "koa-body";

import Urls from "../models/urls";
import genToken from "../utils/generator";

const router = new Router(),
  koaBody = convert(KoaBody());

router
  .get("/", async (ctx, next) => {
    ctx.body = "Server is started";
  })
  .get("/get", async (ctx, next) => {
    const token = ctx.request.query.tkn;
    let res = await Urls.findOne({ token: token });
    if (res) {
      ctx.body = res;
    } else {
      ctx.status = 204;
    }
  })
  .post("/short", koaBody, async (ctx, next) => {
    let url = new Urls({
      url: ctx.request.body.url,
      token: genToken(),
    });

    ctx.status = 201;
    ctx.body = await url.save();
  });

export function routes() {
  return router.routes();
}
export function allowedMethods() {
  return router.allowedMethods();
}
