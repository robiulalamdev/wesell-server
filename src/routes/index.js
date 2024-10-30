const express = require("express");
const { helperRoutes } = require("../modules/helper/helper.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/helpers",
    route: helperRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
module.exports = { routers: router };
